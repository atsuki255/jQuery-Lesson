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

window.onscroll = function(){ 
  function fadeIn(el, duration) {
    var node = document.getElementById(el);
    // display: noneでないときは何もしない
    if (getComputedStyle(node).display !== 'none') {
      return;
    }else {
      node.style.display = 'block';
    }
    //opacityの操作
    node.style.opacity = 0;
    var start = performance.now();
    requestAnimationFrame(function tick(timestamp) {
      // イージング計算式（linear）
      var easing = (timestamp - start) / duration;
      // opacityが1以下の値を代入
      node.style.opacity = Math.min(easing, 1);
      // opacityが1より小さいとき
      if (easing < 1) {
        requestAnimationFrame(tick);
      }
    });
  }
