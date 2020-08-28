document.addEventListener('DOMContentLoaded', () => {
    // create main navigation buttons
	addInitNav(initNav, Pages.WORKS);
	// create sub navigation buttons
    addInitSubNav(initSubNav, Pages.COMMISSIONS);
    
    // create works
    const Gallery = [
        {
            height: '370px',
            galleryPieces: [
                createGalleryPiece(createInfo('2020', 'PaintTool Sai', 'A headshot commission to draw the character "Genji" from the videogame Overwatch.'), createBox('3100px', '3100px', './img/reynard.png')),
                createGalleryPiece('', createGalleryTitle('', '300px', 'Commissions')),
                createGalleryPiece(createInfo('2020', 'PaintTool Sai', "A headshot commission to draw the commissioner's original character."), createBox('2500px', '2500px', './img/honey.png'))
            ]
        },
        {
            height: '652px',
            galleryPieces: [
                createGalleryPiece(createInfo('2019', 'PaintTool Sai', 'A fullbody commission to draw the character "Samus" from the videogame series Metroid.'), createBox('2510px', '3044px', './img/samus.png')),
                createGalleryPiece(createInfo('2019', 'PaintTool Sai', "A halfbody commission to draw the commissioner's original character."), createBox('2197px', '1932px', './img/mo_q2.png'))
            ]
        },
        {
            height: '428px',
            galleryPieces: [
                createGalleryPiece(createInfo('2019', 'PaintTool Sai', 'A headshot commission to draw a self portrait of the commissioner.'), createBox('2799px', '2463px', './img/menmacos.png')),
                createGalleryPiece(createInfo('2020', 'PaintTool Sai', 'A headshot commission to draw the character "Lucio" from the videogame Overwatch.'), createBox('3100px', '3100px', './img/talbot.png')),
                createGalleryPiece(createInfo('2020', 'PaintTool Sai', 'A fullbody commission to draw a self portrait of the commissioner.'), createBox('2381px', '2875px', './img/heyitseriksm.png'))
            ]
        },
        {
            height: '639px',
            galleryPieces: [
                createGalleryPiece(createInfo('2020', 'PaintTool Sai', 'A headshot commission to draw the character "Six" from the videogame Little Nightmares.'), createBox('3100px', '3100px', './img/cinnamon.png')),
                createGalleryPiece(createInfo('2020', 'PaintTool Sai', 'A headshot commission to draw the character "Draco Centauros" from the videogame series Puyo Puyo.'), createBox('3100px', '3100px', './img/sekestynayner.png'))
            ]
        },
    ] 
    createGallery(Gallery);
});