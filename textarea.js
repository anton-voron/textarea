const textarea = document.getElementById("textarea");
const counter = document.getElementById("counter");

textarea.addEventListener('input', countWord)

function countWord () {
	let cont;
	let word = textarea.value.match(/\S+?\s|\S+?$/g);
	count = word ? word.length : 0;
	counter.innerText = count;
	if( count > 200) {
		document.querySelector('.text-indicator').classList.add('red-tex');
		textarea.maxLength = "200";
	} else if(count <= 200){
		document.querySelector('.text-indicator').classList.remove('red-tex');
		textarea.removeAttribute("maxlength");

	}
};


