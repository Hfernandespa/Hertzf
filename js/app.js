// js/ui.js - Responsável por toda a renderização e atualização da UI

// --- RENDERIZAÇÃO DE LISTAS ---
function renderFrequencyList(frequencies) {
    const container = document.getElementById('frequencyListContainer');
    container.innerHTML = '';

    if (frequencies.length === 0) {
        container.innerHTML = '<p class="text-gray-400 text-center">Nenhuma frequência encontrada.</p>';
        return;
    }

    frequencies.forEach(freq => {
        const card = document.createElement('div');
        card.className = 'frequency-card bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-600 transition';
        card.dataset.frequency = freq.hz;
        
        card.innerHTML = `
            <div class="flex justify-between items-center">
                <div>
                    <h4 class="font-bold text-lg">${freq.hz} Hz</h4>
                    <p class="text-sm text-gray-300">${freq.name}</p>
                    <span class="category-badge bg-blue-600 text-xs">${freq.category}</span>
                </div>
                <div class="flex gap-2">
                    <button class="play-freq-btn bg-green-600 hover:bg-green-700 p-2 rounded-full" data-freq="${freq.hz}" data-wave="${freq.wave}">
                        <i class="fas fa-play"></i>
                    </button>
                    <button class="favorite-btn bg-yellow-600 hover:bg-yellow-700 p-2 rounded-full" data-freq="${freq.hz}">
                        <i class="far fa-star"></i>
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
    attachFrequencyListeners();
}

function renderProtocolList() {
    const container = document.getElementById('protocolListContainer');
    container.innerHTML = '';
    Object.keys(window.protocolos).forEach(protocolName => {
        const protocol = window.protocolos[protocolName];
        const item = document.createElement('div');
        item.className = 'flex justify-between items-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition cursor-pointer';
        item.innerHTML = `
            <div>
                <h4 class="font-semibold">${protocolName}</h4>
                <p class="text-xs text-gray-400">${protocol.steps.length} passos</p>
            </div>
            <button class="start-protocol-btn bg-purple-600 hover:bg-purple-700 p-2 rounded-full" data-protocol="${protocolName}">
                <i class="fas fa-play"></i>
            </button>
        `;
        container.appendChild(item);
    });
    attachProtocolListeners();
}

function renderTop10() {
    const container = document.getElementById('top10List');
    const top10 = getTop10Frequencies();
    container.innerHTML = '';
    if (top10.length === 0) {
        container.innerHTML = '<p class="text-gray-400 text-sm">Nenhuma frequência usada ainda.</p>';
        return;
    }
    top10.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'flex justify-between items-center p-2 bg-gray-700 rounded';
        div.innerHTML = `
            <span class="font-bold text-yellow-400">#${index + 1}</span>
            <span>${item.hz} Hz</span>
            <span class="text-sm text-gray-400">${item.count}x</span>
        `;
        container.appendChild(div);
    });
}

// --- ATUALIZAÇÃO DE INFORMAÇÕES ---
function updateCurrentFrequencyInfo(hz) {
    const freq = parseFloat(hz);
    const data = window.frequenciasDB[freq];

    if (data) {
        document.getElementById('currentInfo').innerHTML = `
            <div class="text-xl font-bold text-blue-400">${data.hz} Hz</div>
            <div class="text-lg font-medium">${data.name}</div>
        `;
        document.getElementById('currentDetails').innerHTML = `
            <div><strong>Categoria:</strong> <span class="category-badge bg-blue-600">${data.category}</span></div>
            <div><strong>Descrição:</strong> ${data.description}</div>
        `;
        document.getElementById('waveRecommendation').innerHTML = `
            <div class="flex items-center gap-2">
                <i class="fas fa-lightbulb text-yellow-500"></i>
                <span><strong>Onda recomendada:</strong> ${data.wave === 'sine' ? 'Senoidal' : 'Quadrada'} - ${data.benefits}</span>
            </div>
        `;
    } else {
        document.getElementById('currentInfo').innerHTML = `<div class="text-xl font-bold text-blue-400">${freq} Hz</div>`;
        document.getElementById('currentDetails').innerHTML = `<div><strong>Descrição:</strong> Frequência personalizada.</div>`;
        document.getElementById('waveRecommendation').innerHTML = '';
    }
}

function updateHistory(hz) {
    let history = JSON.parse(localStorage.getItem('frequencyHistory') || '[]');
    history.unshift({ hz, timestamp: new Date().toISOString() });
    history = history.slice(0, 10); // Mantém apenas os 10 últimos
    localStorage.setItem('frequencyHistory', JSON.stringify(history));
    renderHistoryList();
}

function renderHistoryList() {
    const historyList = document.getElementById('historyList');
    const history = JSON.parse(localStorage.getItem('frequencyHistory') || '[]');
    historyList.innerHTML = '';
    if (history.length === 0) {
        historyList.innerHTML = '<p class="text-gray-500 text-sm">Nenhum histórico.</p>';
        return;
    }
    history.forEach(item => {
        const div = document.createElement('div');
        div.className = 'flex justify-between items-center p-2 bg-gray-700 rounded text-sm';
        div.innerHTML = `<span>${item.hz} Hz</span>`;
        div.addEventListener('click', () => {
            document.getElementById('frequency').value = item.hz;
            updateCurrentFrequencyInfo(item.hz);
        });
        historyList.appendChild(div);
    });
}

// --- FAVORITOS ---
function addToFavorites(hz) {
    let favorites = JSON.parse(localStorage.getItem('favoriteFrequencies') || '[]');
    if (!favorites.includes(hz)) {
        favorites.push(hz);
        localStorage.setItem('favoriteFrequencies', JSON.stringify(favorites));
        alert(`${hz} Hz adicionado aos favoritos!`);
    } else {
        alert(`${hz} Hz já está nos favoritos.`);
    }
}

function loadFavorites() {
    // Esta função pode ser expandida para mostrar os favoritos na UI
    // Por enquanto, apenas garante que o botão de favorito funcione
}

// --- BUSCA E FILTROS ---
function filterAndRenderFrequencies() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
    let filteredFrequencies = Object.values(window.frequenciasDB);

    if (activeCategory !== 'all') {
        filteredFrequencies = filteredFrequencies.filter(freq => freq.category === activeCategory);
    }
    if (searchTerm) {
        filteredFrequencies = filteredFrequencies.filter(freq => 
            freq.name.toLowerCase().includes(searchTerm) || 
            freq.hz.toString().includes(searchTerm)
        );
    }
    renderFrequencyList(filteredFrequencies);
}

// --- TOP 10 ---
function incrementFrequencyUse(hz) {
    let usage = JSON.parse(localStorage.getItem('frequencyUsage') || '{}');
    usage[hz] = (usage[hz] || 0) + 1;
    localStorage.setItem('frequencyUsage', JSON.stringify(usage));
    renderTop10();
}

function getTop10Frequencies() {
    const usage = JSON.parse(localStorage.getItem('frequencyUsage') || '{}');
    const sorted = Object.entries(usage).sort(([,a], [,b]) => b - a).slice(0, 10);
    return sorted.map(([hz, count]) => ({ hz: parseFloat(hz), count }));
}

// --- LISTENERS DINÂMICOS ---
function attachFrequencyListeners() {
    document.querySelectorAll('.play-freq-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const freq = parseFloat(btn.dataset.freq);
            const wave = btn.dataset.wave;
            window.AudioModule.playSound(freq, wave);
            window.VisualizerModule.drawWave(freq, wave);
            updateHistory(freq);
            incrementFrequencyUse(freq);
            updateCurrentFrequencyInfo(freq);
            document.getElementById('playBtn').classList.add('hidden');
            document.getElementById('stopBtn').classList.remove('hidden');
        };
    });
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            addToFavorites(parseFloat(btn.dataset.freq));
        };
    });
}

function attachProtocolListeners() {
    document.querySelectorAll('.start-protocol-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const protocolName = btn.dataset.protocol;
            window.ProtocolsModule.startProtocol(protocolName);
            document.getElementById('playBtn').classList.add('hidden');
            document.getElementById('stopBtn').classList.remove('hidden');
        };
    });
}

// Expõe as funções publicamente
window.UIModule = {
    renderFrequencyList, renderProtocolList, renderTop10,
    updateCurrentFrequencyInfo, updateHistory, renderHistoryList,
    addToFavorites, loadFavorites, filterAndRenderFrequencies,
    incrementFrequencyUse
};
