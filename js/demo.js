
jQuery.fn.tab=function(){
    "use strict";
    this.click(function(e){
        e.preventDefault();
        $(this).parent().addClass("active").siblings(".active").removeClass("active");
        var id=$(this).attr("href");
        $(id).addClass('active').siblings(".active").removeClass("active");
    })
}
$(".nav>li>a").tab();
/*图片组轮播*/
(function($){
    $.fn.scrollPic=function(option){
        var div=this.find('.sld-C ul');
        var ulWidth=-(div.find('li').width()+30);
        var leftbut=$(option.left);
        var rightbut=$(option.right);
        var lines=option.line?option.line:this.width()/liWidth;
        var timer=option.stoptime;
        var speeds=option.speed?option.speed:1000;
        var repeat;
        //自动滚动
        var scrollLeft=function(){
            leftbut.unbind('click',scrollLeft);
            div.stop().animate({'marginLeft':ulWidth},speeds,function(){
                for(i=1;i<=lines;i++){
                    div.find('li:first').appendTo(div);
                }
                div.css('marginLeft','0px');
                leftbut.bind('click',scrollLeft)
            });
        }
        //向right
        var scrollRight=function(){
            rightbut.unbind('click',scrollLeft);
            div.stop().animate({'marginLeft':ulWidth},speeds,function(){
                for(i=1;i<=lines;i++){
                    div.find('li:first').appendTo(div);
                }
                div.css('marginLeft','0px');
                leftbut.bind('click',scrollLeft)
            });
        }
        var autoStop=function(){
            if(timer) window.clearInterval(repeat);
        };
        var autoPlay=function(){
            if(timer) repeat=window.setInterval(scrollLeft,timer);
        };
        div.hover(autoStop,autoPlay).mouseout();
        leftbut.click(scrollLeft).hover(autoStop,autoPlay);
        rightbut.click(scrollRight).hover(autoStop,autoPlay);
    }
})(jQuery)
$(function(){
    $('.sld-box').scrollPic({line:1,speed:600,stoptime:2000,left:'.sld-R',right:'.sld-L'});
});


