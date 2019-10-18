time=0
setInterval(auto,4000)
function auto(){
	time++
	if(time>2){
		time=0
	}
	$(".show img").fadeOut(400,function(){
		$(".show img").attr("src","img/slide/"+time+".jpg")
		$(".show img").fadeIn()
	})
}


$(".category-item").hover(function(){
	$(".category-item").removeClass("current")
	$(this).addClass("current")
})


$(".button-1").click(function(){
	$(".container-s").removeClass("right")
	$(".container-s").addClass("left")
	$(".container-b").removeClass("right")
	$(".container-b").addClass("left")
	$(".container-p").removeClass("right")
	$(".container-p").addClass("left")

})
$(".button-2").click(function(){
	$(".container-s").removeClass("right")
	$(".container-s").addClass("left")
	$(".container-b").removeClass("right")
	$(".container-b").addClass("left")
	$(".container-p").removeClass("right")
	$(".container-p").addClass("left")

})
$(".button-3").click(function(){
	$(".container-s").removeClass("left")
	$(".container-s").addClass("right")
	$(".container-b").removeClass("left")
	$(".container-b").addClass("right")
	$(".container-p").removeClass("left")
	$(".container-p").addClass("right")

})
$(".button-4").click(function(){
	$(".container-s").removeClass("left")
	$(".container-s").addClass("right")
	$(".container-b").removeClass("left")
	$(".container-b").addClass("right")
	$(".container-p").removeClass("left")
	$(".container-p").addClass("right")
})

$("#item1").click(function(){
	$("#shop1").removeClass("display-n")
	$("#shop2").addClass("display-n")
	$("#shop3").addClass("display-n")
	$("#shop4").addClass("display-n")
});

$("#item2").click(function(){
	$("#shop1").addClass("display-n")
	$("#shop2").removeClass("display-n")
	$("#shop3").addClass("display-n")
	$("#shop4").addClass("display-n")
});

$("#item3").click(function(){
	$("#shop1").addClass("display-n")
	$("#shop2").addClass("display-n")
	$("#shop3").removeClass("display-n")
	$("#shop4").addClass("display-n")
});

$("#item4").click(function(){
	$("#shop1").addClass("display-n")
	$("#shop2").addClass("display-n")
	$("#shop3").addClass("display-n")
	$("#shop4").removeClass("display-n")
});

$("#item4").click(function(){
	$("#shop1").addClass("display-n")
	$("#shop2").addClass("display-n")
	$("#shop3").addClass("display-n")
	$("#shop4").removeClass("display-n")
});

$(".container-b button").click(function(){
	$(".addcart").css("transform","translateY(0)").delay(1500).css("transform","translateY(-100%)")
})

 t=0
  $(".container-b button").click(function(){
    t++
  });

 $(".container-b button").click(function(){
    $("#cart span").text("購物車("+t+")")
  });
  
  
$('#cart').click(function(){
	$('.form1').fadeIn();
})

$('.exit2').click(function(){
	$('.form1').fadeOut();
})

$('.form1 button').click(function(){
	alert("目前沒有網路無法登入");	
})