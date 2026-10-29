(function(){
  const D = window.LEO, $ = s => document.querySelector(s);
  const fmt = (iso, o) => new Date(iso + "T00:00:00").toLocaleDateString("en-GB", o);
  $("#yr").textContent = new Date().getFullYear();

  // Stats
  $("#stats").innerHTML = D.stats.map(s =>
    `<div class="stat"><strong data-n="${s.value}">0</strong><span>${s.label}</span></div>`).join("");
  $("#statsNote").textContent = D.statsVerified ? "Source: district records." : "Sample figures. Replace with verified district records before launch.";

  // Initiatives
  $("#initiatives-list").innerHTML = D.initiatives.map((p, i) =>
    `<article class="init ${i % 2 ? "flip" : ""}">
      <div class="ph" style="${p.img ? `background-image:url(${p.img})` : ""}"></div>
      <div><h3>${p.title}</h3><p>${p.text}</p><div class="res">${p.result}</div></div>
    </article>`).join("");

  // Events
  $("#events-list").innerHTML = D.events.map(e =>
    `<li><a href="${e.link}"><time><b>${fmt(e.date,{day:"numeric"})}</b>${fmt(e.date,{month:"short",year:"numeric"})}</time>
      <div><h3>${e.title}</h3><span>${e.place}</span></div><i class="arr"></i></a></li>`).join("");

  // News
  $("#news-list").innerHTML = D.news.map(n =>
    `<article><time>${fmt(n.date,{day:"numeric",month:"long",year:"numeric"})}</time><h3>${n.title}</h3><p>${n.text}</p></article>`).join("");

  // Club search
  const statuses = ["All", ...new Set(D.clubs.map(c => c.status))];
  let active = "All";
  $("#chips").innerHTML = statuses.map(s => `<button class="chip${s==="All"?" on":""}">${s}</button>`).join("");
  function drawClubs(){
    const q = $("#q").value.trim().toLowerCase();
    const list = D.clubs.filter(c => (active==="All"||c.status===active) &&
      (c.name+c.place+c.institution).toLowerCase().includes(q));
    $("#clubs-list").innerHTML = list.length ? list.map(c =>
      `<article class="club"><span class="badge">${c.status}</span><h3>${c.name}</h3><p>${c.institution}<br>${c.place}</p></article>`).join("")
      : `<p class="empty">No club matches your search. Try a different name or area.</p>`;
  }
  $("#q").addEventListener("input", drawClubs);
  $("#chips").addEventListener("click", e => {
    if(!e.target.classList.contains("chip")) return;
    active = e.target.textContent;
    document.querySelectorAll(".chip").forEach(c => c.classList.toggle("on", c === e.target));
    drawClubs();
  });
  drawClubs();

  // Nav
  const nav = $("#nav"), burger = $("#burger");
  addEventListener("scroll", () => nav.classList.toggle("solid", scrollY > 40), {passive:true});
  burger.onclick = () => { const o = nav.classList.toggle("open"); burger.setAttribute("aria-expanded", o); };
  $("#menu").onclick = () => nav.classList.remove("open");

  // Count-up (runs once when the stats scroll into view)
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const count = el => {
    const n = +el.dataset.n; if(reduce){ el.textContent = n.toLocaleString(); return; }
    const t0 = performance.now();
    (function step(t){ const p = Math.min((t - t0) / 1800, 1);
      el.textContent = Math.round(n * (1 - Math.pow(1 - p, 4))).toLocaleString();
      if(p < 1) requestAnimationFrame(step); })(t0);
  };
  const io = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){
    e.target.querySelectorAll("[data-n]").forEach(count); e.target.classList.add("in"); io.unobserve(e.target); }}), {threshold:.35});
  io.observe($(".stat-row"));
  const io2 = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add("in"); io2.unobserve(e.target); }}), {threshold:.2});
  document.querySelectorAll(".init").forEach(el => io2.observe(el));
})();
