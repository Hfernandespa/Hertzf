// js/app.js (dentro do event listener DOMContentLoaded)

// ... outros listeners ...

// Listeners para os controles do protocolo
document.getElementById('nextStepBtn').addEventListener('click', () => {
    window.ProtocolsModule.nextStep();
});

document.getElementById('prevStepBtn').addEventListener('click', () => {
    window.ProtocolsModule.prevStep();
});

document.getElementById('exitProtocolBtn').addEventListener('click', () => {
    window.ProtocolsModule.exitProtocol();
});

// Listener para os cards de protocolo (precisa ser adicionado quando os cards são criados)
// Isso provavelmente estará dentro da função que renderiza o banco de dados
// Exemplo:
document.querySelectorAll('.protocol-card').forEach(card => {
    card.addEventListener('click', (e) => {
        const protocolName = e.currentTarget.dataset.protocolName;
        window.ProtocolsModule.startProtocol(protocolName);
    });
});
