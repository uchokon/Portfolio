document.addEventListener('DOMContentLoaded', () => {
	// create main navigation buttons
	addInitNav(initNav, Pages.WORKS);
	// create sub navigation buttons
	addInitSubNav(initSubNav, Pages.WORKS);
	
    // create works
	const Gallery = [
		{
            height: '405px',
            galleryPieces: [
                createGalleryPiece(createInfo('2018', 'PaintTool Sai', 'A digital painting using the face of a model as practice.', 'Personal Project'), createBox('2472px', '2262px', './img/painting_practice.png')),
                createGalleryPiece(createInfo('2020', 'Adobe Illustrator', 'Udemy promt given to create a box design for an unnamed home goods subscription service.', 'Exercise'), createBox('1667px', '1400px', './img/boxes.png')),
                createGalleryPiece('', createGalleryTitle('225px', '300px', 'Select Works'))
            ]
		},
		{
            height: '445px',
            galleryPieces: [
                createGalleryPiece(createInfo('2020', 'JavaScript', 'An assignment given to use the JavaScript Library "p5.js" to combine the techniques used in class for a final project of our choosing.', 'School Project', 'https://openprocessing.org/sketch/1032005'), createBox('600px', '321px', './img/op_final.gif')),
                createGalleryPiece(createInfo('2021', 'PaintTool Sai', 'A digital drawing based on a personal initiative to redesign the video game character "Bomberman."', 'Personal Project'), createBox('3100px', '3100px', './img/Bomberman_Redesign.png'))
                //createGalleryPiece(createInfo('2018', 'Adobe Illustrator', 'An assignment given to create a character animation using a maximum of 13 frames in adobe illustrator.', 'School Project'), createBox('1024px', '768px', './img/doppio.gif')),
                //createGalleryPiece(createInfo('2020', 'PaintTool SAI', 'A headshot commission to draw the character "Draco Centauros" from the videogame series Puyo Puyo.', 'Commission'), createBox('3100px', '3100px', './img/sekestynayner.png'))
                
            ]
	    },
        {
            height: '490px',
            galleryPieces: [
                //createGalleryPiece(createInfo('2020', 'PaintTool Sai', 'A digital drawing of an original character.', 'Personal Project'), createBox('2786px', '3370px', './img/bao_bao.png')),
                createGalleryPiece(createInfo('2019', 'PaintTool SAI', 'A fullbody commission to draw the character "Samus" from the videogame series Metroid.', 'Commission'), createBox('2510px', '3044px', './img/samus.png')),
                //createGalleryPiece(createInfo('2020', 'Pen And Marker', 'An assignment to use typography (and only typography) to evoke an image of the given word "agile."', 'School Project'), createBox('2261px', '2199px', './img/agile_octopus.jpg'))
                createGalleryPiece(createInfo('2020', 'Acrylic Paint', 'An assignment given to paint a monochromatic still life featuring shoes.', 'School Project'), createBox('2555px', '3399px', './img/shoes.jpg')),
                createGalleryPiece(createInfo('2020', 'JavaScript', 'An assignment given to use the JavaScript Library "p5.js" to create a progessing, moving visual.', 'School Project', 'https://openprocessing.org/sketch/989322'), createBox('600px', '598px', './img/op_lily.gif'))
            ]
	    },
        {
            height: '428px',
            galleryPieces: [
                //createGalleryPiece(createInfo('2020', 'PaintTool SAI', 'A fullbody commission to draw a self portrait of the commissioner.', 'Commission'), createBox('2381px', '2875px', './img/heyitseriksm.png')),
                createGalleryPiece(createInfo('2019', 'Charcoal', 'An assignment given to replicate a still life using charcoal and erasors.', 'School Project'), createBox('3115px', '2493px', './img/charcoal_objects.jpg')),
                //createGalleryPiece(createInfo('2019', 'Acrylic Painting', 'An assignment to create an illussion by painting a large object in a small room.', 'School Project'), createBox('2742px', '2608px', './img/tree_painting.jpg'))
                createGalleryPiece(createInfo('2020', 'Pen and Marker', 'An assignment given to use typography (and only typography) to evoke an image of the given word "agile."', 'School Project'), createBox('3465px', '1990px', './img/cheetah.jpg')),
            ]
	    }
	] 
	
	createGallery(Gallery);
});