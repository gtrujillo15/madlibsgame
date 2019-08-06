var container = document.getElementsByClassName("container-fluid");
// Section for adding a noun
// Text field for the noun
var nounText = document.createElement("textarea");
nounText.innerHTML = "";
document.body.appendChild(nounText);

// Text field for the button
var btn = document.createElement("Button");
btn.innerHTML = "Enter";
document.body.appendChild(btn);

// Upon clicking in noun, save noun
btn.addEventListener('click', function(event) {
    event.preventDefault();
    var nounChoice = nounText.value;
    localStorage.setItem('noun', nounChoice);
})

var nounEnd = localStorage.getItem('noun');
var madLib = "I wanted to laugh but then I saw " + nounEnd;
document.body.container.appendChild(madLib);