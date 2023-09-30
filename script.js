$(document).ready(function () {
  // Initially hide all content except Residential
  $(".content:not(#residential_project)").hide();

  // Handle click on project links
  $(".tab").click(function (e) {
    e.preventDefault();

    // Get the target ID from the href attribute
    var targetId = $(this).attr("href");

    // Hide all content
    $(".content").hide();

    // Show the selected content
    $(targetId).show();

    // Remove the 'active' class from all tabs
    $(".tab").removeClass("active");

    // Add 'active' class to the clicked tab
    $(this).addClass("active");
  });
});
