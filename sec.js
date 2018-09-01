


$("#wrapper").animate({width:'100%'},1000)
$("#wrapper").animate({height:'100%'},1000, function(){
    $("h1").fadeIn(2000 , function(){
        $(".item:nth-child(1)").fadeIn(2000,function(){
            $(".item:nth-child(2)").fadeIn(2000, function(){
             $(".item:nth-child(3)").fadeIn(2000)
    })
  })
})
    })




$("#options i").click(function(){
    
    $(".color-options").toggle();
})

var list= $("options ul li");

list.eq(0).css("backgrouncolor","teal")
list.eq(1).css("backgrouncolor","tan")
list.eq(2).css("backgrouncolor","orang")
list.eq(3).css("backgrouncolor","teal")
list.eq(4).css("backgrouncolor","teal")


list.click(function(){
    var bgcolor =$(this).css("backgrounscolor")
    $("p").css("color",bgcolor)
})