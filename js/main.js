$(document).ready(function(){
    $(".list-site li").click(function(){
        $(this).children(".nav").slideToggle("slow");
                    return false;
    });
});

