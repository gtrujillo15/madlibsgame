var noun = document.getElementById("noun");
var nounTwo = document.getElementById("nounTwo");
var nounThree = document.getElementById("nounThree");
var noun = document.getElementById("noun");
var verb = document.getElementById("verb");
var adjective = document.getElementById("adjective");


var btn = document.getElementById("button");
var madLibStory = document.getElementById("madLibStory");

btn.addEventListener('click', function(story) {
    madlib = "";
    madlib += "Once upon a time, there was a " + noun.value;
    madlib += " searching for " + nounTwo.value + ". ";
    madlib += "Until one day, the " + nounThree.value;
    madlib += " nation attacked. The " + noun.value;
    madlib += " decided that they needed to learn how to " + verb.value;
    madlib += " to beat the " + nounThree.value + ". ";
    madlib += "So they studied " + adjective.value;
    madlib += " and learned and learned until they became incredibly powerful. After a year of developing their skills, " + noun.value;
    madlib += " advanced on the " + nounThree.value;
    madlib += " nation and won! The end!"
    madLibStory.innerHTML = madlib;

    // Creating Button and Appending to MadLibs div
    newline = document.createElement("br");
    newline = document.createElement("br");
    document.getElementById("madLibStory").appendChild(newline);
});