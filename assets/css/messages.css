/* ===== EDIT THE DATA BELOW to update the messages on the home page. SAMPLE content: replace with the real speeches.
   Photos: upload to assets/img/messages/ and write only the file name. Each string in "text" is one paragraph. */
const MESSAGES = [
  { name: "Full Name", role: "District Governor, Lions District 315 A3", photo: "",
    text: ["First paragraph of the District Governor's message. This one is always visible.",
           "Second paragraph. Everything after the first paragraph appears when the visitor clicks Read the full message.",
           "Closing paragraph."] },
  { name: "Full Name", role: "District President, Leo District 315 A3", photo: "",
    text: ["First paragraph of the Leo District President's message. This one is always visible.",
           "Second paragraph.",
           "Closing paragraph."] }
];
(function(){
  const ini = n => n.split(/\s+/).map(w => w[0]).slice(0,2).join("").toUpperCase();
  document.getElementById("messages-list").innerHTML = MESSAGES.map((m, i) => `
    <article class="msg">
      <div class="pic"><span>${ini(m.name)}</span>${m.photo ? `<img src="assets/img/messages/${m.photo}" alt="${m.name}" loading="lazy" onerror="this.remove()">` : ""}</div>
      <h3>${m.name}</h3><div class="role">${m.role}</div>
      <p>${m.text[0]}</p>
      ${m.text.length > 1 ? `<div class="more" id="more${i}"><div>${m.text.slice(1).map(t => `<p>${t}</p>`).join("")}</div></div>
      <button class="toggle" aria-expanded="false" aria-controls="more${i}">Read the full message</button>` : ""}
    </article>`).join("");
  document.getElementById("messages-list").addEventListener("click", e => {
    const b = e.target.closest(".toggle"); if(!b) return;
    const open = b.previousElementSibling.classList.toggle("open");
    b.setAttribute("aria-expanded", open);
    b.textContent = open ? "Show less" : "Read the full message";
  });
})();
