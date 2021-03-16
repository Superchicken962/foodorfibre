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
    msg.text = "The carbon cycle is a biogeochemical cycle where carbon is traded among the earth’s different spheres; the atmosphere, the hydrosphere, biosphere, pedosphere, and the geosphere. the atmosphere is the layer that contains gasses, or air, if you will. These gasses are kept in place by earth’s gravity. The hydrosphere is the total water amount that is on the earth, including underground water and not just lakes and rivers. The biosphere pretty much represents and is the sum of all the ecosystems on the earth. It can also be known as the ecosphere. Pedosphere is simple, the most outer layer of the earth, composed of soils. Finally, we get to geosphere. The geosphere defines as the rocks, minerals, landforms of the surface and in the crust of the earth. Time to look at the carbon cycle. Now, we will start in the animal. Again. The animal will respire, releasing carbon. The animal will also release carbon after dying and decomposing. When respiring, the carbon is released into the atmosphere, where it becomes carbon dioxide (CO2). The carbon released from the decomposed animal also gets released into the atmosphere and becomes carbon dioxide (CO2). The decomposed animal will also compound into inorganic carbon which becomes organic carbon, which feeds into the plants. The cycle repeats now, the animal will either eat parts of the plant, or will breathe in oxygen produced by the plant.";
    window.speechSynthesis.speak(msg);
}

function speakextension() {
    var msg = new SpeechSynthesisUtterance();
    msg.lang = 'en';
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[10]; 
    msg.volume = 1; // From 0 to 1
    msg.rate = 1; // From 0.1 to 10
    msg.pitch = 2; // From 0 to 2
    msg.text = "A plant-based diet for the human population could be possible. There are some people who are already on full plant-based diets, which is fine but them forcing this upon other people may influence the public in the other direction and to them not taking on a semi plant diet. We do not have to rule out meat altogether, meat consumption just needs to be controlled and limited. A start to this could be advertising how the cycles work and educating the population. Easing into this will take a fair while but in the end, emissions will be reduced.";
    window.speechSynthesis.speak(msg);
}