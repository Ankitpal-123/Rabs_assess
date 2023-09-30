$(document).ready(function () {
  // Initially, show the Residential projects and hide others
  $("#residential_project").show();
  $("#commercial_project, #retail_project").hide();

  // Click event for Residential tab
  $(".tab.residential").on("click", function () {
    $("#residential_project").show();
    $("#commercial_project, #retail_project").hide();
  });

  // Click event for Commercial tab
  $(".tab.commercial").on("click", function () {
    $("#commercial_project").show();
    $("#residential_project, #retail_project").hide();
  });

  // Click event for Retail tab
  $(".tab.retail").on("click", function () {
    $("#retail_project").show();
    $("#residential_project, #commercial_project").hide();
  });
});
