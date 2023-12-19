
var overview = document.getElementById("overview")
var experience = document.getElementById("experience")

document.addEventListener("DOMContentLoaded", function() {
    
    var overviewButton = document.getElementById("overview-button")
    var experienceButton = document.getElementById("experience-button")
    // var profileButton = document.getElementById("profile-button")
var portfolioButton = document.getElementById("portfolio-button")
var contactButton = document.getElementById("contact-button")

    overviewButton.addEventListener("click", function() {
        var targetOverview = document.getElementById("overview")

        var targetOffset = targetOverview.offsetTop

        window.scrollTo({
            top: targetOffset,
            behavior: "smooth"
        })
    })

    experienceButton.addEventListener("click", function() {
        var targetExperience = document.getElementById("experience")
        window.scrollTo({
            behavior: "smooth",
            top: targetExperience.offsetTop
        })  
    })

    contactButton.addEventListener("click", function() {
        var targetExperience = document.getElementById("contact")
        window.scrollTo({
            behavior: "smooth",
            top: targetExperience.offsetTop
        })  
    })

    portfolioButton.addEventListener("click", function() {
        window.location.href = "portfolio.html";
    });
    



    // profileButton.addEventListener("click", function() {
    //     var targetExperience = document.getElementById("profile")
    //     window.scrollTo({
    //         behavior: "smooth",
    //         top: targetExperience.offsetTop
    //     })  
    // })


})