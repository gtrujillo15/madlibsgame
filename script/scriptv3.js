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
    madlib += "Once upon a time, there was a " + noun.value + " searching for " + nounTwo.value + ". Until one day, the " + nounThree.value + " nation attacked. The " + noun.value + " decided that they needed to learn how to " + verb.value + " to beat the " + nounThree.value + ". So they studied " + adjective.value + " and learned and learned until they became incredibly powerful. After a year of developing their skills, " + noun.value + " advanced on the " + nounThree.value + " nation and won! The end!";
    madLibStory.innerHTML = madlib;

    // Creating Button and Appending to MadLibs div
    newline = document.createElement("br");
    newline = document.createElement("br");
    document.getElementById("madLibStory").appendChild(newline);
});