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

// Initialize Swiper
var popupWrapper = document.getElementById("popwrapper");
var backgroundContent = document.querySelector("main"); // Adjust this selector based on your structure

function openPopup() {
  popupWrapper.style.display = "block";
  backgroundContent.style.filter = "blur(5px)"; // Apply blur to the background content
  mySwiper.update(); // Update Swiper when the pop-up is opened
}

function closePopup() {
  popupWrapper.style.display = "none";
  backgroundContent.style.filter = "none"; // Remove blur from the background content
}

// You can call openPopup() to open the pop-up when needed.

// You can call openPopup() to open the pop-up when needed.
