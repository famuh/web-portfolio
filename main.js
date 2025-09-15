// var overview = document.getElementById("overview");
// var experience = document.getElementById("experience");

// window.onload = function () {
//     alert("Use desktop devices for a better experience ! mobile view will be available soon ^^")
// }

// document.addEventListener("DOMContentLoaded", function () {
//   var overviewButton = document.getElementById("overview-button");
//   var experienceButton = document.getElementById("experience-button");
// //   var portfolioButton = document.getElementById("portfolio-button");
//   var contactButton = document.getElementById("contact-button");

//   overviewButton.addEventListener("click", function () {
//     var targetOverview = document.getElementById("overview");

//     var targetOffset = targetOverview.offsetTop;

//     window.scrollTo({
//       top: targetOffset,
//       behavior: "smooth",
//     });
//   });

//   experienceButton.addEventListener("click", function () {
//     var targetExperience = document.getElementById("experience");
//     window.scrollTo({
//       behavior: "smooth",
//       top: targetExperience.offsetTop,
//     });
//   });

//   contactButton.addEventListener("click", function () {
//     var targetExperience = document.getElementById("contact");
//     window.scrollTo({
//       behavior: "smooth",
//       top: targetExperience.offsetTop,
//     });
//   });

// })

// cursor
const cursor = document.querySelector('.cursor');
const circles = document.querySelectorAll('.circle');
const speeds = [0.05, 0.1, 0.25]; // smooth follow

let mouseX = 0, mouseY = 0;
let posX = [0, 0, 0], posY = [0, 0, 0];

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  circles.forEach((circle, i) => {
    posX[i] += (mouseX - posX[i]) * speeds[i];
    posY[i] += (mouseY - posY[i]) * speeds[i];
    circle.style.left = posX[i] + 'px';
    circle.style.top = posY[i] + 'px';
  });

  document.querySelector('.circle-border').style.left = mouseX + 'px';
  document.querySelector('.circle-border').style.top = mouseY + 'px';

  requestAnimationFrame(animate);
}
animate();

// Hover event
const btn = document.querySelector('.btn-portfolio');
btn.addEventListener('mouseenter', () => cursor.classList.add('hover'));
btn.addEventListener('mouseleave', () => cursor.classList.remove('hover'));

