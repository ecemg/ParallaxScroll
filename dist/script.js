$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
   var scrolled = $(window).scrollTop(); 
   $('.layer-1').css('top',(0-(scrolled*.25))+'px');
   $('.layer-2').css('top',(0-(scrolled*.5))+'px');
   $('.layer-3').css('top',(0-(scrolled*.75))+'px');
   $('.lj').css('bottom ',(0-(scrolled*.2))+'px');
   $('.ball-1').css('top',(400-(scrolled*.8))+'px');
   $('.ball-2').css('top',(200-(scrolled*.6))+'px');
   $('.ball-3').css('top',(500-(scrolled*.4))+'px'); 
   $('.ball-4').css('top',(400-(scrolled*.5))+'px'); 
   $('.ball-5').css('top',(600-(scrolled*.7))+'px'); 
   $('.ball-6').css('top',(400-(scrolled*.7))+'px'); 
   $('.ball-7').css('top',(600-(scrolled*.5))+'px'); 
   $('.ball-8').css('top',(200-(scrolled*.2))+'px');
   $('.ball-9').css('top',(100-(scrolled*.5))+'px');
  $('.ball-10').css('top',(200-(scrolled*.5))+'px');
  $('.ball-11').css('top',(200-(scrolled*.5))+'px');
}