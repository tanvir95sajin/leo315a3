/* ===== EDIT THIS FILE to update the whole website. Save, commit, and Vercel republishes in about 30 seconds.
   Everything here is SAMPLE content: replace it with verified district records. See HOW-TO-EDIT.md. ===== */
window.LEO = {
  site: { email: "leodistrict315a3bd@gmail.com", facebook: "#", instagram: "#",
          formEndpoint: "" },            // paste your Formspree link here (see guide). Empty = form opens the visitor's email app.
  logos: { leo: "assets/img/logos/leologo.jpg", lions: "assets/img/logos/lionslogo.png",
           dg: "assets/img/logos/dgseal.jpeg", president: "assets/img/logos/dpseal.jpeg" },

  statsVerified: false,                  // set to true once the numbers below come from district records
  stats: [
    { label: "Leo clubs", value: 15 }, { label: "Leo members", value: 150 }, { label: "Service projects", value: 20 },
    { label: "Beneficiaries", value: 2000 }, { label: "Volunteer hours", value: 9000 }
  ],

  messages: [   // photo = file in assets/img/messages/ ; each text line = one paragraph
    { name: "Ln. Dr. Asadullah Ahamed, PMJF", role: "District Governor, Lions District 315 A3", photo: "assets/img/leadership/asad.jpg", logo: "dg",
      text: ["First paragraph of the District Governor's message. Always visible.", "Second paragraph. Shown after clicking Read the full message.", "Closing paragraph."] },
    { name: "Leo Jahidul Islam", role: "District President, Leo District 315 A3", photo: "assets/img/leadership/jahid.jpg", logo: "president",
      text: ["First paragraph of the Leo District President's message. Always visible.", "Second paragraph.", "Closing paragraph."] }
  ],

  initiatives: [   // img = full path, e.g. "assets/img/gallery/solar.jpg"
    { title: "Smart and Sustainable Schools", text: "Low-cost water filtration and solar lighting for primary schools.", result: "12 schools reached", img: "" },
    { title: "Digital Safety Awareness", text: "Workshops and Bangla materials on staying safe online.", result: "30 sessions held", img: "" },
    { title: "Climate and Community Resilience", text: "Tree planting with survival monitoring and flood preparedness.", result: "5,000 saplings tracked", img: "" }
  ],
  events: [
    { date: "2026-12-12", title: "District Convention (sample)", place: "Dhaka", link: "#" },
    { date: "2027-01-09", title: "Leadership Training (sample)", place: "Online", link: "#" },
    { date: "2027-01-23", title: "Winter Service Campaign (sample)", place: "Savar", link: "#" }
  ],
  clubs: [   // status: Active / Newly established / Recruiting members / Awaiting annual information update
    { name: "Leo Club of Dhaka Dhanmondi", place: "Dhaka", institution: "", status: "Active" },
    { name: "Leo Club of Dhaka Prime", place: "Dhaka", institution: "", status: "Recruiting members" },
    { name: "Leo Club of Manikganj", place: "Manikganj", institution: "", status: "Newly established" },
    { name: "Leo Club of Bijoy Nation", place: "Dhaka", institution: "", status: "Active" }
  ],
  news: [
    { date: "2026-10-20", title: "Sample: New solar school project announced", text: "Replace this with a real announcement." },
    { date: "2026-10-05", title: "Sample: Leadership team update", text: "Replace this with a real update." },
    { date: "2026-09-18", title: "Sample: New partnership signed", text: "Replace this with a real partnership." }
  ],

  /* Leadership: photo = file in assets/img/leadership/. Titles must follow the officially approved structure. */
  leadership: {
    term: "2026-27",
    dg: {
      lead: { name: "Ln. Dr. Asadullah Ahamed, PMJF", role: "District Governor", club: "", term: "2026-27", bio: "", contact: "", photo: "assets/img/leadership/asad.jpg" },
      team: [
        { name: "Ln. Syed Nasim Ahmed, MJF", role: "First Vice District Governor", club: "", term: "2026-27", bio: "", contact: "", photo: "assets/img/leadership/Nasim.jpg" },
        { name: "Ln. Md. Refatullah", role: "Second Vice District Governor", club: "", term: "2026-27", bio: "", contact: "", photo: "assets/img/leadership/Refat.jpg" },
        { name: "Ln. Engr. Md. Imran Shakib Azmeer", role: "Cabinet Secretary", club: "", term: "2026-27", bio: "", contact: "", photo: "assets/img/leadership/Azmeer.jpg" },
        { name: "Ln. Md. Joynal Abedin Khan", role: "Cabinet Treasurer", club: "", term: "2026-27", bio: "", contact: "", photo: "assets/img/leadership/Joynal.jpg" }
      ]
    },
    standing: {
      adviser:   { name: "PDG Ln. MMA Bashar, PMJF", role: "Adviser, Leo Standing Committee", club: "", term: "2026-27", bio: "", contact: "", photo: "assets/img/leadership/IMG-20261113-WA0022.jpg" },
      chair:     { name: "Ln. Mizanur Rahman Khan Lytton", role: "Chairperson, Leo Standing Committee", club: "", term: "2026-27", bio: "", contact: "", photo: "assets/img/leadership/Lytton.jpg" },
      cochair:   { name: "Ln. Shuja Shajahan", role: "Co-Chairperson, Leo Standing Committee", club: "", term: "2026-27", bio: "", contact: "", photo: "assets/img/leadership/IMG-20261113-WA0028.jpg" },
      secretary: { name: "Ln. Sultana Parvin", role: "Member Secretary, Leo Standing Committee", club: "", term: "2026-27", bio: "", contact: "", photo: "assets/img/leadership/IMG-20261112-WA0002.jpg" },
      members: [
        { name: "Ln. Md. Shahriar Mehedi Mollah", role: "Member", club: "", photo: "" },
        { name: "Ln. Md. Yousuf Ali", role: "Member", club: "", photo: "" },
        { name: "Ln. Engr. Sujit Kumar Dey", role: "Member", club: "", photo: "" }
      ]
    },
    leo: {
      officers: [
        { name: "Leo Jahidul Islam", role: "District President", club: "Leo Club of Dhaka Dhanmondi", term: "2026-27", bio: "", contact: "", photo: "assets/img/leadership/jahid.jpg" },
        { name: "Leo Mahfuj Ullah", role: "Vice District President", club: "Leo Club of Savar", term: "2026-27", bio: "", contact: "", photo: "assets/img/leadership/IMG-20261113-WA0042.jpg" },
        { name: "Leo Md. Mehedi Hasan", role: "District Secretary", club: "Leo Club of Dhanmondi Prime", term: "2026-27", bio: "", contact: "", photo: "assets/img/leadership/IMG-20261113-WA0023.jpg" },
        { name: "Leo Mohammad Johirul Islam", role: "District Treasurer", club: "Leo Club of Dhaka Dhanmondi", term: "2026-27", bio: "", contact: "", photo: "assets/img/leadership/IMG-20261113-WA0024.jpg" }
      ]
    },
    presidents: [   // newest first; club optional
      { year: "2025-26", name: "Leo SK Bishal", club: "" }, { year: "2024-25", name: "Leo Tuhin Rahman", club: "" },
      { year: "2023-24", name: "Leo Saif Iqbal", club: "" }, { year: "2022-23", name: "Leo Kazi Lamia Karim", club: "" },
      { year: "2021-22", name: "Leo Ferdous Kaysan and Leo M. A. Hannan", club: "" }, { year: "2020-21", name: "Leo Abu Hasan Md. Faysal", club: "" }
    ],
    pastTeams: [   // link = a PDF or page, or leave ""
      { year: "2025-26", title: "Leadership team 2025-26", link: "" }
    ]
  },

  /* Gallery: one entry per album. src = file in assets/img/gallery/ (leave "" for a placeholder). */
  gallery: [
    { id: "solar", title: "", photos: [ { src: "IMG-20261113-WA0032.jpg", cap: "Caption 1" }, { src: "IMG-20261113-WA0034.jpg", cap: "Caption 2" }, { src: "IMG-20261113-WA0038.jpg", cap: "Caption 3" }, { src: "IMG-20261113-WA0060.jpg", cap: "Caption 4" } ] },
    { id: "convention", title: "", photos: [ { src: "IMG-20261113-WA0068.jpg", cap: "Caption 1" }, { src: "IMG-20261113-WA0072.jpg", cap: "Caption 2" }, { src: "IMG-20261113-WA0075.jpg", cap: "Caption 3" } ] },
    { id: "training", title: "", photos: [ { src: "IMG-20261113-WA0082.jpg", cap: "Caption 1" }, { src: "IMG-20261113-WA0085.jpg", cap: "Caption 2" }, { src: "IMG-20261113-WA0096.jpg", cap: "Caption 3" }, { src: "IMG-20261113-WA0097.jpg", cap: "Caption 4" } ] }
  ]
};
