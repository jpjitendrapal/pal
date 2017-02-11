(function(){
    $(".nav-list li").on("click", function(){
        $(".nav-list li").removeClass("selected");
        $(this).addClass("selected");
        var showCtId = $(this).data("id");
        $(".content").addClass("hidden");
        $("#"+showCtId).removeClass("hidden");
    });
})();