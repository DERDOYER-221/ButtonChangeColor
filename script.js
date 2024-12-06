const btnChangeWindowSize = document.getElementById('btn-change-window-size');
const btnChangeWindowSizeSpan = document.getElementsByClassName('text')[0];
const windowChangeSize = document.getElementsByClassName('window')[0];
const colorKey = document.getElementsByClassName('color-key')[0];
const colorValue = document.getElementsByClassName('color-value')[0];
const colorText = document.getElementsByClassName('color-text')[0];

btnChangeWindowSize.addEventListener('mouseenter', function() {
	btnChangeWindowSizeSpan.style.color = 'white';
  btnChangeWindowSizeSpan.style.fontStyle = 'italic';
  if (windowChangeSize.classList.contains('calm-blue')) {
  btnChangeWindowSizeSpan.style.textShadow = '0.5px 0.5px #F3D2D3';
  } else {
    btnChangeWindowSizeSpan.style.textShadow = '0.5px 0.5px #4895BF';
  }
})

btnChangeWindowSize.addEventListener('mouseleave', function() {
	btnChangeWindowSizeSpan.style.color = 'white';
  btnChangeWindowSizeSpan.style.textShadow = 'none';
  btnChangeWindowSizeSpan.style.fontStyle = 'none';
})

btnChangeWindowSize.addEventListener('click', function() {
	windowChangeSize.classList.toggle('calm-blue');
  if (windowChangeSize.classList.contains('calm-blue')) {
    colorValue.innerHTML = 'Calm Blue';
    colorText.style.color = 'white';
  } else {
    colorValue.innerHTML = 'Light Pink';
    colorText.style.color = 'black';
  }
})

document.addEventListener('DOMContentLoaded', function() {
  if (windowChangeSize.classList.contains('calm-blue')) {
    colorValue.innerHTML = 'Calm Blue';
  } else {
    colorValue.innerHTML = 'Light Pink';
  }
})
