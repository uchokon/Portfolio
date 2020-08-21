document.addEventListener('DOMContentLoaded', () => {
    // create main navigation buttons
    document.querySelector("#navInit").appendChild(initNav);
	createButtonOnNav('Works', initNav, () => {
		console.log('going to main page');
		window.location = './newpage.html';
	});
	createButtonOnNav('Resume', initNav,() => {
		console.log('going to main page');
		window.location = './newpage.html';
	});
	createButtonOnNav('About', initNav, () => {
		console.log('going to main page');
		window.location = './about.html';
	});

	document.querySelector("#navInit").appendChild(initNav);
	createButtonOnNav('ucheoma okonkwo',  initNav, () => {
		console.log('going to main page');
		window.location = './index.html';
	}, 'grayText', 'right');

	// document.querySelector("#subNavInit").appendChild(initNav);
	// createButtonOnNav('Commissions', initNav, () => {
	// 	console.log('going to main page');
	// 	window.location = './newpage.html';
	// });
	// createButtonOnNav('School', initNav,() => {
	// 	console.log('going to main page');
	// 	window.location = './newpage.html';
	// });
	// createButtonOnNav('Personal', initNav, () => {
	// 	console.log('going to main page');
	// 	window.location = './about.html';
	// });

});