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