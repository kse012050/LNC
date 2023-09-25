$(document).ready(function(){
  // css index
  $('[data-styleIdx]').length && styleIdx();

  var mainSwiper = new Swiper(".mainPage .topBox .mySwiper", {
    pagination: {
      el: ".mainPage .topBox .swiper-pagination",
    },
  });

  // tab event
  $('.tabBtn').length && tabEvent();

  // 모바일 메뉴 이벤트
  mobileMenuEvent();
})

  // css index
function styleIdx(){
  const selector = $('[data-styleIdx]');
  selector.css('--totalIdx', selector.children().length - 1);
  selector.each(function(){
      const attrValue = $(this).attr('data-styleIdx');
      $(this).find('>' + (attrValue ? attrValue : ' *')).each(function(i){
          $(this).css('--styleIdx', i);
      })
  })
}

// tab event
function tabEvent(){
  $('.tabBtn li button').click(function(){
    // $('.tabBtn li').removeClass('active');
    const thisParent = $(this).parent();
    thisParent.addClass('active').siblings().removeClass('active');
    $('.tabContent > li').eq(thisParent.index()).addClass('active').siblings().removeClass('active');
  })
}

function mobileMenuEvent(){
  $('header > button').click(function(){
    $('header').toggleClass('active')
  });

  $('header nav > ul > li > button').click(function(){
    $(this).toggleClass('active');
  })

  $(window).scroll(function(){
    if($(window).scrollTop() > 0){
      $('header').addClass('scroll')
    }else{
      $('header').removeClass('scroll')
    }
  })
}