document.addEventListener('DOMContentLoaded', () => {
    // create main navigation buttons
	addInitNav(initNav, Pages.WORKS);
	// create sub navigation buttons
    addInitSubNav(initSubNav, Pages.ALL);
    
    // create works
    createGallery(Commissions);   
    createGallery(School);   
    createGallery(Personal);   
    createGallery(Exercises);   
});