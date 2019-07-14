// 轮播图电脑版和手机版设置
$(function () {
    $(window).on("resize",function () {
        let clientW = $(window).width();
        let isShowBigImage = clientW >=800;
        let $allItems = $("#lk_carousel .item");
        $allItems.each(function (index, item) {
            let src = isShowBigImage ? $(item).data("lg-img") : $(item).data("sm-img");
            let imgUrl = 'url("' + src +'")';
            $(item).css({
                backgroundImage: imgUrl
            });
            if(!isShowBigImage){
                let $img = "<img src='"+ src +"'>";
                $(item).empty().append($img);
            }else {
                $(item).empty()
            }
        });
    });
    $(window).trigger("resize");
    // 2.工具提示
    $('[data-toggle="tooltip"]').tooltip();

});
// 轮播图电脑版和手机版设置
