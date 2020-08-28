document.addEventListener('DOMContentLoaded', () => {
	// create main navigation buttons
	addInitNav(initNav, Pages.WORKS);
	// create sub navigation buttons
	addInitSubNav(initSubNav, Pages.WORKS);
	
    // create works
	const Gallery = [
		{
            height: '410px',
            galleryPieces: [
                createGalleryPiece(createInfo('2020', 'PaintTool SAI', 'A headshot commission to draw the character "Draco Centauros" from the videogame series Puyo Puyo.'), createBox('3100px', '3100px', './img/sekestynayner.png')),
                createGalleryPiece(createInfo('2020', 'Pen And Marker', 'An assignment to use typography (and only typography) to evoke an image of the given word "agile."'), createBox('2261px', '2199px', './img/agile_octopus.jpg')),
                createGalleryPiece('', createGalleryTitle('', '410px', 'Favorites'))
            ]
		},
		{
            height: '506px',
            galleryPieces: [
				createGalleryPiece(createInfo('2018', 'Adobe Illustrator', 'An assignment given to create a character animation using a maximum of 13 frames in adobe illustrator.'), createBox('1024px', '768px', './img/doppio.gif')),
                createGalleryPiece(createInfo('2020', 'Adobe Illustrator', 'Udemy promt given to create a box design for an unnamed home goods subscription service.'), createBox('1667px', '1400px', './img/boxes.png'))
            ]
	    },
        {
            height: '458px',
            galleryPieces: [
                createGalleryPiece(createInfo('2020', 'PaintTool Sai', 'A digital drawing of an original character.'), createBox('2786px', '3370px', './img/bao_bao.png')),
                createGalleryPiece(createInfo('2019', 'PaintTool SAI', 'A fullbody commission to draw the character "Samus" from the videogame series Metroid.'), createBox('2510px', '3044px', './img/samus.png')),
                createGalleryPiece(createInfo('2018', 'PaintTool Sai', 'A digital painting using the face of a model as practice.'), createBox('2472px', '2262px', './img/painting_practice.png'))
            ]
	    },
        {
            height: '403px',
            galleryPieces: [
                createGalleryPiece(createInfo('2020', 'PaintTool SAI', 'A fullbody commission to draw a self portrait of the commissioner.'), createBox('2381px', '2875px', './img/heyitseriksm.png')),
                createGalleryPiece(createInfo('2019', 'Charcoal', 'An assignment given to replicate a still life using charcoal and erasors.'), createBox('3115px', '2493px', './img/charcoal_objects.jpg')),
                createGalleryPiece(createInfo('2019', 'Acrylic Painting', 'An assignment to create an illussion by painting a large object in a small room.'), createBox('2742px', '2608px', './img/tree_painting.jpg'))
            ]
	    }
	] 
	
	createGallery(Gallery);
});