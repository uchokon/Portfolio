document.addEventListener('DOMContentLoaded', () => {
    // create main navigation buttons
	addInitNav(initNav, Pages.WORKS);
	// create sub navigation buttons
    addInitSubNav(initSubNav, Pages.COMMISSIONS);
    
    // create works
    createGallery(Commissions);
});