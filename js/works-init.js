document.addEventListener('DOMContentLoaded', () => {
    // create main navigation buttons
    document.querySelector("#navInit").appendChild(mainNav);
	createButtonOnNav('Works', mainNav, () => {
		console.log('going to main page');
		window.location = './newpage.html';
	});
	createButtonOnNav('Resume', mainNav,() => {
		console.log('going to main page');
		window.location = './newpage.html';
	});
	createButtonOnNav('About', mainNav, () => {
		console.log('going to main page');
		window.location = './about.html';
	});

	document.querySelector("#navInit").appendChild(mainNav);
	createButtonOnNav('ucheoma okonkwo',  mainNav, () => {
		console.log('going to main page');
		window.location = './index.html';
	}, 'grayText', 'right');

	// document.querySelector("#subNavInit").appendChild(mainNav);
	// createButtonOnNav('Commissions', mainNav, () => {
	// 	console.log('going to main page');
	// 	window.location = './newpage.html';
	// });
	// createButtonOnNav('School', mainNav,() => {
	// 	console.log('going to main page');
	// 	window.location = './newpage.html';
	// });
	// createButtonOnNav('Personal', mainNav, () => {
	// 	console.log('going to main page');
	// 	window.location = './about.html';
	// });

});