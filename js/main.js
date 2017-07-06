$(document).ready(function(){
    $(".list-site li").click(function(){
        $(this).children(".nav").slideToggle("slow");
                    return false;
    });
});

$(document).ready(function(){
    $(".btn").click(function(){
        $(".text").fadeToggle("slow");
                    
        $(this).toggleClass("active")
          
    });
           
 

});


  