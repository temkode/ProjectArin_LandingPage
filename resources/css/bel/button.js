// Get modal element
var modal = document.getElementById("modal");
var modal_content = document.getElementById("modal-content");
// Get open modal button
var modalBtn = document.getElementById("puzzle-btn-border");
var mobileModalBtn = document.getElementById("puzzle-btn");
// Get close button
var closeBtn = document.getElementById("closeBtn");
var mobileCloseBtn = document.getElementById("mobileClose");
// Listen for click
modalBtn.addEventListener("click", openModal);
// Listen for mobile click
mobileModalBtn.addEventListener("click", openModal);
// Listen for close click
closeBtn.addEventListener("click", closeModalAnimation);
// Listen for mobile close click
mobileCloseBtn.addEventListener("click", closeModalAnimation);
var onepointoneSecond = 1100;
var oneSecond = 380;
function showHomeButton() {
  closeBtn.style.display = "inline-block";
}
//Function to open modal
function openModal() {
  modal.style.display = "block";
  $('.home-display').css('pointer-events', 'none')
  setTimeout(showHomeButton, onepointoneSecond);
}

//Function to close modal
function closeModalAnimation() {
  modal.classList.add("close-animation");
  modal_content.classList.add("reverse-opacity");

  setTimeout(closeModal, oneSecond);
}
function closeModal() {
  $('.home-display').css('pointer-events', 'auto')
  modal.classList.remove("close-animation");
  modal_content.classList.remove("reverse-opacity");
  modal.style.display = "none";
}


// About page
var about = document.getElementById("about");
var about_content = document.getElementById("about-content");

var aboutBtn = document.getElementById("about-btn-border");
var mobileAboutBtn = document.getElementById("about-btn");

// close button
var aboutClose = document.getElementById("about-close");
var mobileAboutClose = document.getElementById("about-mobileBtn");
// Listen for click
aboutBtn.addEventListener("click", openAbout);
// Listen for mobile click
mobileAboutBtn.addEventListener("click", openAbout);
// Listen for close click
aboutClose.addEventListener("click", closeAboutAnimation);
// Listen for mobile close click
mobileAboutClose.addEventListener("click", closeAboutAnimation);


// functions
function showHomeButton() {
  aboutClose.style.display = "inline-block";
}
//Function to open modal
function openAbout() {
  $('.home-display').css('pointer-events', 'none')
  about.style.display = "block";
  setTimeout(showHomeButton, onepointoneSecond);
}

//Function to close modal
function closeAboutAnimation() {
  about.classList.add("about-close-animation");
  about_content.classList.add("reverse-opacity");

  setTimeout(closeAbout, oneSecond);
}
function closeAbout() {
  $('.home-display').css('pointer-events', 'auto')
  about.classList.remove("about-close-animation");
  about_content.classList.remove("reverse-opacity");
  about.style.display = "none";
}
