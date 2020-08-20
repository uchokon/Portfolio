let title = document.querySelector("title");

function createNav(position, animation) {
	let navDiv = document.createElement("div");
	navDiv.className = 'nav';
	navDiv.style.position = position;
	navDiv.style.animation = animation;
	return navDiv
}
  
function createButtonOnNav(label, navDiv, onClick = () => {}, color, float){
	let navButton = document.createElement("div");
	navButton.className = "Btn";
	navButton.textContent = label;
	navButton.classList.add(color);
	navButton.style.float = float;
	navButton.addEventListener("click", onClick);
	navDiv.appendChild(navButton);
}

let homeNav = createNav('absolute', 'moveUpAbsolute ease 1.5s');
let mainNav = createNav('relative', 'moveUpRelative ease 1.5s');