document.addEventListener('DOMContentLoaded', () => {
	// create main navigation buttons
	addInitNav(initNav, Pages.WORKS);
	// create sub navigation buttons
	addInitSubNav(initSubNav, Pages.SCHOOL);
	
    // create works
	const Gallery = [
		{
            height: '373px',
            galleryPieces: [
                createGalleryPiece('', createGalleryTitle('', '300px', 'School')),
                createGalleryPiece(createInfo('2018', 'Photoshop', 'An assignment given using photoshop to combine and edit a collage of individual images in order to represent a single idea or purpose.'), createBox('1740px', '1095px', './img/splatoon.jpg')),
                createGalleryPiece(createInfo('2020', 'Pen And Marker', 'An assignment to use typography (and only typography) to evoke an image of the given word "agile."'), createBox('2261px', '2199px', './img/agile_octopus.jpg'))
            ]
		},
		{
            height: '491px',
            galleryPieces: [
				createGalleryPiece(createInfo('2018', 'Adobe Illustrator', 'An assignment given to create a character animation using a maximum of 13 frames in adobe illustrator.'), createBox('1024px', '768px', './img/doppio.gif')),
				createGalleryPiece(createInfo('2019', 'Charcoal and Pastels', 'An assignment that combines an in-person still life with random objects or images using the supplies of our choosing.'), createBox('3159px', '2491px', './img/charcoal_pastel.jpg'))
            ]
	    },
        {
            height: '417px',
            galleryPieces: [
                createGalleryPiece(createInfo('2019', 'Charcoal', 'An assignment given to replicate a still life using charcoal and erasors.'), createBox('3115px', '2493px', './img/charcoal_objects.jpg')),
                createGalleryPiece(createInfo('2017', 'Adobe Illustrator', 'An assignment given to create a graphic centered around and representative of a single letter.'), createBox('2550px', '3300px', './img/illu.jpg')),
                createGalleryPiece(createInfo('2019', 'Acrylic Painting', 'An assignment to create a graphic or pattern using all ROYGBV colors.'), createBox('2485px', '2483px', './img/pattern.jpg'))
            ]
	    },
        {
            height: '435px',
            galleryPieces: [
                createGalleryPiece(createInfo('2020', 'Pen and Marker', 'An assignment to use typography (and only typography) to evoke an image of the given word "agile."'), createBox('3465px', '1990px', './img/cheetah.jpg')),
                createGalleryPiece(createInfo('2019', 'Charcoal', 'An assignment given to create a still life in order to reflect the weight of an object on top of a pillow.'), createBox('2947px', '2457px', './img/pumpkin.jpg'))
            ]
	    },
        {
            height: '515px',
            galleryPieces: [
                createGalleryPiece(createInfo('2019', 'Acrylic Painting', 'An assignment to create an illussion by painting a large object in a small room.'), createBox('2742px', '2608px', './img/tree_painting.jpg')),
                createGalleryPiece(createInfo('2018', 'Adobe Illustrator', "An assignment to create a possible poster for the school's coffee house."), createBox('3300px', '5100px', './img/post.jpg')),
                createGalleryPiece(createInfo('2020', 'Adobe Illustrator', 'An assignment to create a poster that comments on a current, controversial topic.'), createBox('1296px', '1728px', './img/poster.png'))
            ]
	    },
        {
            height: '560px',
            galleryPieces: [
                createGalleryPiece(createInfo('2019', 'Pen and Marker', 'An assignment to create 25 unique graphics and patterns onto a 5x5 grid.'), createBox('2589px', '2592px', './img/grid.jpg')),
                createGalleryPiece(createInfo('2019', 'Charcoal and Pastels', 'An assignment to create a still life incorperating a crumpled piece of paper, drappery, and at least 3 other objects of our choosing using monochromatic colors.'), createBox('3137px', '2448px', './img/blue_charcoal.jpg'))
            ]
	    }
	] 
	
	createGallery(Gallery);
});