document.addEventListener('DOMContentLoaded', () => {
    // create main navigation buttons
    document.querySelector("#navInit").appendChild(initNav);
	createButtonOnNav('Works', initNav, () => {
		console.log('going to main page');
		window.location = './newpage.html';
	}, 'whiteText');
	createButtonOnNav('Resume', initNav,() => {
		console.log('going to main page');
		window.location = './newpage.html';
	}, 'whiteText');
	createButtonOnNav('About', initNav, () => {
		console.log('going to main page');
		window.location = './about.html';
	}, 'whiteText');
});