var user = document.getElementById("name");
var adjective = document.getElementById("adjective");
var noun = document.getElementById("noun");
var btn = document.getElementById("button");
var madLibStory = document.getElementById("madLibStory");

btn.addEventListener('click', function(story) {
    madlib = "";
    madlib += "My name is " + user.value + " and I stay awake " + adjective.value + ". Sometimes " + noun.value + " makes me burp.";
    madLibStory.innerHTML = madlib;

    // Creating Button and Appending to MadLibs div
    newline = document.createElement("br");
    var lastButton = document.createElement("Button");
    lastButton.innerHTML = "<a href='indexv3.html'> Last Level! </a>";
    newline = document.createElement("br");
    document.getElementById("madLibStory").appendChild(newline);
    document.getElementById("madLibStory").appendChild(lastButton);
});
