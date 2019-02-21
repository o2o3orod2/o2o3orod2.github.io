$(document).ready(function(){
   var intv = setInterval(function(){nextAni();} , 2800);
    function nextAni(){
        $(".vsBox").not(":animated").animate({"margin-left":"-760px"},800,function(){
        $(".vsBox li").eq(0).appendTo($(".vsBox"));
        $(".vsBox").css("margin-left", "0px");
        });
    }
    
    function preAni(){
        $(".vsBox li").eq(2).prependTo($(".vsBox"));
        $(".vsBox").css("margin-left", "-760px");
        $(".vsBox").not(":animated").animate({"margin-left":"0px"},800);
    }
    $(".next").click(function(){
        clearInterval(intv);
        nextAni();
        intv = setInterval(function(){nextAni();}, 2800);   
    });
    $(".pre").click(function(){
        clearInterval(intv);
        preAni();
        intv = setInterval(function(){nextAni();}, 2800); 
    });
    
    
    var intv2 = setInterval(function(){nextAni2();} , 2800);
     function nextAni2(){
        $(".banBox").not(":animated").animate({"margin-left":"-400px"},800,function(){
        $(".banBox li").eq(0).appendTo($(".banBox"));
        $(".banBox").css("margin-left", "0px");
        });
    }
    
    
    $(".openBtn").click(function(){
       $(".popWrap").fadeIn();
    });
    $(".clBtn").click(function(){
       $(".popWrap").fadeOut(); 
    });
    
    
    
});




