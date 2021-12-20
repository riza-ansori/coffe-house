/* 
This js is only for templates created by the Rasa Logi team.
author : RASA Logi team
template name : Coffe shop 
*/

$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
     if (startchange.length){
    $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > 100) {
           $(".navbar-default").css('background-color', '#fff');
           $(".nav-link").css('color', '#20292f');
           $(".logo").css('color', '#20292f');
        } else {
           $('.navbar-default').css('background-color', 'transparent');
           $(".nav-link").css('color', '#fff');
           $(".logo").css('color', '#fff');
        }
    });
     }
});