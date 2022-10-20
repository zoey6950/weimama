const pageWidth = document.documentElement.scrollWidth;
var deviation = 0;
if (pageWidth < 650) {
    var deviation = 60;
} else {
    var deviation = 100;
};


$(".navbar-toggier").click(function () {
    $(".navbar-list").toggleClass("active");
    $(".line").toggleClass("active");
});

$(".navbar .navbar-link").click(function () {
    const target = $(this).attr("href");
    const target_position = $(target).offset().top - deviation;
    $("html, body").stop().animate({
        scrollTop: target_position
    }, 1000);
});

$(".fas").click(function () {
    $("html, body").stop().animate({
        scrollTop: 0
    }, 800);
});

const navLinkList = document.querySelectorAll('.navbar .navbar-link'),
    navbar = document.getElementById('navbar');

const navigationTable = {};

navLinkList.forEach(a => {
    // console.log("a", a.dataset.target);
    const sectionId = a.dataset.target;
    navigationTable[sectionId] = {
        link: a,
        section: document.getElementById(sectionId)
    };
});

window.addEventListener('scroll', function () {

    const y = Math.round(window.scrollY + navbar.offsetHeight) + deviation;

    for (const sId in navigationTable) {
        const section = navigationTable[sId].section;
        const link = navigationTable[sId].link;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const aboutText = document.getElementById("about-text");

        if (y > top && y < bottom) {
            section.classList.add("is-active");
            if (sId === "section2") {
                aboutText.classList.add("is-active")
            } else {
                aboutText.classList.remove("is-active")
            };
        } else {
            section.classList.remove("is-active");
        };
    };

});