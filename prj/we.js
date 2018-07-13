  var i = 0; //start point
  var images = [];
  var time = 3000;

//image list
  images[0] = 'image1.jpg';
  images[1] = 'image2.jpg';
  images[2] = 'image3.jpg';
//chage img
  function changeimg(){
    document.slide.src = images [i];

    if (i < images.length - 1){
      i++;
    }
    else {
      i = 0;
    }
    settimeout("changeimg()", time);
  }
  window.pnload = changeimg;
     $(document).ready(function(){
     $(window).bind('scroll', function() {
     var navHeight = $( window ).height() - 70;
       if ($(window).scrollTop() > navHeight) {
         $('nav').addClass('fixed');
       }
       else {
         $('nav').removeClass('fixed');
       }
    });
  });





