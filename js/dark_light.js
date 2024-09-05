const switchElement = document.querySelector('.switch input[type="checkbox"]');
const bodyElement = document.querySelector('body');

switchElement.addEventListener('change', () => {
  if (switchElement.checked) {
    bodyElement.classList.add('s');
  } else {
    bodyElement.classList.remove('dark');
  }
});