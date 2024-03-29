//header
$(function(){
    $("header .memberList").on("click",function(){
        $(this).find("ul")
        .toggleClass("display");
    })

    $("header .lang").on("click",function(){
        $(this).find("ul")
        .toggleClass("display");
    })
})

//mainArea高度
$(function(){
    var th = $('.mainArea');
    var wh = window.innerHeight;
    th.css("height", (String(wh - 325) + "px"));

    $(window).resize(function () {
        var th = $('.mainArea');
        var wh = window.innerHeight;
        th.css("height", (String(wh - 325) + "px"));
    });
});

//mainArea table展開
$(function(){
    // $(document).on("click",".mainArea .tableList .title",function(){
    //     $(this).closest(".listBox")
    //     .toggleClass("active");

    //     $(".mainArea .tableList .listBox").each(function(){
            
    //         if($(this).hasClass("active"))
    //         {
    //             var n = $(this).find(".tableBox").length;

    //             if(n == 1)
    //             {
    //                 $(this)
    //                 .css("height",""+ (n * 155) +"");
    //             }
    //             else
    //             {
    //                 $(this)
    //                 .css("height",""+ (n * 108 + 47) +"");
    //             }
    //         }
    //         else
    //         {
    //             $(this)
    //             .css("height","47px");
    //         }
    //     })
    // })
    $(".mainArea .tableList .title").on("click",function(){
        $(this).closest(".listBox")
        .toggleClass("active");

        $(".mainArea .tableList .listBox").each(function(){
            
            if($(this).hasClass("active"))
            {
                var n = $(this).find(".tableBox").length;

                if(n == 1)
                {
                    $(this)
                    .css("height",""+ (n * 155) +"");
                }
                else
                {
                    $(this)
                    .css("height",""+ (n * 108 + 47) +"");
                }
            }
            else
            {
                $(this)
                .css("height","47px");
            }
        })
    })

    $(".mainArea .topBtnBox button").on("click",function(){
        if($(".mainArea .tableList .listBox").hasClass("active"))
        {
            $(".mainArea .tableList .listBox")
            .removeClass("active")
            .css("height","48px");
        }
        else
        {
            $(".mainArea .tableList .listBox")
            .addClass("active");

            $(".mainArea .tableList .listBox").each(function(){

                var n = $(this).find(".tableBox").length;

                if(n == 1)
                {
                    $(this)
                    .css("height",""+ (n * 155) +"");
                }
                else
                {
                    $(this)
                    .css("height",""+ (n * 108 + 47) +"");
                }
            })
        }
    })
})

//nav
$(function(){
    $("nav li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })
})

//topBtnBox li
$(function(){
    $(".topBtnBox li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })

    $(document).on("click",".topBtnBox.darkblue li",function(e){
        var x = e.pageX;
        var y = e.pageY;
        var xPos = x - $(this).offset().left;
        var yPos = y - $(this).offset().top;

        $(this)
        .append("<i style='top: "+ yPos +"px;left: "+ xPos +"px;'></i>")
        .siblings().find("i").remove();
    })
})

//chatroom
$(function(){
    $(".chatroom textarea").keydown(function(event){
        if(event.which == 13)
        {
            var n = $(".chatroom textarea").val();

            $(".chatroom .chatArea")
            .append("<div class='cus'><p>"+ n +"</p></div>");

            $(".chatroom textarea")
            .val("");

            var h = $(".chatroom .chatArea").prop("scrollHeight");

            $(".chatroom .chatArea")
            .animate({
                scrollTop: h, 
            },0);
        }
    })

    $(".chatroom .title").on("click",function(){
        $(this).closest(".chatroom")
        .toggleClass("active");

        $(this).find("span")
        .toggleClass("display");
    })
})

//切換css
$(function(){
    $("aside.color_toggler .btnBox button").on("click",function(){
        var n = $(this).index();

        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        if(n == 0)
        {
            $(".cssList")
            .attr("href","./css/style.css");
        }
        else if(n == 1)
        {
            $(".cssList")
            .attr("href","./css_darkblue/style.css");
        }
        else if(n == 2)
        {
            $(".cssList")
            .attr("href","./css_pink/style.css");
        }
        else if(n == 3)
        {
            $(".cssList")
            .attr("href","./css_darkPink/style.css");
        }
    })
})

//i試作
$(function(){
    if($("nav").hasClass("origin"))
    {
        for(var i = 1;i <= 50; i++)
        {
            $("nav.origin .slide")
            .append("<span style='width: "+ (55 - i) +"px;height: "+ (55 - i) +"px;transition-delay: "+ (i * 0.003) +"s;transform: translateY("+ (i / 2) +"px)'></span>");
        }
    }

    $(document).on("click","nav.origin li",function(){
        var n = $(this).offset().top;
        
        $("nav.origin .slide span")
        .css({
            "top" : ""+ n +"px",
        })
    })
})

//swiper
$(function(){
    var swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: { 
            1600: { 
                slidesPerView: 5,
                spaceBetween: 30,
            },
            1260: { 
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1000: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        },
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
    });
})