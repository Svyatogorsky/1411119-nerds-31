const feedback = document.querySelector(".feedback-button");
const feedbackPopup = document.querySelector(".modal-feedback");
const popupClose = feedbackPopup.querySelector(".modal-close");

feedback.addEventListener("click", function(evt){
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
});

popupClose.addEventListener("click", function(evt){
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
    }
  }
});
