$("#menu_click_1").click(function () {
    $('html, body').animate({
        scrollTop: $(".static_organization").offset().top
    }, 100);
});
$("#menu_click_2").click(function () {
    $('html, body').animate({
        scrollTop: $(".employees_table").offset().top
    }, 100);
});
$("#menu_click_3").click(function () {
    $('html, body').animate({
        scrollTop: $(".project_h").offset().top
    }, 100);
});
$("#menu_click_4").click(function () {
    $('html, body').animate({
        scrollTop: $(".orde").offset().top
    }, 100);
});
$("#menu_click_5").click(function () {
    $('html, body').animate({
        scrollTop: $(".competencies").offset().top
    }, 100);
});

$("#more").click(function () {
    $('html, body').animate({
        scrollTop: $(".orde").offset().top
    }, 100);
});

$("#port_broker").click(function () {
    alert("To be continued")
});
$(".no").click(function () {
    alert("To be continued")
});

$('#mail_copy').on('click',function(){
    var code = document.querySelector('#mail_none'); // #text - блок из которого нужно скопировать
    var range = document.createRange();
    range.selectNode(code);
    window.getSelection().addRange(range);

    var successful = document.execCommand('copy');

    

    window.getSelection().removeAllRanges();
  });

$("#mail_copy").click(function () {
    setTimeout(function greet() {
        $("#message_mail").css({'right': '0'});
    }, 200)

    
    setTimeout(function greet() {
        $("#message_mail").fadeOut(1000);
    }, 2000)

});