// hardskill
const hardskillList = [
  {
    "focus": "mobile",
    "techstack": [
      {
        name: "Flutter",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      },
      {
        name: "Kotlin",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      },
    ]
  },

  {
    "focus": "Baas",
    "techstack": [
      {
        name: "Firebase",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      },
      {
        name: "Supabase",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
      },
    ]
  },
  {
    "focus": "web",
    "techstack": [
      {
        name: "React Js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
      },
      {
        name: "HTML5",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "Javascript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
    ]
  },
  {
    "focus": "git",
    "techstack": [
      {
        name: "Git",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
    ]
  },
  {
    "focus": "tools",
    "techstack": [
      {
        name: "VSCode",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Android Studio",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
      },
    ]
  },
  {
    "focus": "project management",
    "techstack": [
      {
        name: "Trello",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-plain-wordmark.svg",
      },
      {
        name: "Click Up",
        image:
          "https://firebasestorage.googleapis.com/v0/b/angkutin-7fc40.appspot.com/o/fadhil-porto%2Fimage%2FClickUp-removebg-preview.png?alt=media&token=ce08f455-4b9e-436d-ac22-f7747ba7f556",
      },
    ]
  },
  {
    "focus": "design",
    "techstack": [
      {
        name: "Figma",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "Canva",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
      },
    ]
  },





];

const container = document.getElementById("hardskill-list");

// kosongkan dulu
container.innerHTML = "";

hardskillList.forEach((group) => {
  // buat div untuk setiap focus
  const groupDiv = document.createElement("div");
  groupDiv.classList.add("hardskill-group", `focus-${group.focus.toLowerCase().replace(/\s+/g, '-')}`);

  // judul focus
  // const title = document.createElement("h3");
  // title.textContent = group.focus;
  // groupDiv.appendChild(title);

  // list techstack
  const ul = document.createElement("ul");

  group.techstack.forEach((tech) => {
    const li = document.createElement("li");
    li.innerHTML = `<img src="${tech.image}" alt="${tech.name}" title="${tech.name}" />`;
    ul.appendChild(li);
  });

  groupDiv.appendChild(ul);
  container.appendChild(groupDiv);
});




// experience
const experienceList = [
  {
  title: "Flutter Facilitator",
  location: "BEKUP (Baparekraf for Startup) with Dicoding Indonesia",
  description: "BEKUP is a government initiative by the Ministry of Tourism and Creative Economy of Indonesia, aimed at fostering innovation and building a sustainable digital ecosystem.",
  date: "Jul 25 - Now",
  img: "https://firebasestorage.googleapis.com/v0/b/angkutin-7fc40.appspot.com/o/fadhil-porto%2Fexperience%2FBEKUP_LOGO_WARNA-2-2.png?alt=media&token=8a8c717d-d7fc-435f-b1f6-fb2f3c294469",
  isList: true,
  jobList: [
    "Facilitated weekly online sessions, monitoring and tracking participant progress from diverse backgrounds to ensure continuous development.",
    "Reviewed and validated participant journals with 100% compliance to program standards, maintaining high-quality learning outcomes.",
    "Supported 15+ weekly instructor-led training sessions, ensuring seamless delivery and improving overall training efficiency.",
    "Implemented peer programming and collaborative learning strategies to strengthen knowledge retention and teamwork skills."
  ]
},

{
  title: "Flutter Developer",
  location: "PT. Damai Nusa Abadi (DNA Group)",
  description: "DNA Group is a business group with units across Indonesia in hospitality, entertainment, F&B, and startups.",
  date: "Oct 24 - Sep 25",
  img: "https://firebasestorage.googleapis.com/v0/b/angkutin-7fc40.appspot.com/o/fadhil-porto%2Fexperience%2Ficon_app4.png?alt=media&token=b4fb9c2e-79c8-4862-8554-449ab60c792e",
  isList: true,
  jobList: [
    "Developed a Self-Service Application for Android TV and Tablet with optimized UI and stable performance.",
    "Maintained and updated mobile apps on Google Play Store for stability and performance.",
    "Collaborated with team members to ensure smooth integration and meet stakeholder needs.",
    "Enhanced UI based on wireframes to improve user experience.",
    "Built key features including attendance with face recognition & fake GPS detection, notifications, POS offline mode, and management systems (Hotel, Asset, Inventory, Multi-Outlet)."
  ]
},


  {
    title: "UI Designer",
    location: "Freelance",
    description: "Collaborate with teams and clients in solving problems faced by clients to design or build applications for the benefit of individuals, groups, or companies.",
    date: "Nov 23 - Jul 25",
    img: "https://firebasestorage.googleapis.com/v0/b/angkutin-7fc40.appspot.com/o/fadhil-porto%2Fexperience%2FGroup%201.png?alt=media&token=ad410711-567d-4b0f-9bc2-8bd30407b932",
    isList: false,
    jobList: [
      "De",
      "1234",
      "asdc"
    ]
  },
  {
    title: "Mobile Development",
    location: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    description: "Bangkit is a career readiness program aimed at producing high-caliber technical talent for world-class technology companies and startups in Indonesia, fully supported by Google, GoTo, and Traveloka.",
    date: "Feb 23 - Aug 23",
    img:
      "https://firebasestorage.googleapis.com/v0/b/angkutin-7fc40.appspot.com/o/fadhil-porto%2Fexperience%2Fbangkit.jpeg?alt=media&token=75022800-7541-493a-ab6c-a7833684c3dc",
    isList: false,
    jobList: [
      "Completed Android classes, including Basic Android, Fundamental Android, Android Intermediate, and Android Jetpack Compose.",
      "Completed soft skills and English classes to support my career and professionalism.completed soft skills and English classes to support my career and professionalism.",
      "Collaborated with other participants in Mobile Development, Machine Learning, and Cloud Computing to create an Android application.",
      "Key Learning: Kotlin, Jetpack Compose, SOLID principles, UX Design."
    ]
  },
  {
    title: "Multi-Platform Flutter and Back-End Node.Js",
    location: "Kampus Merdeka SIB X Dicoding",
    description: "Participated in the Independent Study Batch 3 Cohort at Dicoding Indonesia through the Kampus Merdeka x Independent Certified Study program by the Directorate General of Higher Education, Ministry of Education and Culture of Indonesia, and earned the title of Best Graduate.",
    date: "Aug 22 - Des 22",
    img: "https://firebasestorage.googleapis.com/v0/b/angkutin-7fc40.appspot.com/o/fadhil-porto%2Fexperience%2Fkampusmerdeka.jpeg?alt=media&token=c3108da4-e911-47fa-91ac-688a3206bb77",
    isList: false,
    jobList: [
      "Obtained the title of best graduate at the end of the program.",
      "Became a Peer Tutor for the Study Group: Teaching and assisting other participants with challenges they faced during their studies.",
      "Completed soft skill classes to support career development and professional ethics.",
      "Created an Android application using Flutter as a final project assignment."
    ]
  },


]


// ambil container sekali di luar fungsi
const experience = document.getElementById("experience-cards");

function renderExperienceItem(item) {
  let expItem = document.createElement("div");
  expItem.classList.add("experience-card");

  // warna
  expItem.style.backgroundColor = "#B4D4FF";

  if (item.isList) {
    expItem.innerHTML = `
      <div class="experience-info-wrapper">
        <img src="${item.img}" alt="1" width=60/>
        <div class="experience-item-info">
              <h3>${item.title}</h3>
              <p>${item.location} (${item.date})</p>
        </div>
      </div>
      <br>    
      <p>${item.description}</p>
      <ul class="experience-joblist"></ul>
    `;

    const ulElement = expItem.querySelector(".experience-joblist");
    item.jobList.forEach((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      ulElement.appendChild(li);
    });
  } else {
    expItem.innerHTML = `
      <div class="experience-info-wrapper">
        <img src="${item.img}" alt="1" width=60/>
        <div class="experience-item-info">
          <h3>${item.title}</h3>
          <p>${item.location} (${item.date})</p>
        </div>
      </div> 
      <br>    
      <p>${item.description}</p>
    `;
  }
  experience.appendChild(expItem);
}

// render semua experience
experienceList.forEach((element) => {
  renderExperienceItem(element);
});

// tambahkan gambar terakhir
const lastImage = document.createElement("img");
lastImage.src = "./img/rocket-research.svg";
lastImage.alt = "Starting a business";
// lastImage.style.transform = "scale(.7)";
lastImage.style.maxWidth = "100%";
lastImage.style.height = "auto";

experience.appendChild(lastImage);



