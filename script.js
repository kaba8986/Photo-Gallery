//create image-array



let images = ['001.jpg', '002.jpg', '003.jpg', 
'004.jpg', '005.jpg', '006.jpg', '007.jpg', '008.jpg', 
'009.jpg', '010.jpg', '011.jpg', '012.jpg', '013.jpg', '014.jpg', 
'015.jpg', '016.jpg', '017.jpg', '018.jpg', '019.jpg', '020.jpg',
'021.jpg', '022.jpg', '023.jpg', '024.jpg', '025.jpg', '026.jpg',
'027.jpg', '028.jpg', '029.jpg', '030.jpg', '031.jpg','032.jpg',
'033.jpg', '034.jpg', '035.jpg', '036.jpg', '037.jpg', '038.jpg', 
'039.jpg'];

let currImg = 0;


function loadGallery() {
  let content = document.getElementById('content');
  content.innerHTML = '';

  for(let i = 0; i < images.length; i++) {
    content.innerHTML += /*html*/ `
    <div class="imgBox" onclick="zoomIn(${i+1})" id="${i+1}">
      <span id="check"><i class="fa-regular fa-circle-check"></i></span>
      <img src="img/${images[i]}">
    </div>`
  } 
}

function zoomIn(i) {
  let layer = document.getElementById('layer');
  let content = document.getElementById('content');
  let img = document.getElementById('bigImg');

  if(i < 10) {
    img.src = `img/00${i}.jpg`;
  } else {
    img.src = `img/0${i}.jpg`;
  }

  currImg = i;

  layer.classList.remove('dis-none');
  layer.style.display = 'flex';
  content.style.display = 'none';
}

function closeImg() {
  let layer = document.getElementById('layer');
  let content = document.getElementById('content');
  let img = document.getElementById('bigImg');

  img.src = ``;
  layer.style.display = 'none';
  content.style.display = 'flex';
}

function prev() {
  if(currImg == 1) {
    zoomIn(currImg = 39);
  } else {
    zoomIn(currImg - 1);
  }
}

function next() {
  if(currImg == 39) {
    zoomIn(currImg = 1);
  } else {
    zoomIn(currImg + 1);
  }
}

function openMenu() {
  let toggle =  document.getElementById('toggle');
  let icons = document.getElementById('icons');

  icons.style.display = 'none';
  icons.style.display = 'block';
}