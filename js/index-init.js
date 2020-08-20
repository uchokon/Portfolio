document.addEventListener('DOMContentLoaded', () => {
    // create main navigation buttons
    document.querySelector("#navInit").appendChild(homeNav);
	createButtonOnNav('Works', homeNav, () => {
		console.log('going to main page');
		window.location = './newpage.html';
	}, 'whiteText');
	createButtonOnNav('Resume', homeNav,() => {
		console.log('going to main page');
		window.location = './newpage.html';
	}, 'whiteText');
	createButtonOnNav('About', homeNav, () => {
		console.log('going to main page');
		window.location = './newpage.html';
	}, 'whiteText');
});