// js/app.js

// --- Variáveis Globais ---
let audioContext = null;
let oscillator = null;
let gainNode = null;
let analyser = null;
let isPlaying = false;
let selectedFrequency = null;
let selectedWaveType = 'sine';
let timerInterval = null;
let timerSeconds = 0;
let favorites = JSON.parse(localStorage.getItem('frequencyFavorites')) || [];
let history = JSON.parse(localStorage.getItem('frequencyHistory')) || [];
let showOnlyFavorites = false;
let currentProtocol = null;
let currentProtocolStep = 0;
let protocolTimerInterval = null;

// --- Elementos DOM ---
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');
const frequencyInput = document.getElementById('frequency');
const volumeSlider = document.getElementById('volume');
const volumeValue = document.getElementById('volumeValue');
const canvas = document.getElementById('waveCanvas');
const canvasCtx = canvas.getContext('2d');
const waveTypeBtns = document.querySelectorAll('.wave-type-btn');
const frequenciesGrid = document.getElementById('frequenciesGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const currentInfo = document.getElementById('currentInfo');
const currentDetails = document.getElementById('currentDetails');
const waveRecommendation = document.getElementById('waveRecommendation');
const timerBtn = document.getElementById('timerBtn');
const timerContainer = document.getElementById('timerContainer');
const timerDisplay = document.getElementById('timerDisplay');
const timerProgress = document.getElementById('timerProgress');
const historyList = document.getElementById('historyList');
const favoriteBtn = document.getElementById('favoriteBtn');
const showFavoritesBtn = document.getElementById('showFavoritesBtn');
const resultCount = document.getElementById('resultCount');
const protocolControls = document.getElementById('protocolControls');
const protocolName = document.getElementById('protocolName');
const protocolProgressText = document.getElementById('protocolProgressText');
const protocolProgressBar = document.getElementById('protocolProgressBar');
const stepIndicators = document.getElementById('stepIndicators');
const prevStepBtn = document.getElementById('prevStepBtn');
const nextStepBtn = document.getElementById('nextStepBtn');
const currentStepName = document.getElementById('currentStepName');
const exitProtocolBtn = document.getElementById('exitProtocolBtn');

// --- Funções de Utilidade (poderiam estar em utils.js) ---

function getCategoryColor(category) {
    const colors = {
        'relaxamento': 'blue',
        'meditacao': 'purple',
        'cura': 'green',
        'sono': 'indigo',
        'energia': 'yellow',
        'vermifugacao': 'red',
        'concentracao': 'orange'
    };
    return colors[category] || 'gray';
}

function getCategoryName(category) {
    const names = {
        'relaxamento': 'Relaxamento',
        'meditacao': 'Meditação',
        'cura': 'Cura',
        'sono': 'Sono',
        'energia': 'Energia',
        'vermifugacao': 'Vermifugação',
        'concentracao': 'Concentração'
    };
    return names[category] || category;
}

// --- Funções de Áudio ---

function startSound() {
    if (isPlaying) return;

    const frequency = parseFloat(frequencyInput.value) || 440;
    selectedFrequency = frequency;

    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    oscillator = audioContext.createOscillator();
    gainNode = audioContext.createGain();
    analyser = audioContext.createAnalyser();

    oscillator.type = selectedWaveType;
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    gainNode.gain.setValueAtTime(volumeSlider.value / 100, audioContext.currentTime);

    oscillator.connect(gainNode);
    gainNode.connect(analyser);
    analyser.connect(audioContext.destination);

    oscillator.start();
    isPlaying = true;

    playBtn.classList.add('hidden');
    stopBtn.classList.remove('hidden');
    visualize();

    showCurrentFrequencyInfo(frequency);
    addToHistory(frequency);
}

function stopSound() {
    if (!isPlaying) return;

    if (oscillator) {
        oscillator.stop();
        oscillator.disconnect();
        oscillator = null;
    }
    if (gainNode) {
        gainNode.disconnect();
        gainNode = null;
    }
    if (analyser) {
        analyser.disconnect();
        analyser = null;
    }

    isPlaying = false;
    playBtn.classList.remove('hidden');
    stopBtn.classList.add('hidden');
    clearCanvas();

    // Parar timer se estiver ativo
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        timerContainer.classList.add('hidden');
    }
}

