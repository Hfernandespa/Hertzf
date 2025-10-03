// js/protocols.js

// Estado interno do módulo de protocolos
let currentProtocol = null;
let currentStepIndex = 0;
let protocolTimer = null;

// Função para iniciar um protocolo
function startProtocol(protocolName) {
    if (!window.protocolos[protocolName]) {
        console.error("Protocolo não encontrado:", protocolName);
        return;
    }

    // Para qualquer som que esteja tocando
    window.AudioModule.stopSound();
    window.VisualizerModule.stopVisualizer();

    currentProtocol = window.protocolos[protocolName];
    currentStepIndex = 0;

    // Mostra os controles do protocolo
    document.getElementById('protocolControls').classList.remove('hidden');
    document.getElementById('protocolName').textContent = protocolName;
    
    updateProtocolUI();
    executeProtocolStep();
}

// Executa o passo atual do protocolo
function executeProtocolStep() {
    if (!currentProtocol) return;

    const step = currentProtocol.steps[currentStepIndex];
    
    // Atualiza a UI com as informações do passo
    document.getElementById('currentStepName').textContent = step.name;
    document.getElementById('frequency').value = step.frequency;
    
    // Toca a frequência do passo
    window.AudioModule.playSound(step.frequency, step.wave);
    window.VisualizerModule.drawWave(step.frequency, step.wave);

    // Limpa o timer anterior, se houver
    if (protocolTimer) {
        clearTimeout(protocolTimer);
    }

    // Define o timer para o próximo passo
    protocolTimer = setTimeout(() => {
        if (currentStepIndex < currentProtocol.steps.length - 1) {
            nextStep();
        } else {
            // Fim do protocolo
            exitProtocol();
            alert('Protocolo concluído!');
        }
    }, step.duration * 1000); // duration está em segundos
}

// Vai para o próximo passo
function nextStep() {
    if (!currentProtocol || currentStepIndex >= currentProtocol.steps.length - 1) return;
    currentStepIndex++;
    updateProtocolUI();
    executeProtocolStep();
}

// Volta para o passo anterior
function prevStep() {
    if (!currentProtocol || currentStepIndex <= 0) return;
    currentStepIndex--;
    updateProtocolUI();
    executeProtocolStep();
}

// Atualiza a interface do protocolo (barras de progresso, indicadores)
function updateProtocolUI() {
    if (!currentProtocol) return;

    const totalSteps = currentProtocol.steps.length;
    const progress = ((currentStepIndex + 1) / totalSteps) * 100;

    document.getElementById('protocolProgressText').textContent = `${currentStepIndex + 1}/${totalSteps}`;
    document.getElementById('protocolProgressBar').style.width = `${progress}%`;

    // Atualiza indicadores de passo
    const stepIndicators = document.getElementById('stepIndicators');
    stepIndicators.innerHTML = '';
    currentProtocol.steps.forEach((step, index) => {
        const indicator = document.createElement('div');
        indicator.className = `w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
            index === currentStepIndex ? 'bg-purple-600' : index < currentStepIndex ? 'bg-green-600' : 'bg-gray-600'
        }`;
        indicator.textContent = index + 1;
        stepIndicators.appendChild(indicator);
    });

    // Habilita/Desabilita botões de navegação
    document.getElementById('prevStepBtn').disabled = currentStepIndex === 0;
    document.getElementById('nextStepBtn').disabled = currentStepIndex === totalSteps - 1;
}

// Sai do modo protocolo
function exitProtocol() {
    if (protocolTimer) {
        clearTimeout(protocolTimer);
        protocolTimer = null;
    }

    window.AudioModule.stopSound();
    window.VisualizerModule.stopVisualizer();

    currentProtocol = null;
    currentStepIndex = 0;

    document.getElementById('protocolControls').classList.add('hidden');
}

// Expõe as funções públicas do módulo
window.ProtocolsModule = {
    startProtocol,
    nextStep,
    prevStep,
    exitProtocol,
    isActive: () => currentProtocol !== null
};
