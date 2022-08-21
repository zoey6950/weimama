$(".navbar-toggier").click(function () {
    // 當.navbar-toggier被點擊後要做的事
    // alert("eyyyy");
    // 讓.navbar-list切換.active
    $(".navbar-list").toggleClass("active");
    $(".line").toggleClass("active");

});

$(".navbar .navbar-link").click(function () {
    const pageWidth = document.documentElement.scrollWidth;
    if (pageWidth < 650) {
        var deviation = 60;
    } else {
        var deviation = 100;
    }
    const target = $(this).attr("href");
    const target_position = $(target).offset().top - deviation;
    // (先停止)執行動畫
    $("html, body").stop().animate({
        scrollTop: target_position
    }, 1000);
});

$(".fas").click(function () {
    $("html, body").stop().animate({
        scrollTop: 0
    }, 800);
});