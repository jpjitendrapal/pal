(function(){
    $(".nav-list li").on("click", function(){
        $(".nav-list li").removeClass("selected");
        $(this).addClass("selected");
        var showCtId = $(this).data("id");
        $(".content").addClass("hidden");
        $("#"+showCtId).removeClass("hidden");
    });

    $(".org-name").on("click", function(){
        if($(this).is(".open")){
            $(this).removeClass("open").addClass("close");
            $(this).find("~ .projects").addClass("hidden");
        } else {
            $(this).removeClass("close").addClass("open");
            $(this).find("~ .projects").removeClass("hidden");
        }
    });

    // update experience
    function updateExp(){
        var joinDate = new Date('2012-07-16');
        var totalExp = new Date(new Date() - joinDate);
        var expMsg = ((totalExp.toISOString().slice(0, 4) - 1970) + " Years " + (totalExp.getMonth()+1) + " Months " + totalExp.getDate() + " Days");
        
        $(".dynamic-exp").text(expMsg);
    }

    //updateExp();
    
})();
