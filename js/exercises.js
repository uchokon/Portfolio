document.addEventListener('DOMContentLoaded', () => {
	// create main navigation buttons
	addInitNav(initNav, Pages.WORKS);
	// create sub navigation buttons
	addInitSubNav(initSubNav, Pages.EXERCISES);
	
    // create works
	const Gallery = [
        {
            height: '420px',
            galleryPieces: [
                createGalleryPiece(createInfo('2020', 'Adobe Illustrator', "Udemy prompt given to create a mascot and logo for a (fake) childrens' dentist office in New York."), createBox('1615px', '1660px', './img/Smile_For_Miles.png')),
                createGalleryPiece('', createGalleryTitle('', '200px', 'Exercises')),
                createGalleryPiece(createInfo('2020', 'Adobe Illustrator', 'Udemy prompt given to create a fun sticker for a nearby bank.'), createBox('1618px', '1590px', './img/bank_sticker.png'))
            ]
	    },
        {
            height: '546px',
            galleryPieces: [
                createGalleryPiece(createInfo('2020', 'Photoshop', 'Udemy prompt given to create 3 (fake) covers for the magazine "Lethridge Living" using a consistent color pallete.'), createBox('5700px', '2400px', './img/magazine_covers.png'))
            ]
	    },
        {
            height: '623px',
            galleryPieces: [
                
                createGalleryPiece(createInfo('2020', 'Photoshop', 'Udemy prompt given to create a coffee bag design for a (fake) coffee brand.'), createBox('3036px', '5418px', './img/coffee_bag.png')),
                createGalleryPiece(createInfo('2020', 'Adobe Ilustrator', 'Udemy prompt given to create christmas themed mugs.'), createBox('1448px', '967px', './img/coffee_mugs.png'))
            ]
	    },
        {
            height: '658px',
            galleryPieces: [
                createGalleryPiece(createInfo('2020', 'Adobe Illustrator', 'Udemy promt given to create a box design for an unnamed home goods subscription service.'), createBox('1667px', '1400px', './img/boxes.png')),
                createGalleryPiece(createInfo('2020', 'Adobe Illustrator', 'Udemy prompt to create an Evite design for a cancer research event featuring three local artists.'), createBox('1262px', '1674px', './img/Evite.png'))
            ]
        },
        {
            height: '1000px',
            galleryPieces: [
                createGalleryPiece(createInfo('2020', 'Photoshop', 'Udemy prompt to create an 1/4 page newspaper ad for a (fake) spa therapist.'), createBox('5400px', '7200px', './img/newspaper_ad.png')),
                createGalleryPiece(createInfo('2020', 'Adobe  Illustrator', 'Udemy prompt given to create an icon set for an unnamed company.'), createBox('753px', '1433px', './img/icons.png'))
            ]
	    }
	] 
	
	createGallery(Gallery);
});