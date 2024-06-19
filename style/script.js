//마우스 호버시 이미지 변경
const imgChange = document.querySelector('.p0_img_origin');

imgChange.addEventListener('mouseover', () => {
  imgChange.src = './src/img/img_2.png';
});
imgChange.addEventListener('mouseout', () => {
  imgChange.src = './src/img/img_1.png';
});

//마우스 호버시 색 변환
function changeColor(element) {
  element.style.backgroundColor = '#396464';
}

function resetColor(element) {
  element.style.backgroundColor = '#000000';
}
