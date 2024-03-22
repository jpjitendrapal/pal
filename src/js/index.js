(function () {
  $(".nav-list li").on("click", function () {
    $(".nav-list li").removeClass("selected");
    $(this).addClass("selected");
    var showCtId = $(this).data("id");
    document.getElementById(showCtId).scrollIntoView({ behavior: "smooth" });
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

  var jumpLinks = document.querySelectorAll(".jump-link");
  var sections = document.querySelectorAll(".content");

  // Create a new Intersection Observer
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Add 'active' class to corresponding nav link
          console.log("entry: ", '[data-id="' + entry.target.id + '"]');
          var targetLink = document.querySelector(
            '[data-id="' + entry.target.id + '"]'
          );
          jumpLinks.forEach(function (link) {
            link.classList.remove("selected");
          });
          if (targetLink) {
            targetLink.classList.add("selected");
          }
        }
      });
    },
    { threshold: 0.5 }
  ); // Intersection threshold of 100%

  // Observe each section
  sections.forEach(function (section) {
    observer.observe(section);
  });
  console.log("Executing");

  // update experience
  function updateExp() {
    var todayDate = new Date();
    var joinDate = new Date("2012-07-16");
    var expMsg = "";

    var y = todayDate.getYear() - joinDate.getYear();
    var m = todayDate.getMonth() - joinDate.getMonth();

    if (m < 0) {
      y--;
      m = 12 + m;
    }
    expMsg = y + " Years ";
    if (m > 0) {
      expMsg += m + " Months";
    }

    $(".dynamic-exp").text(expMsg);
  }

  updateExp();
})();
