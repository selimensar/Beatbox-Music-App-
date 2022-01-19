
// TODO: Create a key listener
// TODO: Connect key press to play a beat
// TODO: Create a database of beats
// TODO: Set the colors programatically

window.onload = () => {
    setButtons();
}
 
let beats = {
    "a": {
        beat: "./assets/pianor-chord-331.mp3",
        color: "#00fffe"
    },
    "s": {
        beat: "./assets/piano-chord-209.mp3",
        color: "#00fffe"
    },
    "d": {
        beat: "./assets/piano-chord-208.mp3",
        color: "#00fffe"
    },
    "f": {
        beat:  "./assets/drum-sticks-hit.mp3",
        color: "#ff00ff"
    },
    "g": {
        beat: "./assets/drum-snare-roll.mp3",
        color: "#FF00FF"
    },
    "h": {
        beat: "./assets/prel-musical.mp3",
        color: "#ff00ff"
    },
    "j": {
        beat: "./assets/cybal-suspended.mp3",
        color: "#FF00FF"
    },
    "k": {
        beat: "./assets/musical-compos.mp3",
        color: "#FFFFFF"
    },
    "l": {
        beat: "./assets/musical-orches.mp3",
        color: "#FFFFFF"
    }
    
}

// #FF00FF
const setButtons = () => {
    for(let beatKey in beats) {
    let beat = beats[beatKey];
    const element = document.getElementById(beatKey);
    element.style.borderColor = beat.color;
    element.addEventListener("transitionend", ()=>{
        element.style.backgroundColor = "transparent";
        element.style.boxShadow = "none";
    })
    }   
}

const onButtonPress = (buttonKey) => {
    let element = document.getElementById(buttonKey);
    element.style.backgroundColor = beats[buttonKey].color;
    element.style.boxShadow = `0px 0px 17px 0px ${beats[buttonKey].color}`;
}


const playBeat = (buttonKey) => {
        let audioSrc = beats[buttonKey].beat;
        let audio = new Audio(audioSrc);
        audio.currentTime = 0;
        audio.play();
}



document.addEventListener('keydown', (event)=>
{
    playBeat(event.key);
    onButtonPress(event.key);
})

