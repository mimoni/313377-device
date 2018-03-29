document.addEventListener('DOMContentLoaded', function () {
  var feedbackBtn = document.querySelector('.contacts__feedback-btn');
  var feedbackBtnClose = document.querySelector('.modal__close-feedback');
  var contactForm = document.querySelector('.modal-feedback');

  feedbackBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    contactForm.classList.add('modal--show');
  });

  feedbackBtnClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    contactForm.classList.remove('modal--show');
  });

  var mapBtn = document.querySelector('.contacts__map');
  var mapBtnClose = document.querySelector('.modal__close-map');
  var mapModal = document.querySelector('.modal-map');

  mapBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapModal.classList.add('modal--show');
  });

  mapBtnClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapModal.classList.remove('modal--show');
  });

  var styleFeedback = window.getComputedStyle(contactForm);
  var styleMap = window.getComputedStyle(mapModal);

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27
      && (styleFeedback.display === 'block' || styleMap.display === 'block')) {

      evt.preventDefault();
      contactForm.classList.remove("modal--show");
      mapModal.classList.remove("modal--show");
    }
  });
});
