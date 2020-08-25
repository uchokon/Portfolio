function createBox(width, height, info){
    let box = document.createElement('div');
    box.style.width = width;
    box.style.height = height;
    box.className = 'box';
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
    let infoCont = document.createElement('div');
    infoCont.className = 'info-cont';
    infoCont.style.width = box.style.width;
    infoCont.style.height = box.style.height;

    let year = document.createElement('h2');
    year.textContent = info.year;
    year.className = 'info-year';
   
    let infoType = document.createElement('h1');
    infoType.textContent = info.type;
    infoType.className = 'info-type';

    let infoDesc = document.createElement('span');
    infoDesc.textContent = info.desc;
    infoDesc.className = 'info-desc';

    let gradient = document.createElement('div');
    gradient.className = 'info-gradient';
    gradient.style.height = box.style.height;
    gradient.style.width = box.style.width;

    infoCont.appendChild(year);
    infoCont.appendChild(infoType);
    infoCont.appendChild(infoDesc);

    box.appendChild(gradient);
    box.appendChild(infoCont);
  }
}

function hideInfo(box) {
  let infoCont = box.querySelector('.info-cont');
  let gradient = box.querySelector('.info-gradient');

  if (infoCont !== null) {
    infoCont.remove();
  }

  if (gradient !== null) {
    gradient.remove();
  }
}

function createInfo(year, type, desc) {
  return {
    year,
    type,
    desc
  }
}

function createGalleryPiece(info, box) {
  box.addEventListener('mouseover', (event) => {showInfo(box, info)});
  box.addEventListener('mouseleave', (event) => {hideInfo(box)});
  box.addEventListener('click', (event) => {clickShowInfo(box, info)});

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