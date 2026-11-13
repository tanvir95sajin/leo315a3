(function () {
  const D = window.LEO, L = D.leadership, $ = s => document.querySelector(s);
  const page = document.body.dataset.page;
  let io;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const fmt = (iso, o) => new Date(iso + "T00:00:00").toLocaleDateString("en-GB", o);
  const ini = n => n.split(/\s+/).map(w => w[0]).slice(0, 2).join("").toUpperCase();
  const logo = k => `<img src="${D.logos[k]}" alt="${k} logo">`;

  /* ---------- shared: nav, footer, progress, back-to-top ---------- */
  const links = [["index.html", "Home"], ["leadership.html", "Leadership"], ["gallery.html", "Gallery"], ["index.html#clubs", "Find a Club"], ["index.html#events", "Events"]];
  const cur = { home: "index.html", leadership: "leadership.html", gallery: "gallery.html" }[page];
  document.body.insertAdjacentHTML("afterbegin",
    `<div class="progress" id="prog"></div>
     <header class="nav ${page === "home" ? "" : "solid"}" id="nav">
       <a class="brand" href="index.html">${logo("leo")}<span><b>Leo</b> District 315 A3</span></a>
       <button class="burger" id="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span></button>
       <nav id="menu">${links.map(l => `<a href="${l[0]}" ${l[0] === cur ? 'class="cur"' : ""}>${l[1]}</a>`).join("")}<a class="pill" href="join.html">Join Leo</a></nav>
     </header>`);
  document.body.insertAdjacentHTML("beforeend",
    `<footer><div class="wrap foot">
       <div><div class="fl">${logo("leo")}${logo("lions")}</div><b>Leo District 315 A3</b><br>Bangladesh<small>Leo is the youth programme of Lions Clubs International.</small></div>
       <div><b>Explore</b><br><a href="leadership.html">Leadership</a><br><a href="gallery.html">Gallery</a><br><a href="index.html#clubs">Find a Club</a><br><a href="join.html">Join Leo</a></div>
       <div><b>Contact</b><br><a href="mailto:${esc(D.site.email)}">${esc(D.site.email)}</a><br><a href="${esc(D.site.facebook)}">Facebook</a> · <a href="${esc(D.site.instagram)}">Instagram</a><small>&copy; ${new Date().getFullYear()} Leo District 315 A3</small></div>
     </div></footer><button class="totop" id="totop" aria-label="Back to top">&uarr;</button>`);
  const nav = $("#nav"), burger = $("#burger"), prog = $("#prog"), totop = $("#totop");
  burger.onclick = () => { const o = nav.classList.toggle("open"); burger.setAttribute("aria-expanded", o); };
  $("#menu").onclick = () => nav.classList.remove("open");
  totop.onclick = () => scrollTo({ top: 0, behavior: "smooth" });
  const onScroll = () => {
    if (page === "home") nav.classList.toggle("solid", scrollY > 40);
    const h = document.documentElement.scrollHeight - innerHeight;
    prog.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
    totop.classList.toggle("on", scrollY > 700);
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* ---------- shared: templates ---------- */
  const pic = (p, dir) => `<div class="pic"><span>${esc(ini(p.name))}</span>${p.photo ? `<img src="assets/img/${dir}/${esc(p.photo)}" alt="${esc(p.name)}" loading="lazy" onerror="this.remove()">` : ""}</div>`;
  const person = (p, i, full, cls) => `<article class="person rv tilt-me ${cls || ""}" style="--i:${i}">${pic(p, "leadership")}
    <h3>${esc(p.name)}</h3><div class="role">${esc(p.role)}</div><div class="club">${esc(p.club || "")}</div>
    ${full ? `${p.bio ? `<p>${esc(p.bio)}</p>` : ""}<div class="meta">${p.term ? "Term: " + esc(p.term) : ""}${p.contact ? ` &middot; <a href="${esc(p.contact)}">Contact</a>` : ""}</div>` : ""}</article>`;
  const grid = (arr, full, cls, extra) => `<div class="people ${extra || ""}">${arr.map((p, i) => person(p, i, full, cls)).join("")}</div>`;

  /* ---------- HOME ---------- */
  if (page === "home") {
    $("#sealLogos").innerHTML = logo("leo") + logo("lions");
    $("#stats").innerHTML = D.stats.map(s => `<div class="stat"><strong data-n="${s.value}">0</strong><span>${esc(s.label)}</span></div>`).join("");
    $("#statsNote").textContent = D.statsVerified ? "Source: district records." : "Sample figures. Replace with verified district records before launch.";
    const tk = $("#tk"); tk.innerHTML += tk.innerHTML;

    $("#messages-list").innerHTML = D.messages.map((m, i) => `
      <article class="msg rv" style="--i:${i}">
        <div class="msg-top">${pic(m, "messages")}<div class="msg-id">${m.logo ? logo(m.logo) : ""}<h3>${esc(m.name)}</h3><div class="role">${esc(m.role)}</div></div></div>
        <p>${esc(m.text[0])}</p>
        ${m.text.length > 1 ? `<div class="more" id="more${i}"><div>${m.text.slice(1).map(t => `<p>${esc(t)}</p>`).join("")}</div></div><button class="toggle" aria-expanded="false" aria-controls="more${i}">Read the full message</button>` : ""}
      </article>`).join("");
    $("#messages-list").addEventListener("click", e => {
      const b = e.target.closest(".toggle"); if (!b) return;
      const open = b.previousElementSibling.classList.toggle("open");
      b.setAttribute("aria-expanded", open); b.textContent = open ? "Show less" : "Read the full message";
    });

    $("#initiatives-list").innerHTML = D.initiatives.map((p, i) => `<article class="init rv ${i % 2 ? "flip" : ""}">
      <div class="ph" style="${p.img ? `background-image:url(${esc(p.img)})` : ""}"></div>
      <div><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p><div class="res">${esc(p.result)}</div></div></article>`).join("");
    $("#events-list").innerHTML = D.events.map((e, i) => `<li class="rv" style="--i:${i}"><a href="${esc(e.link)}"><time><b>${fmt(e.date, { day: "numeric" })}</b>${fmt(e.date, { month: "short", year: "numeric" })}</time>
      <div><h3>${esc(e.title)}</h3><span>${esc(e.place)}</span></div><i class="arr"></i></a></li>`).join("");
    $("#news-list").innerHTML = D.news.map((n, i) => `<article class="rv" style="--i:${i}"><time>${fmt(n.date, { day: "numeric", month: "long", year: "numeric" })}</time><h3>${esc(n.title)}</h3><p>${esc(n.text)}</p></article>`).join("");

    const statuses = ["All", ...new Set(D.clubs.map(c => c.status))]; let active = "All";
    $("#chips").innerHTML = statuses.map(s => `<button class="chip${s === "All" ? " on" : ""}">${esc(s)}</button>`).join("");
    const drawClubs = () => {
      const q = $("#q").value.trim().toLowerCase();
      const list = D.clubs.filter(c => (active === "All" || c.status === active) && (c.name + c.place + c.institution).toLowerCase().includes(q));
      $("#clubs-list").innerHTML = list.length ? list.map(c => `<article class="club-card tilt-me"><span class="badge">${esc(c.status)}</span><h3>${esc(c.name)}</h3><p>${esc(c.institution)}<br>${esc(c.place)}</p></article>`).join("")
        : `<p class="empty">No club matches your search. Try a different name or area.</p>`;
      bindTilt();
    };
    $("#q").addEventListener("input", drawClubs);
    $("#chips").addEventListener("click", e => {
      if (!e.target.classList.contains("chip")) return;
      active = e.target.textContent;
      document.querySelectorAll("#chips .chip").forEach(c => c.classList.toggle("on", c === e.target)); drawClubs();
    });
    drawClubs();

    const count = el => {
      const n = +el.dataset.n; if (reduce) { el.textContent = n.toLocaleString(); return; }
      const t0 = performance.now();
      (function step(t) { const p = Math.min((t - t0) / 1800, 1); el.textContent = Math.round(n * (1 - Math.pow(1 - p, 4))).toLocaleString(); if (p < 1) requestAnimationFrame(step); })(t0);
    };
    new IntersectionObserver((es, o) => es.forEach(e => { if (e.isIntersecting) { e.target.querySelectorAll("[data-n]").forEach(count); o.unobserve(e.target); } }), { threshold: .35 }).observe($(".stat-row"));
  }

  /* ---------- LEADERSHIP ---------- */
  if (page === "leadership") {
    $("#termLine").textContent = `Leo year ${L.term}. Meet the Lions and Leo leaders guiding the district.`;
    $("#dgLogo").innerHTML = logo("dg"); $("#leoLogo").innerHTML = logo("leo");
    const g = L.dg.lead;
    $("#dgBody").innerHTML = `<div class="dg-lead rv">${pic(g, "leadership")}<div><div class="role">${esc(g.role)}</div><h3>${esc(g.name)}</h3><div class="club">${esc(g.club)}${g.term ? " &middot; " + esc(g.term) : ""}</div>${g.bio ? `<p>${esc(g.bio)}</p>` : ""}${g.contact ? `<p><a class="meta" href="${esc(g.contact)}"><b>Contact</b></a></p>` : ""}</div></div>
      <h3 class="sub">Cabinet officers</h3>${grid(L.dg.team, true, "", "mid")}`;
    const s = L.standing;
    $("#standingBody").innerHTML = `${grid([s.chair, s.cochair], true, "", "mid pair")}<h3 class="sub" style="margin-top:56px">Committee members</h3>${grid(s.members, false, "sm")}`;
    $("#leoBody").innerHTML = `${grid(L.leo.officers, true, "", "mid")}<h3 class="sub" style="margin-top:56px">Functional teams</h3>` +
      L.leo.teams.map(t => `<div class="team"><h3 style="font-size:1.35rem;margin-bottom:18px">${esc(t.name)}</h3>${grid(t.members, false, "sm")}</div>`).join("");
    $("#presidents").innerHTML = L.presidents.map(p => `<li><a><b>${esc(p.year)}</b><span>${esc(p.name)}${p.club ? ` <em>(${esc(p.club)})</em>` : ""}</span></a></li>`).join("");
    $("#pastTeams").innerHTML = L.pastTeams.map(p => `<li><a ${p.link ? `href="${esc(p.link)}"` : ""}><b>${esc(p.year)}</b><span>${esc(p.title)}</span></a></li>`).join("");
  }

  /* ---------- GALLERY ---------- */
  if (page === "gallery") {
    const all = D.gallery.flatMap(a => a.photos.map(p => ({ ...p, album: a.id, title: a.title })));
    let sel = "all", shown = all, idx = 0;
    $("#albumChips").innerHTML = `<button class="chip on" data-a="all">All</button>` + D.gallery.map(a => `<button class="chip" data-a="${esc(a.id)}">${esc(a.title)}</button>`).join("");
    const ratios = ["4/3", "3/4", "1/1", "16/10", "4/5"];
    const draw = () => {
      shown = sel === "all" ? all : all.filter(p => p.album === sel);
      $("#grid").innerHTML = shown.map((p, i) => `<button class="gi rv" style="--i:${i % 6}" data-i="${i}" data-cap="${esc(p.cap)}" aria-label="Open photo: ${esc(p.cap)}">${p.src ? `<img src="assets/img/gallery/${esc(p.src)}" alt="${esc(p.cap)}" loading="lazy">` : `<div class="ph2" style="--r:${ratios[i % 5]}">${esc(p.title)}</div>`}</button>`).join("");
      observe();
    };
    $("#albumChips").addEventListener("click", e => {
      const b = e.target.closest(".chip"); if (!b) return; sel = b.dataset.a;
      document.querySelectorAll("#albumChips .chip").forEach(c => c.classList.toggle("on", c === b)); draw();
    });
    const lb = $("#lb"), stage = $("#stage");
    const show = () => { const p = shown[idx];
      stage.innerHTML = (p.src ? `<img src="assets/img/gallery/${esc(p.src)}" alt="${esc(p.cap)}">` : `<div class="ph3">${esc(p.title)}</div>`) + `<p>${esc(p.cap)} &middot; ${idx + 1}/${shown.length}</p>`; };
    const step = d => { idx = (idx + d + shown.length) % shown.length; show(); };
    $("#grid").addEventListener("click", e => { const b = e.target.closest(".gi"); if (!b) return; idx = +b.dataset.i; show(); lb.hidden = false; document.body.style.overflow = "hidden"; });
    const close = () => { lb.hidden = true; document.body.style.overflow = ""; };
    lb.querySelector(".x").onclick = close; lb.querySelector(".pv").onclick = () => step(-1); lb.querySelector(".nx").onclick = () => step(1);
    lb.addEventListener("click", e => { if (e.target === lb) close(); });
    addEventListener("keydown", e => { if (lb.hidden) return; if (e.key === "Escape") close(); if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); });
    draw();
  }

  /* ---------- JOIN ---------- */
  if (page === "join") {
    $("#jf").addEventListener("submit", async e => {
      e.preventDefault();
      const f = e.target, data = Object.fromEntries(new FormData(f)), msg = $("#fmsg");
      if (D.site.formEndpoint) {
        msg.textContent = "Sending...";
        try {
          const r = await fetch(D.site.formEndpoint, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(data) });
          if (!r.ok) throw 0; f.reset(); msg.textContent = "Thank you. We have received your message.";
        } catch (_) { msg.textContent = "Could not send. Please email us directly."; }
      } else {
        const body = Object.entries(data).map(([k, v]) => `${k}: ${v}`).join("\n");
        location.href = `mailto:${D.site.email}?subject=${encodeURIComponent("Leo enquiry: " + data.type)}&body=${encodeURIComponent(body)}`;
        msg.textContent = "Your email app should open. Press send there to finish.";
      }
    });
  }

  /* ---------- reveal on scroll ---------- */
  function observe() {
    io = io || new IntersectionObserver((es, o) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); o.unobserve(e.target); } }), { threshold: .12 });
    document.querySelectorAll(".rv:not(.in)").forEach(el => io.observe(el));
  }
  observe();

  /* ---------- 3D tilt on cards (mouse devices only) ---------- */
  function bindTilt() {
    if (reduce || !matchMedia("(hover:hover)").matches) return;
    document.querySelectorAll(".tilt-me:not([data-t])").forEach(el => {
      el.dataset.t = 1;
      el.addEventListener("mousemove", e => { const r = el.getBoundingClientRect();
        el.style.transform = `perspective(800px) rotateY(${((e.clientX - r.left) / r.width - .5) * 8}deg) rotateX(${(.5 - (e.clientY - r.top) / r.height) * 8}deg) translateY(-4px)`; });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });
  }
  bindTilt();

  /* ---------- gold sparks (canvas) ---------- */
  document.querySelectorAll(".fx").forEach(c => {
    if (reduce) return;
    const x = c.getContext("2d"); let w, h, ps = [], vis = true;
    const size = () => { w = c.width = c.offsetWidth; h = c.height = c.offsetHeight; ps = Array.from({ length: Math.min(55, Math.round(w / 22)) }, () => ({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 2 + .6, v: Math.random() * .5 + .15, a: Math.random() * 6 })); };
    size(); addEventListener("resize", size);
    new IntersectionObserver(e => vis = e[0].isIntersecting).observe(c);
    (function loop() { if (vis) { x.clearRect(0, 0, w, h);
      ps.forEach(p => { p.y -= p.v; p.a += .02; if (p.y < -5) { p.y = h + 5; p.x = Math.random() * w; }
        x.beginPath(); x.arc(p.x + Math.sin(p.a) * 10, p.y, p.r, 0, 6.3); x.fillStyle = `rgba(242,214,127,${.25 + .35 * Math.abs(Math.sin(p.a))})`; x.fill(); }); }
      requestAnimationFrame(loop); })();
  });
})();
