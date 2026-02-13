document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  var menuToggle = document.getElementById("menu-toggle");
  var sidebar = document.getElementById("sidebar");
  var overlay = document.getElementById("sidebar-overlay");

  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", function () {
      sidebar.classList.toggle("open");
      if (overlay) overlay.classList.toggle("active");
    });
  }

  if (overlay) {
    overlay.addEventListener("click", function () {
      sidebar.classList.remove("open");
      overlay.classList.remove("active");
    });
  }

  // Collapsible sidebar folders
  var folders = document.querySelectorAll(".nav-folder-toggle");
  folders.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var folder = btn.parentElement;
      folder.classList.toggle("open");
    });
  });
});
