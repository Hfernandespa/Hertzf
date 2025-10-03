// js/visualizer.js
let canvas, canvasCtx;
let animationId;

function initVisualizer() {
    canvas = document.getElementById('waveCanvas');
    canvasCtx = canvas.getContext('2d');
}

function drawWave(frequency, waveType) {
    if (!canvasCtx) return;

    const width = canvas.width;
    const height = canvas.height;
    const amplitude = height / 3;
    const speed = 0.02;
    let offset = 0;

    function animate() {
        canvasCtx.clearRect(0, 0, width, height);
        canvasCtx.strokeStyle = '#3b82f6';
        canvasCtx.lineWidth = 2;
        canvasCtx.beginPath();

        for (let x = 0; x < width; x++) {
            let y;
            const t = (x / width) * 4 * Math.PI + offset;
            
            switch (waveType) {
                case 'sine':
                    y = height / 2 + amplitude * Math.sin(t);
                    break;
                case 'square':
                    y = height / 2 + amplitude * (Math.sin(t) > 0 ? 1 : -1);
                    break;
                case 'sawtooth':
                    y = height / 2 + amplitude * (2 * (t / (2 * Math.PI) - Math.floor(t / (2 * Math.PI) + 0.5)));
                    break;
                case 'triangle':
                    y = height / 2 + amplitude * (2 * Math.asin(Math.sin(t)) / Math.PI);
                    break;
            }
            
            if (x === 0) {
                canvasCtx.moveTo(x, y);
            } else {
                canvasCtx.lineTo(x, y);
            }
        }
        
        canvasCtx.stroke();
        offset += speed * (frequency / 100);
        animationId = requestAnimationFrame(animate);
    }
    
    animate();
}

function stopVisualizer() {
    if (animationId) {
        cancelAnimationFrame(animationId);
        if(canvasCtx) canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

// Expõe as funções
window.VisualizerModule = {
    initVisualizer,
    drawWave,
    stopVisualizer
};
