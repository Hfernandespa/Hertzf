// js/ui.js

// Função para renderizar a lista de frequências no container principal
function renderFrequencyList(frequencies) {
    const container = document.getElementById('frequencyListContainer');
    container.innerHTML = ''; // Limpa a lista atual

    if (frequencies.length === 0) {
        container.innerHTML = '<p class="text-gray-400 text-center">Nenhuma frequência encontrada.</p>';
        return;
    }

    frequencies.forEach(freq => {
        const card = document.createElement('div');
        card.className = 'frequency-card-db bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-600 transition';
        card.dataset.frequency = freq.hz;
        
        card.innerHTML = `
            <div class="flex justify-between items-center">
                <div>
                    <h4 class="font-bold text-lg">${freq.hz} Hz</h4>
                    <p class="text-sm text-gray-300">${freq.name}</p>
                    <span class="category-badge-db bg-blue-600 text-xs">${freq.category}</span>
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

    // Adiciona os listeners nos botões recém-criados
    attachFrequencyListeners();
}

// Função para renderizar a lista de protocolos
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

    // Adiciona os listeners nos botões de protocolo
    attachProtocolListeners();
}

// Função para renderizar o Top 10
function renderTop10() {
    const container = document.getElementById('top10List');
    // Lógica para buscar do localStorage, ordenar e pegar os 10 primeiros
    const top10 = getTop10Frequencies(); // Função que vamos criar abaixo
    container.innerHTML = '';

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

// Função para lidar com a busca e filtros
function filterAndRenderFrequencies() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
    
    let filteredFrequencies = Object.values(window.frequenciasDB);

    // Filtra por categoria
    if (activeCategory !== 'all') {
        filteredFrequencies = filteredFrequencies.filter(freq => freq.category === activeCategory);
    }

    // Filtra por termo de busca
    if (searchTerm) {
        filteredFrequencies = filteredFrequencies.filter(freq => 
            freq.name.toLowerCase().includes(searchTerm) || 
            freq.hz.toString().includes(searchTerm)
        );
    }

    renderFrequencyList(filteredFrequencies);
}

// Funções auxiliares para adicionar listeners (para evitar duplicação)
function attachFrequencyListeners() {
    document.querySelectorAll('.play-freq-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que o clique no card também seja acionado
            const freq = parseFloat(btn.dataset.freq);
            const wave = btn.dataset.wave;
            window.AudioModule.playSound(freq, wave);
            window.VisualizerModule.drawWave(freq, wave);
            incrementFrequencyUse(freq); // Atualiza o contador para o Top 10
        });
    });
}

function attachProtocolListeners() {
    document.querySelectorAll('.start-protocol-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const protocolName = btn.dataset.protocol;
            window.ProtocolsModule.startProtocol(protocolName);
        });
    });
}

// Lógica para o Top 10 (usando localStorage)
function incrementFrequencyUse(hz) {
    let usage = JSON.parse(localStorage.getItem('frequencyUsage') || '{}');
    usage[hz] = (usage[hz] || 0) + 1;
    localStorage.setItem('frequencyUsage', JSON.stringify(usage));
    renderTop10(); // Atualiza a lista do Top 10
}

function getTop10Frequencies() {
    const usage = JSON.parse(localStorage.getItem('frequencyUsage') || '{}');
    const sorted = Object.entries(usage)
        .sort(([,a], [,b]) => b - a) // Ordena do maior para o menor
        .slice(0, 10); // Pega os 10 primeiros

    return sorted.map(([hz, count]) => ({ hz: parseFloat(hz), count }));
}

// Expõe as funções públicas do módulo de UI
window.UIModule = {
    renderFrequencyList,
    renderProtocolList,
    renderTop10,
    filterAndRenderFrequencies
};
