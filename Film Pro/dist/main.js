const openMenu = document.querySelector ('.fa-bars');
const menu = document.querySelector ('.menu');
const closeMenu = document.querySelector ('.fa-times');

openMenu.addEventListener('click', () => {
  menu.classList.toggle('toggle');
  openMenu.classList.toggle ('fa-times');
  
  
});

// closeMenu.addEventListener('click', () => {
//   menu.classList.toggle('toggle');
//   closeMenu.classList.toggle('fa-bars');
// })
