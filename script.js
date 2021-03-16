function speakhome() {
    var msg = new SpeechSynthesisUtterance();
    msg.lang = 'en';
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[10]; 
    msg.volume = 1; // From 0 to 1
    msg.rate = 1; // From 0.1 to 10
    msg.pitch = 2; // From 0 to 2
    msg.text = "A plant-based diet is a diet primarily focused on consumption of plants such as nuts, seeds, grains, beans etc. A Plant based diet does not automatically mean vegan or vegetarian. Plant-Based diets will most likely include meat, but may have them consumed once or twice week instead of regularly. The consumption of meat is dependant on the consumer.";
    window.speechSynthesis.speak(msg);
}

function speaknitrogencycle() {
    var msg = new SpeechSynthesisUtterance();
    msg.lang = 'en';
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[10]; 
    msg.volume = 1; // From 0 to 1
    msg.rate = 1; // From 0.1 to 10
    msg.pitch = 2; // From 0 to 2
    msg.text = "The nitrogen cycle is the cycle of which nitrogen is converted into different and multiple chemicals as it circulates in the atmosphere. The process doesn’t end and loops back for whichever happens. Now, for the explanation of the process for the nitrogen cycle and the processes. Let us start with the animal, living our life until we die. Luckily, we don’t go to waste and we are decomposed and then turned into ammonium (NH4). How exciting, we then proceed to nitrification and we become nitrites (NO2), then nitrates (NO3). There are two paths we go from here; one is that we go into plants which can die and decompose or get eaten by an animal and have the process start again. The second path is more interesting, we become atmospheric nitrogen (N2). From the atmosphere we go back into the soil and can either live with the legume roots or we can go back into ammonification and start all again.";
    window.speechSynthesis.speak(msg);
}

function speakcarboncycle() {
    var msg = new SpeechSynthesisUtterance();
    msg.lang = 'en';
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[10]; 
    msg.volume = 1; // From 0 to 1
    msg.rate = 1; // From 0.1 to 10
    msg.pitch = 2; // From 0 to 2
    msg.text = "";
    window.speechSynthesis.speak(msg);
}