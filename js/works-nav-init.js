document.addEventListener('DOMContentLoaded', () => {
    // create main navigation buttons
	addInitNav(initNav, Pages.WORKS);

	// create name logo
	createButtonOnNav('ucheoma okonkwo', initNav, 'main-btn', () => {
		window.location = './index.html';
	}, 'gray-text', 'right');

	// create sub navigation buttons
	document.querySelector("#sub-nav-init").appendChild(initSubNav);
	createButtonOnNav('Commissions', initSubNav, 'sub-btn', () => {
		//window.location = './works.html';
		// removeOtherGalleries()
		// addGallery(CommissionGallery)

		// could go to other html pages
	});
	createButtonOnNav('School', initSubNav, 'sub-btn', () => {
		//window.location = './works.html';
	});
	createButtonOnNav('Personal', initSubNav, 'sub-btn', () => {
		//window.location = './works.html';
	});
	createButtonOnNav('Exercises', initSubNav, 'sub-btn', () => {
		//window.location = './works.html';
	});
	createButtonOnNav('All', initSubNav, 'sub-btn', () => {
		//window.location = './works.html';
	});
});