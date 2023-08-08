var prevScrollpos = window.pageYOffset;
let nav = document.getElementById("navbar");
var isMobileVersion = document.getElementsByClassName('open');

window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos ||  window.pageYOffset < 50 || isMobileVersion.length > 0) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}
