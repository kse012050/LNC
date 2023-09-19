$(document).ready(function(){
  // css index
  $('[data-styleIdx]').length && styleIdx();

  var mainSwiper = new Swiper(".mainPage .topBox .mySwiper", {
    pagination: {
      el: ".mainPage .topBox .swiper-pagination",
    },
  });
})

function styleIdx(){
  const selector = $('[data-styleIdx]');
  selector.each(function(){
      const attrValue = $(this).attr('data-styleIdx');
      $(this).find('>' + (attrValue ? attrValue : ' *')).each(function(i){
          $(this).css('--styleIdx', i);
      })
  })
}