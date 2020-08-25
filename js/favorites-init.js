document.addEventListener('DOMContentLoaded', () => {
    	// create works
	const Gallery = [
		{
            height: '400px',
            galleryPieces: [
                createGalleryPiece(createInfo('2016', 'Malodea', 'A graphic design'), createBox('300px', '500px')),
                createGalleryPiece(createInfo('2016', 'Malodea', 'A graphic design'), createBox('300px', '500px')),
                createGalleryPiece(createInfo('2016', 'Malodea', 'A graphic design'), createBox('300px', '500px'))
                // createBox('500px', '300px'),
                // createBox('200px', '200px')
            ]
        },
        {
            height: '400px',
            galleryPieces: [
                createGalleryPiece(createInfo('2016', 'Malodea', 'A graphic design'), createBox('300px', '500px')),
                createGalleryPiece(createInfo('2016', 'Malodea', 'A graphic design'), createBox('300px', '500px')),
                createGalleryPiece(createInfo('2016', 'Malodea', 'A graphic design'), createBox('300px', '500px'))
                // createBox('500px', '300px'),
                // createBox('200px', '200px')
            ]
	    }
	//   {
	// 	rowHeight: '500px',
	// 	boxes: [
	// 	    createBox('100px', '100px'),
	// 	    createBox('100px', '100px'),
	// 	    createBox('50px', '100px')
	// 	]
	//   },
	//   {
	// 	rowHeight: '300px',
	// 	boxes: [
	// 	    createBox('225px', '200px'),
	// 	    createBox('225px', '200px'),
	// 	    createBox('200px', '100px')
	// 	]
	//   }
	] 
	
	createGallery(Gallery);
});