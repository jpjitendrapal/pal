(function () {
    $(".nav-list li").on("click", function () {
        $(".nav-list li").removeClass("selected");
        $(this).addClass("selected");
        var showCtId = $(this).data("id");
        $(".content").addClass("hidden");
        $("#" + showCtId).removeClass("hidden");
    });

    $(".org-name").on("click", function () {
        if ($(this).is(".open")) {
            $(this).removeClass("open").addClass("close");
            $(this).find("~ .projects").addClass("hidden");
        } else {
            $(this).removeClass("close").addClass("open");
            $(this).find("~ .projects").removeClass("hidden");
        }
    });

    // update experience
    function updateExp() {
        var todayDate = new Date();
        var joinDate = new Date('2012-07-16');
        var expMsg="";

        var y = todayDate.getYear() - joinDate.getYear();
        var m = todayDate.getMonth() - joinDate.getMonth();

        if (m < 0) {
            y--;
            m = 12 + m;
        }
        expMsg = y +" Years ";
        if(m > 0){
            expMsg +=  m + " Months";
        }

        $(".dynamic-exp").text(expMsg);
    }

    updateExp();

})();
