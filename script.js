
// TODO: Create a key listener
// TODO: Connect key press to play a beat
// TODO: Create a database of beats
// TODO: Set the colors programatically

window.onload = () => {
    setColors();
}
 
let beats = {
    "a":  "./assets/pianor-chord-331.mp3",

    "s": "./assets/piano-chord-209.mp3",
    "d": "./assets/piano-chord-208.mp3",
    "f": "./assets/drum-sticks-hit.mp3",
    "g": "./assets/drum-snare-roll.mp3",
    "h": "./assets/prel-musical.mp3",
    "j": "./assets/cybal-suspended.mp3",
    "k": "./assets/musical-compos.mp3",
    "l": "./assets/musical-orches.mp3"
    
}

// #FF00FF
const setColors = () => {
    const element = document.getElementById('f');
    element.style.borderColor = "#FF00FF";

}


const playBeat = (buttonKey) => {
        let audioSrc = beats[buttonKey];
        let audio = new Audio(audioSrc);
        audio.currentTime = 0;
        audio.play();
}



document.addEventListener('keydown', (event)=>
{
    playBeat(event.key);
})

