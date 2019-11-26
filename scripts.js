var user = document.getElementById("name");
var adjective = document.getElementById("adjective");
var noun = document.getElementById("noun");
var btn = document.getElementById("button");
var madLibStory = document.getElementById("madLibStory");

btn.addEventListener('click', function(story) {
    madlib = "";
    madlib += "My name is " + user.value;
    madlib += " and I stay awake " + adjective.value + ". ";
    madlib += "Sometimes " + noun.value;
    madlib += " makes me burp."
    madLibStory.innerHTML = madlib;
});
