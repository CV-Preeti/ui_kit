$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 30) {
          $(".navbar").css("background" , "blue");
        }
  
        else{
            $(".navbar").css("background" , "transparent");  	
        }
    })
  })