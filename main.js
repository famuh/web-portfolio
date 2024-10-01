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

// hardskill
const hardskillList = [
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
  {
    name: "Firebase",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
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
  {
    name: "Figma",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "VS Code",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Android Studio",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
  },
  {
    name: "Photoshop",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  },
  {
    name: "Canva",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
  },
  {
    name: "Capcut",
    image:"https://firebasestorage.googleapis.com/v0/b/angkutin-7fc40.appspot.com/o/fadhil-porto%2Fimage%2Funnamed.png?alt=media&token=b87dfa24-47f0-49e6-a587-f2c4dbd29ee3"
  },
];

const container = document.getElementById("hardskill-list");
hardskillList.forEach((element) => {
  let item = document.createElement("li");
  item.classList.add("hardskill-item");
  item.innerHTML = `
    <img src="${element.image}" alt="${element.name}" />
  `;
  container.appendChild(item);
});


// experience
const experienceList = [
  
  {
    title: "UI Designer & Mobile Developer",
    location: "Freelance",
    description: "Collaborate with teams and clients in solving problems faced by clients to design or build applications for the benefit of individuals, groups, or companies.",
    date: "Nov 23 - Jul 24",
    img: "https://firebasestorage.googleapis.com/v0/b/angkutin-7fc40.appspot.com/o/fadhil-porto%2Fexperience%2FGroup%201.png?alt=media&token=ad410711-567d-4b0f-9bc2-8bd30407b932",
    isList : false,
    jobList : [
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
    isList : false,
    jobList : [
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
    img:"https://firebasestorage.googleapis.com/v0/b/angkutin-7fc40.appspot.com/o/fadhil-porto%2Fexperience%2Fkampusmerdeka.jpeg?alt=media&token=c3108da4-e911-47fa-91ac-688a3206bb77",
    isList : false,
    jobList : [
      "Obtained the title of best graduate at the end of the program.",
      "Became a Peer Tutor for the Study Group: Teaching and assisting other participants with challenges they faced during their studies.",
      "Completed soft skill classes to support career development and professional ethics.",
      "Created an Android application using Flutter as a final project assignment."
    ]
  },
 

]

const experienceColorList=[
  "#229799",
  "#FFBE98",
  "#78B7D0",
  "#D7C3F1",
  "#FF8C9E"
]

function renderExperienceItem(item) {
  const experience = document.getElementById("experience-cards");
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

experienceList.forEach((element) => {
  renderExperienceItem(element);

});

