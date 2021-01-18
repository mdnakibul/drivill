
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
  
          },
          768:{
              items:3,
  
          },
      }
  })
  });
  $( '.card h3' ).on( "click", function() {
    $( this ).find( 'span' ).toggleClass( "fa-angle-up fa-angle-right" );
  } );

 var leftScroller = document.querySelector(".scroller-left");
 var rightScroller = document.querySelector(".scroller-right");
 var scrollTab = document.querySelector("ul.list")
 leftScroller.addEventListener("click",function(){
    scrollTab.scrollLeft += -100; 
 })
 rightScroller.addEventListener("click",function(){
     scrollTab.scrollLeft += 100;
     scrollTab.getElementsByClassName.transition = "all 1s"
 })


 /*
    Stop / Start carousel autoplay
*/
$('.btn-customized').on('click', function(){
 
    if( ! $(this).hasClass('paused') ) {
        $('.carousel').carousel('pause');
        $('.btn-customized').toggleClass('paused');
        $('.btn-customized i').removeClass('fa-pause').addClass('fa-play');
        $(this).blur();
    }
    else {
        $('.carousel').carousel('cycle');
        $('.btn-customized').toggleClass('paused');
        $('.btn-customized i').removeClass('fa-play').addClass('fa-pause');
        $(this).blur();
    }
 
});
