let title = document.querySelector("title");

// this object structure is called an enum
const Pages = {
	ABOUT: 'About',
	INDEX: 'Index',
	WORKS: 'Works',
	COMMISSIONS: 'Commissions',
	SCHOOL: 'School',
	PERSONAL: 'Personal',
	EXERCISES: 'Exercises',
	ALL: 'All'
}

function getNavTextClass(forPage) {
	if (forPage == Pages.INDEX) {
		return 'white-text';
	} else {
		return undefined;
	}
}

function addInitNav(nav, forPage){
	let navTextClass = getNavTextClass(forPage);

	document.querySelector("#nav-init").appendChild(nav);

	createButtonOnNav('Works', nav, 'main-btn', () => {
		window.location = './works.html';
	}, forPage == Pages.WORKS ? 'blue-text' : navTextClass);
	createButtonOnNav('Resume', nav, 'main-btn', () => {
		window.open('./Ucheoma Okonkwo Resume 2021.pdf' ,'_blank');
	}, navTextClass);
	createButtonOnNav('About', nav, 'main-btn', () => {
		window.location = './about.html';
	}, forPage === Pages.ABOUT ? 'blue-text' : navTextClass);

	if (forPage != Pages.INDEX) {
		createButtonOnNav('ucheoma okonkwo', nav, 'main-btn', () => {
			window.location = './index.html';
		}, 'gray-text', 'right');
	}
}

function addInitSubNav(subNav, forPage){
	let navTextClass = getNavTextClass(forPage);

	document.querySelector("#sub-nav-init").appendChild(subNav);

	createButtonOnNav('Commissions', subNav, 'sub-btn', () => {
		window.location = './commissions.html';
	}, forPage == Pages.COMMISSIONS ? 'blue-text' : navTextClass);

	createButtonOnNav('Schoolwork', subNav, 'sub-btn', () => {
		window.location = './school.html';
	}, forPage == Pages.SCHOOL ? 'blue-text' : navTextClass);

	createButtonOnNav('Exercises', subNav, 'sub-btn', () => {
		window.location = './exercises.html';
	}, forPage == Pages.EXERCISES ? 'blue-text' : navTextClass);

	createButtonOnNav('Personal', subNav, 'sub-btn', () => {
		window.location = './personal.html';
	}, forPage == Pages.PERSONAL ? 'blue-text' : navTextClass);

	createButtonOnNav('All', subNav, 'sub-btn', () => {
		window.location = './all.html';
	}, forPage == Pages.ALL ? 'blue-text' : navTextClass);
}

function createNavDiv(navClass) {
	let navDiv = document.createElement("div");
	navDiv.className = navClass;
	return navDiv
}
  
function createButtonOnNav(label, navDiv, classlist, onClick = () => {}, color, float){
	let navButton = document.createElement("div");
	navButton.textContent = label;
	navButton.className = 'btn';
	navButton.classList.add(classlist);
	navButton.classList.add(color);
	navButton.style.float = float;
	navButton.addEventListener("click", onClick);
	navDiv.appendChild(navButton);
}

const initNav = createNavDiv('nav');
const initSubNav = createNavDiv('sub-nav');