const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close");
const menuTab = document.querySelector(".menu-container");
const overlay = document.querySelector(".overlay");
let isOpen = false;

menuIcon.addEventListener('click', () => {
  if (!isOpen) {
    menuTab.style.transform = 'translateX(0%)';
    overlay.style.display = 'block';
    isOpen = true;
  } else {
    menuTab.style.transform = 'translateX(100%)';
    overlay.style.display = 'none';
    isOpen = false;
  }
});

closeIcon.addEventListener('click', () => {
  if (isOpen) {
    menuTab.style.transform = 'translateX(100%)';
    overlay.style.display = 'none';
    isOpen = false;
  } else {
    menuTab.style.transform = 'translateX(0%)';
    overlay.style.display = 'block';
    isOpen = true;
  }
});