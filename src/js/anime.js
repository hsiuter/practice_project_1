$(document).ready(function(){

var boolen=false;

    $(".work").click(function(){
        var work=$(".page_1").offset().top;
        if(!boolen){
            boolen=true;
            $("html, body").animate({scrollTop:work}, 500,function(){
                boolen=false;
            })
        }
    })
    $(".studio").click(function(){
        var studio=$(".page_2").offset().top;
        if(!boolen){
            boolen=true;
            $("html, body").animate({scrollTop:studio}, 500,function(){
                boolen=false;
            })
        }
    })
    $(".journal").click(function(){
        var journal=$(".page_3").offset().top;
        if(!boolen){
            boolen=true;
            $("html, body").animate({scrollTop:journal}, 500,function(){
                boolen=false;
            })
        }
    })
    $(".contact").click(function(){
        var contact=$(".page_4").offset().top;
        if(!boolen){
            boolen=true;
            $("html, body").animate({scrollTop:contact}, 500,function(){
                boolen=false;
            })
        }
    })
})
