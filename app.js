$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});


var window_h = $(window).height();
$("#wh span").text(window_h);
//スクロールイベント
$(window).on("scroll", function() {
  var scroll_top = $(window).scrollTop();
  $("#scroll span").text(scroll_top);

  $(".box").each(function() {
    var elem_pos = $(this).offset().top;
    $(this).find(".box_pos span").text(Math.floor(elem_pos));
  　
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h+200) {
      $(this).addClass("fadein");
    } else {
      $(this).removeClass("fadein");
    }
  });
});