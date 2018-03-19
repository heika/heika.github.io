// init controller
var controller = new ScrollMagic.Controller();

var sumHello = 0;
var sumTalk = 0;
var sumBar = 0;

$(function () {
    sumHello = $('.hello').length;
    sumTalk = $('.talk-heika').length;
    sumBar = $('.skills').length;

    // chess scene pin
    new ScrollMagic.Scene({triggerElement: "#chess", triggerHook: 0, duration: 2000,reverse: true})
                    .setPin("#chess")
                    .on("enter", function (event) {
                        $('.mainNav ul li').removeClass('active');
                        $($('.mainNav ul li')[0]).addClass('active');
                    })
                    .on("leave", function (event) {
                        $($('.mainNav ul li')[0]).removeClass('active');
                    })
                    .addTo(controller);
    // chess scene move
    new ScrollMagic.Scene({triggerElement: "#chess", duration: 2000,reverse: true})
                    .on("progress", function (event) {
                        //if(event.target.controller().info("scrollDirection")=="FORWARD") {
                            var target = Math.floor(event.progress / 0.3);
                            if(target<sumHello) {
                                var modulus = (event.progress%0.3)/0.3;
                                var targetBG = [$('.bg-me'), $('.bg-code'), $('.bg-cooking')];

                                if(modulus<0.25) {
                                    $($('.hello')[target]).css('opacity', modulus*4);
                                    targetBG[target].css('opacity', 0.5 + modulus*2);
                                } else if(modulus<0.75) {
                                    $($('.hello')[target]).css('opacity', 1);
                                    targetBG[target].css('opacity', 1);
                                } else {
                                    if(target!=(sumHello-1)) {
                                        $($('.hello')[target]).css('opacity', (1-modulus)*4);
                                        targetBG[target].css('opacity', 0.5 + (1-modulus)*2);
                                    }
                                }
                                //$($('.hello')[target]).css('opacity', (event.progress%0.1)/0.1);
                                for(var i=0; i<sumHello; i++) {
                                    if(i!=target) {
                                        $($('.hello')[i]).css('opacity', 0);
                                        targetBG[i].css('opacity', 0.5);
                                    }
                                }
                            }
                        //}
                    })
                    .on("enter", function (event) {
                        $($('.mainNav ul li')[0]).addClass('active');
                    })
                    .addTo(controller);
    // chartlist scene pin
    new ScrollMagic.Scene({triggerElement: "#chartList", triggerHook: 0, duration: 1000, reverse: true})
                    .setPin("#chartList")
                    .on("enter", function (event) {
                        $('.mainNav ul li').removeClass('active');
                        $($('.mainNav ul li')[1]).addClass('active');
                    })
                    .on("leave", function (event) {
                        $($('.mainNav ul li')[1]).removeClass('active');
                    })
                    .addTo(controller);
    // chartlist scene move
    new ScrollMagic.Scene({triggerElement: "#chartList", duration: 1000, reverse: true})
                    .on("enter", function (event) {
                        $('.mainNav ul li').removeClass('active');
                        $($('.mainNav ul li')[1]).addClass('active');
                    })
                    .on("start", function (event) {
                        if(event.target.controller().info("scrollDirection")=="FORWARD") {
                            for(var i=0; i<sumBar; i++) {
                                var rateVal = parseInt($($('.skills')[i]).attr("data-rate"))*10 + "%";
                                $($('.skills')[i]).animate({width: rateVal});
                            }
                        } else {
                            $('.skills').animate({width: 0});
                        }
                    })
                    .addTo(controller);
    // work scene pin
    new ScrollMagic.Scene({triggerElement: "#worksList", triggerHook: 0, duration: 1000, reverse: true})
                    .setPin("#worksList")
                    .on("enter", function (event) {
                        $('.mainNav ul li').removeClass('active');
                        $($('.mainNav ul li')[2]).addClass('active');
                    })
                    .on("leave", function (event) {
                        $($('.mainNav ul li')[2]).removeClass('active');
                    })
                    .addTo(controller);
    // work scene move
    new ScrollMagic.Scene({triggerElement: "#worksList", duration: 1000, reverse: true})
                    .on("enter", function (event) {
                        $('.mainNav ul li').removeClass('active');
                        $($('.mainNav ul li')[2]).addClass('active');
                    })
                    .on("progress", function (event) {
                        $('#worksList ul li').css('opacity', event.progress*2);
                    })
                    .addTo(controller);
    // chatbox scene pin
    new ScrollMagic.Scene({triggerElement: "#chatbox", triggerHook: 0, duration: 0, reverse: true})
                    .setPin("#chatbox")
                    .on("enter", function (event) {
                        $('.mainNav ul li').removeClass('active');
                        $($('.mainNav ul li')[3]).addClass('active');
                    })
                    .on("leave", function (event) {
                        $($('.mainNav ul li')[3]).removeClass('active');
                    })
                    .addTo(controller);
    // chatbox scene move
    new ScrollMagic.Scene({triggerElement: "#chatbox", duration: 1000, reverse: true})
                    .on("enter", function (event) {
                        $('.mainNav ul li').removeClass('active');
                        $($('.mainNav ul li')[3]).addClass('active');
                    })
                    .on("progress", function (event) {
                        if(event.target.controller().info("scrollDirection")=="FORWARD") {
                            for(var i=0; i<event.progress/0.15; i++) {
                                if(!$($('.talk-heika')[i]).is(":visible"))
                                    $($('.talk-heika')[i]).fadeIn();
                            }
                        }
                        $('#chatbox').css("top", "0px");
                    })
                    .addTo(controller);
})