function updateFrequency() {
    const frequency = parseFloat(frequencyInput.value);
    if (isPlaying && oscillator && !isNaN(frequency)) {
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        showCurrentFrequencyInfo(frequency);
    }
}

function updateVolume() {
    const volume = volumeSlider.value;
    volumeValue.textContent = volume;
    if (isPlaying && gainNode) {
        gainNode.gain.setValueAtTime(volume / 100, audioContext.currentTime);
    }
}

function visualize() {
    if (!analyser || !isPlaying) return;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    analyser.getByteTimeDomainData(dataArray);

    canvasCtx.fillStyle = 'rgb(15, 23, 42)';
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = 'rgb(59, 130, 246)';
    canvasCtx.beginPath();

    const sliceWidth = canvas.width * 1.0 / bufferLength;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = v * canvas.height / 2;

        if (i === 0) {
            canvasCtx.moveTo(x, y);
        } else {
            canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
    }

    canvasCtx.lineTo(canvas.width, canvas.height / 2);
    canvasCtx.stroke();

    requestAnimationFrame(visualize);
}

function clearCanvas() {
    canvasCtx.fillStyle = 'rgb(15, 23, 42)';
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
}

// --- Funções de UI/DOM ---

function showCurrentFrequencyInfo(frequency) {
    const freqData = window.FrequencyData.therapeuticFrequencies.find(f => f.frequency === frequency);
    if (freqData) {
        currentInfo.innerHTML = `
            <div class="text-xl font-bold text-blue-400">${freqData.frequency} Hz</div>
            <div class="text-lg font-medium">${freqData.name}</div>
        `;
        currentDetails.innerHTML = `
            <div><strong>Categoria:</strong> <span class="category-badge bg-${getCategoryColor(freqData.category)}-600">${getCategoryName(freqData.category)}</span></div>
            <div><strong>Descrição:</strong> ${freqData.description}</div>
        `;
        const waveNames = {
            'sine': 'Senoidal',
            'square': 'Quadrada',
            'sawtooth': 'Serra',
            'triangle': 'Triangular'
        };
        waveRecommendation.innerHTML = `
            <div class="flex items-center gap-2">
                <i class="fas fa-lightbulb text-yellow-500"></i>
                <span><strong>Onda recomendada:</strong> ${waveNames[freqData.bestWave]} - ${freqData.waveStudy}</span>
            </div>
        `;
    } else {
        currentInfo.innerHTML = `<div class="text-xl font-bold text-blue-400">${frequency} Hz</div><div class="text-lg font-medium">Frequência Personalizada</div>`;
        currentDetails.innerHTML = `<div class="text-gray-400">Sem informações específicas para esta frequência.</div>`;
        waveRecommendation.innerHTML = '';
    }
}

