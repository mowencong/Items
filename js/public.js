$(document).ready(function(){

  $(".public").mouseover(function(){
    $(".item").show();
    $(".public").css("background-color","white");
  });
  $(".public").mouseout(function(){
    $(".item").hide();
    $(".public").css("background-color","#e3e4e5");
  });



$(".sev").mouseover(function(){
    $(".items").show();
    $(".sev").css("background-color","white");
});
$(".sev").mouseout(function(){
    $(".items").hide();
    $(".sev").css("background-color","#e3e4e5");
});


  $(".netsec").mouseover(function(){
    $(".sub").show();
    $(".netsec").css("background-color","white");
  });
  $(".netsec").mouseout(function(){
    $(".sub").hide();
    $(".netsec").css("background-color","#e3e4e5");
  });


 $(".mobile").mouseover(function(){
    $(".phone-ewm").show();
    $(".mobile").css("background-color","white");
  });
  $(".mobile").mouseout(function(){
    $(".phone-ewm").hide();
    $(".mobile").css("background-color","#e3e4e5");
  });
 $(".shopcart").mouseover(function(){
    $(".cart").show();
  });
  $(".shopcart").mouseout(function(){
    $(".cart").hide();
  });
});