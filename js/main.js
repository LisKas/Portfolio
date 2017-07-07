$(document).ready(function(){

    $(".list-site li").click(function(){
        $(this).children(".nav").slideToggle("slow");
         return false;
                   
    });

    $(".contact").click(function(){
       $(this).children(".text").fadeToggle("slow");
                    
        $(this).toggleClass("active");
          
    });
});