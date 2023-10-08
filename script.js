// A. Trigger Modal Menu Modal
const openModalButton = document.getElementById('hamburger__button');
const closeModalButton = document.getElementById('close__button');
const mobileMenuModal = document.querySelector('.mobile__menu');

openModalButton.addEventListener('click', function(){
  mobileMenuModal.classList.add('opened');
})

closeModalButton.addEventListener('click', function(){
  mobileMenuModal.classList.remove('opened');
})