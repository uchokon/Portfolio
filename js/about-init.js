document.addEventListener('DOMContentLoaded', () => {
    // create main navigation buttons
    document.querySelector("#navInit").appendChild(initNav);
	createButtonOnNav('Works', initNav, () => {
		window.location = './newpage.html';
	});
	createButtonOnNav('Resume', initNav,() => {
		window.open = '', '_blank';
	});
	createButtonOnNav('About', initNav, () => {
		window.location = './about.html';
	}, 'blueText');

	document.querySelector("#navInit").appendChild(initNav);
	createButtonOnNav('ucheoma okonkwo',  initNav, () => {
		window.location = './index.html';
	}, 'grayText', 'right');
});