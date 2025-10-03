// js/app.js
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa módulos
    VisualizerModule.initVisualizer();

    // --- Renderização Inicial ---
    // Renderiza as listas principais na tela
    UIModule.renderFrequencyList(Object.values(window.frequenciasDB));
    UIModule.renderProtocolList();
    UIModule.renderTop10();

    // --- Listeners de Busca e Filtro ---
    document.getElementById('searchInput').addEventListener('input', UIModule.filterAndRenderFrequencies);

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove a classe 'active' de todos os botões
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            // Adiciona a classe 'active' no botão clicado
            e.target.classList.add('active');
            // Filtra e renderiza novamente
            UIModule.filterAndRenderFrequencies();
        });
    });

    // --- Listeners do Gerador (seção menor) ---
    const playBtn = document.getElementById('playBtn');
    const stopBtn = document.getElementById('stopBtn');
    // ... (resto dos listeners do gerador, volume, etc.)

    playBtn.addEventListener('click', () => {
        const freq = parseFloat(document.getElementById('frequency').value);
        if (freq) {
            const waveType = document.querySelector('.wave-type-btn.bg-blue-600').dataset.wave;
            window.AudioModule.playSound(freq, waveType);
            window.VisualizerModule.drawWave(freq, waveType);
            incrementFrequencyUse(freq); // Também conta aqui
        }
    });

    stopBtn.addEventListener('click', () => {
        window.AudioModule.stopSound();
        window.VisualizerModule.stopVisualizer();
    });

    // ... outros listeners ...
});
