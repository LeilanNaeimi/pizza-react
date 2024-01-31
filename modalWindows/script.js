'use strict';
const btnOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelectorAll('.close-modal');
const modal = document.querySelectorAll('.modal');
const overlay = document.querySelectorAll('.overlay');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  /* or
    modal.style.display = 'block';
    */
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
