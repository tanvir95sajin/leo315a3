(function(){
  const L = window.LEADERSHIP, $ = s => document.querySelector(s);
  $("#yr").textContent = new Date().getFullYear();
  $("#termLine").textContent = `Leo year ${L.term}. Meet the officers and teams leading the district.`;
  const initials = n => n.split(/\s+/).map(w => w[0]).slice(0,2).join("").toUpperCase();
  const photo = p => `<div class="pic"><span>${initials(p.name)}</span>${p.photo ? `<img src="assets/img/leadership/${p.photo}" alt="${p.name}" loading="lazy" onerror="this.remove()">` : ""}</div>`;
  const card = (p, i, full) => `<article class="person" style="--i:${i}">${photo(p)}
    <h3>${p.name}</h3><div class="role">${p.role}</div><div class="club">${p.club || ""}</div>
    ${full ? `${p.bio ? `<p>${p.bio}</p>` : ""}<div class="meta">Term: ${p.term}${p.contact ? ` &middot; <a href="${p.contact}">Contact</a>` : ""}</div>` : ""}</article>`;
  $("#officers").innerHTML = L.officers.map((p,i) => card(p,i,true)).join("");
  $("#teams").innerHTML = L.teams.map(t => `<div class="team"><h3>${t.name}</h3><div class="people">${t.members.map((p,i) => card(p,i,false)).join("")}</div></div>`).join("");
  $("#past").innerHTML = L.past.map(p => `<li><a ${p.link ? `href="${p.link}"` : ""}><b>${p.year}</b><span>${p.title}</span></a></li>`).join("");
  const nav = $("#nav"), burger = $("#burger");
  burger.onclick = () => { const o = nav.classList.toggle("open"); burger.setAttribute("aria-expanded", o); };
  $("#menu").onclick = () => nav.classList.remove("open");
})();
