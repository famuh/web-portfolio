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
    image:
      "https://firebasestorage.googleapis.com/v0/b/angkutin-7fc40.appspot.com/o/fadhil-porto%2Funnamed.png?alt=media&token=a071120b-62dd-4ea6-932d-855dfb654711",
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
    img: "https://firebasestorage.googleapis.com/v0/b/angkutin-7fc40.appspot.com/o/fadhil-porto%2Funnamed.png?alt=media&token=a071120b-62dd-4ea6-932d-855dfb654711",
    isList : true,
    jobList : [
      "123",
      "1234",
      "asdc"
    ]
  },
  {
    title: "UI Designer & Mobile Developer",
    location: "Freelance",
    description: "Collaborate with teams and clients in solving problems faced by clients to design or build applications for the benefit of individuals, groups, or companies.",
    date: "Nov 23 - Jul 24",
    img: "https://firebasestorage.googleapis.com/v0/b/angkutin-7fc40.appspot.com/o/fadhil-porto%2Funnamed.png?alt=media&token=a071120b-62dd-4ea6-932d-855dfb654711",
    isList : false,
    jobList : [
      "123",
      "1234",
      "asdc"
    ]
  },
  {
    title: "UI Designer & Mobile Developer",
    location: "Freelance",
    description: "Collaborate with teams and clients in solving problems faced by clients to design or build applications for the benefit of individuals, groups, or companies.",
    date: "Nov 23 - Jul 24",
    img: "https://firebasestorage.googleapis.com/v0/b/angkutin-7fc40.appspot.com/o/fadhil-porto%2Funnamed.png?alt=media&token=a071120b-62dd-4ea6-932d-855dfb654711",
    isList : true,
    jobList : [
      "123",
      "1234",
      "asdc"
    ]
  },
  {
    title: "UI Designer & Mobile Developer",
    location: "Freelance",
    description: "Collaborate with teams and clients in solving problems faced by clients to design or build applications for the benefit of individuals, groups, or companies.",
    date: "Nov 23 - Jul 24",
    img: "https://firebasestorage.googleapis.com/v0/b/angkutin-7fc40.appspot.com/o/fadhil-porto%2Funnamed.png?alt=media&token=a071120b-62dd-4ea6-932d-855dfb654711",
    isList : true,
    jobList : [
      "123",
      "1234",
      "asdc"
    ]
  },
  {
    title: "UI Designer & Mobile Developer",
    location: "Freelance",
    description: "Collaborate with teams and clients in solving problems faced by clients to design or build applications for the benefit of individuals, groups, or companies.",
    date: "Nov 23 - Jul 24",
    img: "https://firebasestorage.googleapis.com/v0/b/angkutin-7fc40.appspot.com/o/fadhil-porto%2Funnamed.png?alt=media&token=a071120b-62dd-4ea6-932d-855dfb654711",
    isList : true,
    jobList : [
      "123",
      "1234",
      "asdc"
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

