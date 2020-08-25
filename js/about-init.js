document.addEventListener('DOMContentLoaded', () => {
    // create main navigation buttons
    addInitNav(initNav, Pages.ABOUT);
	// create name logo

	createButtonOnNav('ucheoma okonkwo',  initNav, 'main-btn', () => {
		window.location = './index.html';
	}, 'gray-text', 'right');
});