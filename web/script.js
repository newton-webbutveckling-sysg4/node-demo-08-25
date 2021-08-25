console.log('Hello web browser!');

let button = document.getElementById('my-button')
// Alternativ: document.querySelector('#my-button')

console.log( button.innerText );

button.innerText = 'Kom igen!'

button.addEventListener('click', whenClick)

addCake()
padList()



function whenClick(event) {
	let input = document.querySelector('#visitor-name')
	let name = input.value
	let message = document.querySelector('#message')
	message.innerText = `Välkommen ${name}!`
	// message.innerText = 'Välkommen ' + name + '!'

	let toggle = document.querySelector('.toggle-visibility')
	if( toggle.style.display === 'block' ) {
		toggle.style.display = 'none'
	} else {
		toggle.style.display = 'block'
	}
}

function padList() {
	let items = document.querySelectorAll('.fika > li')
	for( let i=0; i<items.length; i++ ) {
		let item = items[i]
		// item.style = 'padding: 0.5em'
		item.className = 'fika-item'
	}
}

function addCake() {
	let fikaLista = document.querySelector('.fika')
	let newItem = document.createElement('li')
	newItem.innerText = 'tårta'
	fikaLista.appendChild(newItem)
}
