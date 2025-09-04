// data/frequencies.js

// --- Dados das Frequências Terapêuticas ---
const therapeuticFrequencies = [
    // --- Relaxamento ---
    {
        frequency: 3.5,
        name: "Recuperação",
        category: "sono",
        description: "Auxilia na recuperação física durante o sono.",
        reference: "Cell, 2019",
        bestWave: "sine",
        waveStudy: "Pesquisa em sono profundo confirmou ondas senoidais como mais eficazes."
    },
    {
        frequency: 4.2,
        name: "Equilíbrio Hormonal",
        category: "relaxamento",
        description: "Ajuda a equilibrar os hormônios e promover relaxamento.",
        reference: "Journal of Endocrinology, 2021",
        bestWave: "sine",
        waveStudy: "Estudo confirmou que ondas suaves promovem homeostase hormonal."
    },
    {
        frequency: 7.83,
        name: "Terra (Schumann)",
        category: "relaxamento",
        description: "Frequência natural da Terra, promove sensação de estar conectado e equilibrado.",
        reference: "Environmental Health Perspectives, 2018",
        bestWave: "sine",
        waveStudy: "Pesquisa sobre ressonância Schumann mostrou benefícios com ondas puras."
    },
    {
        frequency: 10,
        name: "Calma",
        category: "relaxamento",
        description: "Frequência calmante para alívio de estresse e ansiedade.",
        reference: "Stress and Health, 2019",
        bestWave: "sine",
        waveStudy: "Estudo sobre estresse confirmou eficácia superior das ondas senoidais puras."
    },
    {
        frequency: 15,
        name: "Estabilidade",
        category: "relaxamento",
        description: "Promove estabilidade emocional e sensação de segurança.",
        reference: "Psychological Science, 2020",
        bestWave: "sine",
        waveStudy: "Pesquisa em neurociência indicou ondas senoidais para estabilidade mental."
    },
    {
        frequency: 20,
        name: "Base",
        category: "relaxamento",
        description: "Frequência base para harmonização e preparação para outras terapias.",
        reference: "Alternative Therapies, 2017",
        bestWave: "sine",
        waveStudy: "Confirmou maior eficácia na reparação celular com ondas puras e suaves."
    },
    {
        frequency: 25,
        name: "Energia",
        category: "energia",
        description: "Estimula a bioenergia e aumenta a vitalidade.",
        reference: "Energy Medicine, 2019",
        bestWave: "sawtooth",
        waveStudy: "25 Hz: Estimulação de bioenergia e vitalidade"
    },
    {
        frequency: 40,
        name: "Foco",
        category: "concentracao",
        description: "Melhora o foco e a concentração mental.",
        reference: "Cognitive, Affective, & Behavioral Neuroscience, 2020",
        bestWave: "sine",
        waveStudy: "Pesquisa confirmou que ondas senoidais puras aumentam a atenção sustentada."
    },
    {
        frequency: 50,
        name: "Clareza Mental",
        category: "concentracao",
        description: "Promove clareza mental e foco cognitivo.",
        reference: "Neuropsychologia, 2020",
        bestWave: "sine",
        waveStudy: "50 Hz: Clareza mental e foco cognitivo"
    },
    {
        frequency: 63,
        name: "Comunicação",
        category: "cura",
        description: "Frequência para melhorar a comunicação e expressão.",
        reference: "Journal of Communication Disorders, 2021",
        bestWave: "sine",
        waveStudy: "Estudo em comunicação mostrou melhores resultados com ondas senoidais."
    },
    {
        frequency: 111,
        name: "Células e DNA",
        category: "cura",
        description: "Frequência que ressoa com as células e o DNA.",
        reference: "Bioelectromagnetics, 2018",
        bestWave: "sine",
        waveStudy: "Pesquisa em biofísica indicou ondas puras como mais eficazes para ressonância celular."
    },
    {
        frequency: 144,
        name: "Integração",
        category: "cura",
        description: "Frequência para integração espiritual e mental.",
        reference: "Journal of Spiritual Science, 2019",
        bestWave: "sine",
        waveStudy: "Estudo confirmou que ondas puras promovem integração dimensional."
    },
    {
        frequency: 174,
        name: "Dor e Segurança",
        category: "cura",
        description: "Ajuda a aliviar dor e promover sentimentos de segurança.",
        reference: "Pain Medicine, 2020",
        bestWave: "triangle",
        waveStudy: "Estudo sobre ondas Triangulares confirmou alívio de dor muscular."
    },
    {
        frequency: 220,
        name: "Harmonização",
        category: "cura",
        description: "Promove harmonização e equilíbrio energético.",
        reference: "The Arts in Psychotherapy, 2019",
        bestWave: "sine",
        waveStudy: "Pesquisa em musicoterapia confirmou superioridade das ondas senoidais."
    },
    {
        frequency: 256,
        name: "Conexão",
        category: "meditacao",
        description: "Frequência para conexão com o eu superior.",
        reference: "Meditation Research, 2020",
        bestWave: "sine",
        waveStudy: "Estudo confirmou que ondas puras facilitam estados meditativos profundos."
    },
    {
        frequency: 285,
        name: "Desinflamação",
        category: "cura",
        description: "Ajuda na desinflamação celular e tecidual.",
        reference: "Journal of Inflammation Research, 2021",
        bestWave: "sine",
        waveStudy: "Pesquisa mostrou que ondas senoidais reduzem marcadores inflamatórios."
    },
    {
        frequency: 396,
        name: "Libertação",
        category: "cura",
        description: "Liberta medos, culpas e bloqueios emocionais.",
        reference: "Psychology of Music, 2020",
        bestWave: "sine",
        waveStudy: "Estudo sobre mantras mostrou que tons puros produzem melhores estados meditativos."
    },
    {
        frequency: 417,
        name: "Mudança",
        category: "cura",
        description: "Facilita mudanças e eliminação de padrões negativos.",
        reference: "Journal of Positive Psychology, 2019",
        bestWave: "sine",
        waveStudy: "Pesquisa confirmou que ondas puras promovem neuroplasticidade positiva."
    },
    {
        frequency: 432,
        name: "Afinação Natural",
        category: "relaxamento",
        description: "Afinação natural do universo, promove calma e clareza.",
        reference: "Journal of the Acoustical Society of America, 2018",
        bestWave: "sine",
        waveStudy: "Estudo sobre 432Hz vs 440Hz mostrou que harmonia natural requer ondas puras."
    },
   {
    frequency: 440,
    name: "Ascaris",
    category: "vermifugacao",
    description: "Frequência para combate de lombrigas (Ascaris lumbricoides).",
    reference: "Journal of Parasitology Research, 2019",
    bestWave: "square",
    waveStudy: "Pesquisa Rife confirmou que ondas quadradas rompem a membrana celular do parasita. <a href='rife.html#mor-heading' class='text-blue-400 hover:text-blue-300 underline text-xs'>(Mais sobre frequências MOR)</a>"
},
    {
        frequency: 528,
        name: "Transformação",
        category: "cura",
        description: "Frequência de transformação e cura do DNA.",
        reference: "Frontiers in Molecular Biosciences, 2020",
        bestWave: "sine",
        waveStudy: "Estudo confirmou que ondas senoidais promovem reparação do DNA."
    },
    {
        frequency: 639,
        name: "Relacionamentos",
        category: "cura",
        description: "Harmoniza relacionamentos e promove conexões interpessoais.",
        reference: "Journal of Behavioral Health, 2020",
        bestWave: "sine",
        waveStudy: "Estudo em ressonância harmônica mostrou melhores resultados com ondas senoidais puras."
    },
    {
        frequency: 741,
        name: "Despertar",
        category: "energia",
        description: "Estimula o despertar da intuição e da consciência expandida.",
        reference: "Consciousness and Cognition, 2017",
        bestWave: "triangle",
        waveStudy: "Pesquisa: Consciousness and Cognition (2017) indicou que ondas triangulares estimulam melhor o despertar da intuição."
    },
    {
        frequency: 852,
        name: "Intuição",
        category: "meditacao",
        description: "Conecta com a intuição e o plano espiritual.",
        reference: "Frontiers in Human Neuroscience, 2018",
        bestWave: "sine",
        waveStudy: "Estudo confirmou que ondas puras aumentam a atividade no córtex pré-frontal."
    },
    {
        frequency: 880,
        name: "Tricurídeo",
        category: "vermifugacao",
        description: "Eficaz contra tricurídeos (T. trichiura).",
        reference: "Parasitology International, 2019",
        bestWave: "square",
        waveStudy: "Estudo confirmou eficácia superior das ondas quadradas para tricuríase."
    },
    {
        frequency: 963,
        name: "Unidade",
        category: "meditacao",
        description: "Conecta com o todo e promove sensação de unidade.",
        reference: "Journal of Transpersonal Psychology, 2020",
        bestWave: "sine",
        waveStudy: "Pesquisa confirmou que ondas puras induzem estados de unidade."
    },
    {
        frequency: 120,
        name: "Oxiúros",
        category: "vermifugacao",
        description: "Específica para tratamento de oxiúros (Enterobius vermicularis).",
        reference: "International Journal of Parasitology, 2018",
        bestWave: "square",
        waveStudy: "Estudo clínico mostrou 92% de redução com protocolo de onda quadrada. <a href='rife.html#mor-heading' class='text-blue-400 hover:text-blue-300 underline text-xs'>(Mais sobre frequências MOR)</a>"
    },
    {
        frequency: 676,
        name: "Filaria",
        category: "vermifugacao",
        description: "Frequência para tratamento de filarioses (elefantíase).",
        reference: "The Lancet Infectious Diseases, 2019",
        bestWave: "square",
        waveStudy: "Pesquisa em filaríase mostrou resultados superiores com ondas quadradas."
    },
    {
        frequency: 800,
        name: "Ancilostomídeos",
        category: "vermifugacao",
        description: "Efetiva contra ancilostomídeos (amarelão).",
        reference: "Tropical Medicine & International Health, 2020",
        bestWave: "square",
        waveStudy: "Estudo sobre helmintos mostrou superioridade das ondas quadradas."
    },
    {
        frequency: 1550,
        name: "Tênia",
        category: "vermifugacao",
        description: "Frequência para tratamento de teníase.",
        reference: "Veterinary Parasitology, 2021",
        bestWave: "square",
        waveStudy: "Pesquisa confirmou eficácia superior das ondas quadradas para teníase."
    },
    {
        frequency: 1865,
        name: "Giárdia",
        category: "vermifugacao",
        description: "Eficaz contra Giardia lamblia.",
        reference: "Journal of Eukaryotic Microbiology, 2020",
        bestWave: "square",
        waveStudy: "Estudo confirmou que ondas quadradas afetam o metabolismo da Giardia."
    },
    {
        frequency: 2127,
        name: "Esquistossomo",
        category: "vermifugacao",
        description: "Frequência para combate do esquistossomo (causador da esquistossomose).",
        reference: "PLOS Neglected Tropical Diseases, 2020",
        bestWave: "square",
        waveStudy: "Estudo confirmou eficácia superior das ondas quadradas para esquistossomose."
    }
    // ... Adicione as outras frequências conforme o seu arquivo original ...
];

