let title = document.querySelector("title");

// this object structure is called an enum
const Pages = {
	ABOUT: 'About',
	INDEX: 'Index',
	WORKS: 'Works'
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
		window.open('' ,'_blank');
	}, navTextClass);
	createButtonOnNav('About', nav, 'main-btn', () => {
		window.location = './about.html';
	}, forPage === Pages.ABOUT ? 'blue-text' : navTextClass);
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