var overview = document.getElementById("overview");
var experience = document.getElementById("experience");


// window.onload = function () {
//     alert("Use desktop devices for a better experience ! mobile view will be available soon ^^")
// }

document.addEventListener("DOMContentLoaded", function () {
  var overviewButton = document.getElementById("overview-button");
  var experienceButton = document.getElementById("experience-button");
//   var portfolioButton = document.getElementById("portfolio-button");
  var contactButton = document.getElementById("contact-button");

  overviewButton.addEventListener("click", function () {
    var targetOverview = document.getElementById("overview");

    var targetOffset = targetOverview.offsetTop;

    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });
  });

  experienceButton.addEventListener("click", function () {
    var targetExperience = document.getElementById("experience");
    window.scrollTo({
      behavior: "smooth",
      top: targetExperience.offsetTop,
    });
  });

  contactButton.addEventListener("click", function () {
    var targetExperience = document.getElementById("contact");
    window.scrollTo({
      behavior: "smooth",
      top: targetExperience.offsetTop,
    });
  });

});
