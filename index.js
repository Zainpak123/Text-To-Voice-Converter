let speech = new SpeechSynthesisUtterance();

let button = document.querySelector("button");

let voices = [];
let voicelist = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voicelist.options[i] = new Option(voice.name, i)));
}

voicelist.addEventListener("change", () =>{
    speech.voice = voices[voicelist.value];
});

button.addEventListener("click", function(){
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});