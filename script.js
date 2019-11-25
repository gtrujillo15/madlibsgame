
// Creating Text Box and Appending to MadLibs div
var textBox = document.createElement("textarea");
textBox.innerHTML = "";
textBox.placeholder = "Enter a noun";
document.getElementById("madlibs").appendChild(textBox);



// Creating Button and Appending to MadLibs div
var btn = document.createElement("Button");
btn.innerHTML = "Enter";
newline = document.createElement("br");
document.getElementById("madlibs").appendChild(newline);
document.getElementById("madlibs").appendChild(btn);



// Upon clicking in noun, save noun
btn.addEventListener('click', function(event) {
    event.preventDefault();
    // Setting item in local storage
    var wordChoice = textBox.value;
    localStorage.setItem('noun', wordChoice);
    // Grab item from local stoarage and placing into sentence
    var wordEnd = localStorage.getItem('noun');
    var container = document.createElement('p');

    // Create madlib sentence and attach word to end
    container.innerHTML = "I wanted to laugh but then I saw " + wordEnd;

    // Append to madlibs section in HTML
    document.getElementById("madlibs").appendChild(container);
})