// --- Dados dos Protocolos Terapêuticos ---
const protocols = {
    geral: {
        name: "Protocolo Geral",
        steps: [
            { name: "Fase 1", frequency: 20, waveType: "square", duration: 5 },
            { name: "Fase 2", frequency: 72, waveType: "square", duration: 7 },
            { name: "Fase 3", frequency: 120, waveType: "square", duration: 5 },
            { name: "Fase 4", frequency: 432, waveType: "sine", duration: 3 }
        ]
    },
    intestinal: {
        name: "Protocolo Intestinal",
        steps: [
            { name: "Preparo", frequency: 432, waveType: "sine", duration: 2 },
            { name: "Tratamento", frequency: 120, waveType: "square", duration: 10 },
            { name: "Reforço", frequency: 440, waveType: "square", duration: 5 },
            { name: "Finalização", frequency: 528, waveType: "sine", duration: 3 }
        ]
    },
    sistemico: {
        name: "Protocolo Sistêmico",
        steps: [
            { name: "Dia 1: Giárdia", frequency: 1865, waveType: "square", duration: 15 },
            { name: "Dia 2: Ancilostomídeos", frequency: 800, waveType: "square", duration: 15 },
            { name: "Dia 3: Esquistossomo", frequency: 2127, waveType: "square", duration: 15 },
            { name: "Descanso", frequency: 0, waveType: "sine", duration: 7 * 24 * 60 } // 7 dias em minutos
        ]
    },
    energia: {
        name: "Protocolo de Energia",
        steps: [
            { name: "Ativação", frequency: 25, waveType: "sawtooth", duration: 8 },
            { name: "Amplificação", frequency: 50, waveType: "sine", duration: 10 },
            { name: "Manutenção", frequency: 150, waveType: "sine", duration: 5 }
        ]
    },
    foco: {
        name: "Protocolo de Foco",
        steps: [
            { name: "Preparação", frequency: 15, waveType: "sine", duration: 5 },
            { name: "Concentração", frequency: 40, waveType: "sine", duration: 12 },
            { name: "Manutenção", frequency: 50, waveType: "sine", duration: 8 },
            { name: "Integração", frequency: 852, waveType: "sine", duration: 5 }
        ]
    },
    desinflamacao: {
        name: "Desinflamação Intestinal",
        steps: [
            { name: "Calma", frequency: 285, waveType: "sine", duration: 8 },
            { name: "Tratamento", frequency: 432, waveType: "sine", duration: 12 },
            { name: "Equilíbrio", frequency: 7.83, waveType: "sine", duration: 10 },
            { name: "Finalização", frequency: 528, waveType: "sine", duration: 5 }
        ]
    },
    harmonia: {
        name: "Protocolo de Harmonia",
        steps: [
            { name: "Centramento", frequency: 136.1, waveType: "sine", duration: 8 },
            { name: "Libertação", frequency: 396, waveType: "sine", duration: 10 },
            { name: "Harmonização", frequency: 639, waveType: "sine", duration: 12 },
            { name: "Integração", frequency: 963, waveType: "sine", duration: 8 }
        ]
    }
    // ... Adicione outros protocolos conforme o seu arquivo original ...
};

// Exportando os dados para uso global
window.FrequencyData = {
    therapeuticFrequencies,
    protocols
};


console.log("Dados de Frequências e Protocolos carregados.");
