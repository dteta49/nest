$(document).ready(function() {
// ========== Counting Section ==========
    $('.num').counterUp({
        delay: 10,
        time: 1000
    });
// ========== Back To Top ==========
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $("#topBtn").fadeIn();
        } else {
            $("#topBtn").fadeOut();
        }
    });
    $("#topBtn").click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
    });
});
