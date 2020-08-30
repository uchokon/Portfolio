function createBox(width, height, image, info){
    let box = document.createElement('div');
    box.style.width = width;
    box.style.height = height;
    box.style.backgroundImage = 'url("' + image + '")';
    box.className = 'box';
    return box;
}

function createGalleryTitle(width, height, title, info){
    let box = document.createElement('div');
    box.style.width = width;
    box.style.height = height;
    box.className = 'gallery-title';
    box.textContent = title;
    return box;
}

function addRow(height, galleryPieces){
    let row = document.createElement('div');
    row.className = 'row';
    for(let i = 0; i < galleryPieces.length; i++){
        let box = galleryPieces[i].box;
        let oldHeight = removePx(box.style.height);
        let oldWidth = removePx(box.style.width);
        box.style.height = height;
        box.style.width = getScaledWidth(oldHeight, removePx(height), oldWidth) + 'px';
        box.style.minWidth = box.style.width;
        row.appendChild(box);
    }
    document.querySelector('.box-container').append(row);
 }

function getScaledWidth(originalHeight, targetHeight, originalWidth) {
	let heightChangeRatio =  targetHeight / originalHeight;
    let scaledWidth = originalWidth * heightChangeRatio;
    return scaledWidth;
}

function removePx(height) {
	return parseInt(height.substring(0, height.length - 2));
}

function clickShowInfo(box, info) {
  if (stuffExists(box)) {
    hideInfo(box);
  } else {
    showInfo(box, info);
  }
}

function stuffExists(box) {
  return box.querySelector('.info-cont') !== null || box.querySelector('.info-gradient') !== null;
}

function showInfo(box, info) {
  if (!stuffExists(box)) {
    box.classList.remove("image-decrease");
    box.classList.add("image-increase");

    let infoCont = document.createElement('div');
    infoCont.className = 'info-cont';
    infoCont.classList.add("fade-in");

    let year = document.createElement('h2');
    year.textContent = info.year;
    year.className = 'info-year';
   
    let infoType = document.createElement('h3');
    infoType.textContent = info.type;
    infoType.className = 'info-type';

    let infoDesc = document.createElement('span');
    infoDesc.textContent = info.desc;
    infoDesc.className = 'info-desc';

    let infoCategory = document.createElement('h2');
    infoCategory.textContent = info.category;
    infoCategory.className = 'info-category';

    let gradient = document.createElement('div');
    gradient.className = 'info-gradient';
    gradient.style.height = box.style.height;
    gradient.style.width = box.style.width;
    gradient.classList.add("fade-in");

    let boxLink = box.style.backgroundImage;
    let linkString = boxLink.split('"');

    let fullImageLink = document.createElement('div');
    fullImageLink.innerHTML = `<a href=${linkString[1]} target="_blank"><img src="./img/full_size.png" width="30" height="30"></a>`;
    fullImageLink.className = 'full-image-link';
    fullImageLink.classList.add("fade-in");

    box.appendChild(gradient);
    box.appendChild(infoCont);
    box.appendChild(fullImageLink);


    infoCont.appendChild(year);
    infoCont.appendChild(infoCategory);
    infoCont.appendChild(infoType);
    infoCont.appendChild(infoDesc);
  }
}

function hideInfo(box) {
  box.classList.remove("image-increase");
  box.classList.add("image-decrease");
  
  let infoCont = box.querySelector('.info-cont');
  let gradient = box.querySelector('.info-gradient');
  let fullImageLink = box.querySelector('.full-image-link')

  if (infoCont !== null) {
    infoCont.remove();
  }

  if (gradient !== null) {
    gradient.remove();
  }

  if (fullImageLink !== null) {
    fullImageLink.remove();
  }
}

function createInfo(year, type, desc, category) {
  return {
    year,
    type,
    desc,
    category
  }
}

function createGalleryPiece(info, box, classType) {
  if(box.className != 'gallery-title'){
    box.addEventListener('mouseover', (event) => {showInfo(box, info)});
    box.addEventListener('mouseleave', (event) => {hideInfo(box)});
    box.addEventListener('click', (event) => {clickShowInfo(box, info)});
  }
  return {
    box,
    info
  }
}

function createGallery(gallery){
    for(let i = 0; i < gallery.length; i++){
        let row = gallery[i];
        addRow(row.height, row.galleryPieces);
    }
}