function loadFrequencies(frequencies) {
    frequenciesGrid.innerHTML = '';
    resultCount.textContent = frequencies.length;

    frequencies.forEach(freq => {
        const isFavorite = favorites.includes(freq.frequency);
        const isSelected = selectedFrequency === freq.frequency;

        const card = document.createElement('div');
        card.className = `frequency-card bg-gray-700 rounded-lg p-4 hover:bg-gray-600 ${isSelected ? 'selected' : ''}`;
        card.innerHTML = `
            <div class="flex justify-between items-start mb-2">
                <h3 class="font-medium text-lg">${freq.name}</h3>
                <div class="flex gap-1">
                    <span class="category-badge bg-${getCategoryColor(freq.category)}-600">${getCategoryName(freq.category)}</span>
                    ${isFavorite ? '<i class="fas fa-star text-yellow-500 text-sm"></i>' : ''}
                </div>
            </div>
            <div class="text-2xl font-bold text-blue-400 mb-2">${freq.frequency} Hz</div>
            <p class="text-sm text-gray-300 mb-2">${freq.description}</p>
            <div class="text-xs text-gray-400">
                <i class="fas fa-wave-square mr-1"></i>
                Onda recomendada: ${freq.bestWave}
            </div>
        `;

        card.addEventListener('click', () => {
            frequencyInput.value = freq.frequency;
            selectedFrequency = freq.frequency;
            if (isPlaying) {
                updateFrequency();
            } else {
                // Opcional: iniciar automaticamente ao clicar?
                // startSound();
            }
            // Atualizar seleção visual
            document.querySelectorAll('.frequency-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            showCurrentFrequencyInfo(freq.frequency);
        });

        frequenciesGrid.appendChild(card);
    });
}

function filterFrequencies() {
    let filtered = window.FrequencyData.therapeuticFrequencies;

    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    if (searchTerm) {
        filtered = filtered.filter(freq =>
            freq.name.toLowerCase().includes(searchTerm) ||
            freq.description.toLowerCase().includes(searchTerm) ||
            freq.category.toLowerCase().includes(searchTerm) ||
            freq.frequency.toString().includes(searchTerm)
        );
    }

    if (category) {
        filtered = filtered.filter(freq => freq.category === category);
    }

    if (showOnlyFavorites) {
        filtered = filtered.filter(freq => favorites.includes(freq.frequency));
    }

    loadFrequencies(filtered);
}

function loadHistory() {
    historyList.innerHTML = '';
    history.slice(0, 10).forEach(freq => {
        const item = document.createElement('div');
        item.className = 'flex justify-between items-center p-2 hover:bg-gray-700 rounded cursor-pointer';
        item.innerHTML = `
            <span>${freq} Hz</span>
            <i class="fas fa-history text-gray-500 text-xs"></i>
        `;
        item.addEventListener('click', () => {
            frequencyInput.value = freq;
            selectedFrequency = freq;
            if (isPlaying) {
                updateFrequency();
            }
        });
        historyList.appendChild(item);
    });
}

function toggleFavorite() {
    const frequency = parseFloat(frequencyInput.value);
    if (isNaN(frequency)) return;

    const index = favorites.indexOf(frequency);
    if (index > -1) {
        favorites.splice(index, 1);
        favoriteBtn.innerHTML = '<i class="far fa-star mr-2"></i>Adicionar aos Favoritos';
        favoriteBtn.classList.remove('bg-yellow-600', 'hover:bg-yellow-700');
        favoriteBtn.classList.add('bg-gray-700', 'hover:bg-gray-600');
    } else {
        favorites.push(frequency);
        favoriteBtn.innerHTML = '<i class="fas fa-star mr-2"></i>Favorito';
        favoriteBtn.classList.remove('bg-gray-700', 'hover:bg-gray-600');
        favoriteBtn.classList.add('bg-yellow-600', 'hover:bg-yellow-700');
    }
    localStorage.setItem('frequencyFavorites', JSON.stringify(favorites));
    filterFrequencies(); // Re-renderiza para atualizar ícones
    loadFrequencies(window.FrequencyData.therapeuticFrequencies.filter(f => showOnlyFavorites ? favorites.includes(f.frequency) : true)); // Atualiza a grade
}

function toggleShowFavorites() {
    showOnlyFavorites = !showOnlyFavorites;
    if (showOnlyFavorites) {
        showFavoritesBtn.classList.remove('bg-yellow-600', 'hover:bg-yellow-700');
        showFavoritesBtn.classList.add('bg-yellow-800', 'hover:bg-yellow-900');
        showFavoritesBtn.innerHTML = '<i class="fas fa-star mr-2"></i>Todos';
    } else {
        showFavoritesBtn.classList.remove('bg-yellow-800', 'hover:bg-yellow-900');
        showFavoritesBtn.classList.add('bg-yellow-600', 'hover:bg-yellow-700');
        showFavoritesBtn.innerHTML = '<i class="fas fa-star mr-2"></i>Favoritos';
    }
    filterFrequencies();
}

// --- Funções de Timer ---

function setTimer() {
    const input = prompt("Defina o timer (em minutos):", "10");
    if (input !== null) {
        const minutes = parseInt(input);
        if (!isNaN(minutes) && minutes > 0) {
            timerSeconds = minutes * 60;
            updateTimerDisplay(timerSeconds);
            timerContainer.classList.remove('hidden');

            if (timerInterval) {
                clearInterval(timerInterval);
            }

            timerInterval = setInterval(() => {
                timerSeconds--;
                updateTimerDisplay(timerSeconds);
                const progress = ((minutes * 60 - timerSeconds) / (minutes * 60)) * 100;
                timerProgress.style.width = `${progress}%`;

                if (timerSeconds <= 0) {
                    clearInterval(timerInterval);
                    timerInterval = null;
                    stopSound();
                    alert("Timer finalizado!");
                }
            }, 1000);
        }
    }
}

function updateTimerDisplay(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const formattedTime =
        String(hours).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0');
    timerDisplay.textContent = formattedTime;
}

// --- Funções de Protocolo ---

function startProtocol(protocolKey) {
    const protocol = window.FrequencyData.protocols[protocolKey];
    if (!protocol) {
        console.error("Protocolo não encontrado:", protocolKey);
        return;
    }

    exitProtocolMode(); // Sair de qualquer protocolo anterior

    currentProtocol = protocol;
    currentProtocolStep = 0;

    // Atualizar UI do Protocolo
    protocolName.textContent = protocol.name;
    protocolControls.classList.remove('hidden');

    // Iniciar o primeiro passo
    executeProtocolStep(currentProtocolStep);
}

function executeProtocolStep(stepIndex) {
    if (!currentProtocol || stepIndex < 0 || stepIndex >= currentProtocol.steps.length) {
        console.warn("Passo de protocolo inválido ou protocolo não iniciado.");
        return;
    }

    const step = currentProtocol.steps[stepIndex];
    currentProtocolStep = stepIndex;

    // Atualizar UI do Protocolo
    protocolProgressText.textContent = `${stepIndex + 1}/${currentProtocol.steps.length}`;
    const progressPercent = ((stepIndex + 1) / currentProtocol.steps.length) * 100;
    protocolProgressBar.style.width = `${progressPercent}%`;

    // Atualizar indicadores de passo
    stepIndicators.innerHTML = '';
    currentProtocol.steps.forEach((s, i) => {
        const indicator = document.createElement('div');
        indicator.className = `px-3 py-1 rounded-full text-xs font-medium ${i === stepIndex ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'}`;
        indicator.textContent = s.name;
        stepIndicators.appendChild(indicator);
    });

    // Atualizar nome do passo atual
    currentStepName.textContent = step.name;

    // Ativar/Desativar botões de navegação
    prevStepBtn.disabled = stepIndex === 0;
    nextStepBtn.disabled = stepIndex === currentProtocol.steps.length - 1;

    // Configurar frequência e tipo de onda
    frequencyInput.value = step.frequency;
    selectedWaveType = step.waveType;
    document.querySelectorAll('.wave-type-btn').forEach(btn => {
        btn.classList.toggle('bg-blue-600', btn.dataset.wave === selectedWaveType);
        btn.classList.toggle('bg-gray-700', btn.dataset.wave !== selectedWaveType);
    });

    // Parar som anterior e iniciar novo
    stopSound();
    if (step.frequency > 0) { // Frequência 0 pode ser usada para pausas
         startSound();
    }

    // Configurar timer para o passo (se duration > 0)
    if (step.duration > 0 && step.frequency > 0) {
        timerSeconds = step.duration * 60; // duration está em minutos
        updateTimerDisplay(timerSeconds);
        timerContainer.classList.remove('hidden');

        if (protocolTimerInterval) {
            clearInterval(protocolTimerInterval);
        }

        protocolTimerInterval = setInterval(() => {
            timerSeconds--;
            updateTimerDisplay(timerSeconds);
            const progress = ((step.duration * 60 - timerSeconds) / (step.duration * 60)) * 100;
            timerProgress.style.width = `${progress}%`;

            if (timerSeconds <= 0) {
                clearInterval(protocolTimerInterval);
                protocolTimerInterval = null;
                // Avançar automaticamente para o próximo passo
                nextProtocolStep();
            }
        }, 1000);
    } else {
        // Se não houver duração ou frequência 0, esconder o timer
        timerContainer.classList.add('hidden');
        if (protocolTimerInterval) {
            clearInterval(protocolTimerInterval);
            protocolTimerInterval = null;
        }
    }
}

function nextProtocolStep() {
    if (currentProtocol && currentProtocolStep < currentProtocol.steps.length - 1) {
        executeProtocolStep(currentProtocolStep + 1);
    } else {
        // Protocolo finalizado
        exitProtocolMode();
        alert(`Protocolo "${currentProtocol.name}" finalizado!`);
    }
}

function prevProtocolStep() {
    if (currentProtocol && currentProtocolStep > 0) {
        // Parar timer atual
        if (protocolTimerInterval) {
            clearInterval(protocolTimerInterval);
            protocolTimerInterval = null;
        }
        executeProtocolStep(currentProtocolStep - 1);
    }
}

function exitProtocolMode() {
    currentProtocol = null;
    currentProtocolStep = 0;
    protocolControls.classList.add('hidden');

    // Parar timer do protocolo
    if (protocolTimerInterval) {
        clearInterval(protocolTimerInterval);
        protocolTimerInterval = null;
    }
    timerContainer.classList.add('hidden');

    // Resetar UI de navegação
    prevStepBtn.disabled = true;
    nextStepBtn.disabled = true;
    currentStepName.textContent = '-';
    protocolProgressText.textContent = '0/0';
    protocolProgressBar.style.width = '0%';
    stepIndicators.innerHTML = '';

    // Parar som
    stopSound();
}

// --- Event Listeners ---

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar
    loadFrequencies(window.FrequencyData.therapeuticFrequencies);
    loadHistory();

    // Event Listeners para controles de áudio
    playBtn.addEventListener('click', startSound);
    stopBtn.addEventListener('click', stopSound);
    frequencyInput.addEventListener('input', updateFrequency);
    volumeSlider.addEventListener('input', updateVolume);

    // Event Listeners para filtros e busca
    searchInput.addEventListener('input', filterFrequencies);
    categoryFilter.addEventListener('change', filterFrequencies);
    showFavoritesBtn.addEventListener('click', toggleShowFavorites);

    // Event Listeners para favoritos e timer
    favoriteBtn.addEventListener('click', toggleFavorite);
    timerBtn.addEventListener('click', setTimer);

    // Event Listeners para seleção de tipo de onda
    waveTypeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            selectedWaveType = btn.dataset.wave;
            waveTypeBtns.forEach(b => {
                b.classList.toggle('bg-blue-600', b.dataset.wave === selectedWaveType);
                b.classList.toggle('bg-gray-700', b.dataset.wave !== selectedWaveType);
            });
            if (isPlaying) {
                stopSound();
                startSound(); // Reiniciar com o novo tipo de onda
            }
        });
    });

    // Event Listeners para controles de protocolo
    nextStepBtn.addEventListener('click', nextProtocolStep);
    prevStepBtn.addEventListener('click', prevProtocolStep);
    exitProtocolBtn.addEventListener('click', exitProtocolMode);

    // Inicializar estado do botão de favorito
    const currentFreq = parseFloat(frequencyInput.value);
    if (!isNaN(currentFreq) && favorites.includes(currentFreq)) {
        favoriteBtn.innerHTML = '<i class="fas fa-star mr-2"></i>Favorito';
        favoriteBtn.classList.remove('bg-gray-700', 'hover:bg-gray-600');
        favoriteBtn.classList.add('bg-yellow-600', 'hover:bg-yellow-700');
    }
});

// --- Funções para Histórico (já incluídas acima) ---
function addToHistory(frequency) {
    // Remove if already exists
    history = history.filter(f => f !== frequency);
    // Add to beginning
    history.unshift(frequency);
    // Keep only last 10
    history = history.slice(0, 10);
    localStorage.setItem('frequencyHistory', JSON.stringify(history));
    loadHistory();
}