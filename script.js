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

var popupWrapper = document.getElementById("popwrapper");
var blurElements = document.querySelectorAll(".blur-me"); // Select all elements to be blurred

function applyBlur() {
  // Apply blur to selected elements
  blurElements.forEach(function (element) {
    element.style.filter = "blur(5px)";
  });
}

function removeBlur() {
  // Remove blur from selected elements
  blurElements.forEach(function (element) {
    element.style.filter = "none";
  });
}

function openPopup() {
  popupWrapper.style.display = "block";
  applyBlur(); // Apply blur to selected elements
  mySwiper.update(); // Update Swiper when the pop-up is opened
}

function closePopup() {
  popupWrapper.style.display = "none";
  removeBlur(); // Remove blur from selected elements

  // Clean up Swiper if it's initialized (you should have mySwiper defined globally)
  if (mySwiper) {
    mySwiper.destroy();
  }
}
