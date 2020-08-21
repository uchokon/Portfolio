let title = document.querySelector("title");

function createNav() {
	let navDiv = document.createElement("div");
	navDiv.className = 'nav';
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

let initNav = createNav();