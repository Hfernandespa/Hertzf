// js/audio.js
let audioContext, oscillator, gainNode;
let isPlaying = false;
let currentFrequency = 40;
let currentWaveType = 'sine';

function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playSound(frequency, waveType = 'sine') {
    if (isPlaying) stopSound();
    
    initAudio();
    currentFrequency = frequency;
    currentWaveType = waveType;

    oscillator = audioContext.createOscillator();
    gainNode = audioContext.createGain();

    oscillator.type = waveType;
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    
    const volumeSlider = document.getElementById('volume');
    gainNode.gain.setValueAtTime(volumeSlider.value / 100, audioContext.currentTime);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.start();
    isPlaying = true;
}

function stopSound() {
    if (oscillator) {
        oscillator.stop();
        oscillator.disconnect();
        oscillator = null;
    }
    if (gainNode) {
        gainNode.disconnect();
        gainNode = null;
    }
    isPlaying = false;
}

function setVolume(value) {
    if (gainNode) {
        gainNode.gain.setValueAtTime(value / 100, audioContext.currentTime);
    }
}

function setWaveType(type) {
    currentWaveType = type;
    if (oscillator) {
        oscillator.type = type;
    }
}

// Expõe as funções para outros módulos
window.AudioModule = {
    playSound,
    stopSound,
    setVolume,
    setWaveType,
    isPlaying: () => isPlaying,
    getCurrentFrequency: () => currentFrequency
};
