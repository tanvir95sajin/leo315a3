/* ===== EDIT THE DATA BELOW to update the messages on the home page. SAMPLE content: replace with the real speeches.
   Photos: upload to assets/img/messages/ and write only the file name. Each string in "text" is one paragraph. */
const MESSAGES = [
  { name: "Lion Dr. Asadullah Ahmed", role: "District Governor, Lions District 315 A3", photo: "asad.jpeg",
    text: ["Service is not merely an act of kindness; it is a responsibility we share toward building a better world. As Lions, we believe that the true strength of a society lies in its compassion, its willingness to support those in need, and its commitment to creating opportunities for future generations.In Bangladesh, where countless communities face challenges in education, healthcare, environmental sustainability, and social welfare, collective action has the power to transform lives. Through the dedication of our Lions and Leos, we strive to turn compassion into action and ideas into meaningful change. I firmly believe that young people are among our greatest assets. When empowered with leadership, guided by values, and given opportunities to serve, they become catalysts for progress. Our Leo movement embodies this belief by encouraging young leaders to develop their potential while making a positive difference in their communities.",
           "However, the responsibility of building a better society does not rest with any single organization. It requires the collective efforts of individuals, families, educational institutions, businesses, and communities. I therefore invite everyone to join hands with us in advancing humanitarian service, promoting equality of opportunity, protecting our environment, and fostering a culture of empathy and responsibility. Let us remember that even the smallest act of service can create a lasting impact. Together, through dedication, collaboration, and a shared commitment to humanity, we can build a society where everyone has the opportunity to live with dignity, hope, and purpose. Let us unite through service, inspire through leadership, and create a better tomorrow for all.",
           ""] },
  { name: "Leo Jahidul Islam", role: "District President, Leo District 315 A3", photo: "",
    text: ["It is my great honour to serve as the Leo District President of District 315 A3, Bangladesh. I believe that young people are not merely the leaders of tomorrow; we are the changemakers of today. Through the spirit of Leadership, Experience, and Opportunity, the Leo movement empowers us to transform our ideas into action and our compassion into meaningful service. Every challenge facing our society presents an opportunity for us to stand together, take responsibility, and make a difference.",
           "As young leaders, we recognize that building a better Bangladesh requires more than good intentions. It demands innovation, collaboration, and a genuine commitment to addressing the needs of our communities. From promoting education and healthcare to protecting the environment, empowering underprivileged communities, and raising awareness about pressing social issues, we strive to create initiatives that deliver meaningful and lasting impact. We also believe in embracing new ideas and technologies to make our service more effective, inclusive, and sustainable.",
           "I invite every young person, community member, institution, and organization to join us in this journey of service and social transformation. Together, we can break barriers, inspire hope, and build a society where compassion guides our actions and every individual has the opportunity to thrive. Let us move beyond words and turn our shared aspirations into tangible achievements. Our age does not define the magnitude of our impact; our courage to act and our commitment to serve do."] }
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
