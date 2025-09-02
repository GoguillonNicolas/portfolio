window.addEventListener('load', function() {
  console.log("Page loaded");
});


console.log("JS loaded");
var elementsOnLoad = document.getElementsByClassName("color-list");

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  console.log("dark onload JS")
for (var i = 0; i < elementsOnLoad.length; i++) {
  elementsOnLoad[i].style.color = "white";

}
} else {
    console.log("light onload JS")
for (var j = 0; j < elementsOnLoad.length; j++) {
  elementsOnLoad[j].style.color = "black";
}

}

// Hide main theme icon when mobile navbar is opened
$(function() {
  $('#navbarSupportedContent').on('show.bs.collapse', function () {
    $('#main-theme-icon-container').addClass('d-none');
  });
  $('#navbarSupportedContent').on('hide.bs.collapse', function () {
    $('#main-theme-icon-container').removeClass('d-none');
  });
});