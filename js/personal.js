document.addEventListener('DOMContentLoaded', () => {
	// create main navigation buttons
	addInitNav(initNav, Pages.WORKS);
	// create sub navigation buttons
	addInitSubNav(initSubNav, Pages.PERSONAL);
	
    // create works
	const Gallery = [
        {
            height: '240px',
            galleryPieces: [
                createGalleryPiece(createInfo('2017', 'Flipnote Studio', 'A short, looping animation.'), createBox('256px', '192px', './img/flipnote.gif')),
                createGalleryPiece(createInfo('2019', 'PaintTool Sai', 'A pixel art animation of an original character.'), createBox('111px', '114px', './img/fibi.gif')),
                createGalleryPiece(createInfo('2017', 'Flipnote Studio', 'A short, looping animation.'), createBox('256px', '192px', './img/cat.gif')),
                createGalleryPiece('', createGalleryTitle('', '200px', 'Personal'))
            ]
	    },
        {
            height: '500px',
            galleryPieces: [
                createGalleryPiece(createInfo('2018', 'PaintTool Sai', 'A digital painting using the face of a model as practice.'), createBox('2472px', '2262px', './img/painting_practice.png')),
                createGalleryPiece(createInfo('2019', 'Microsoft Word + PaintTool Sai', "A flyer placed in an event program book for my family's company."), createBox('2550px', '3300px', './img/owm.jpg')),
                createGalleryPiece(createInfo('2019', 'PaintTool Sai', 'A digital drawing of an original character.'), createBox('1780px', '2613px', './img/Jiao Jiao.png'))
            ]
	    },
        {
            height: '455px',
            galleryPieces: [
                createGalleryPiece(createInfo('2019', 'PaintTool Sai', 'A stticker design featuring characters from the videogame series Klonoa.'), createBox('4000px', '5100px', './img/klonoa_sticker.png')),
                createGalleryPiece(createInfo('2020', 'PaintTool Sai', 'A digital drawing of an original character.'), createBox('2786px', '3370px', './img/bao_bao.png')),
                createGalleryPiece(createInfo('2016', 'PaintTool Sai', 'A short character animation.'), createBox('1200px', '1034px', './img/alien.gif'))
            ]
	    }
	] 
	
	createGallery(Gallery);
});