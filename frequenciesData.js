// frequenciesData.js
const frequenciesData = [
    // Frequências originais
    {
        id: "focus_40",
        name: "Foco e Concentração",
        value: 40,
        category: "concentracao",
        subcategory: "Ondas Gama",
        description: "Frequência para melhorar foco cognitivo e clareza mental.",
        mechanism: "Estimulação de ondas Gama (40Hz) associadas a estados de alta concentração e cognição aprimorada.",
        scientificEvidence: [
            {
                study: "Journal of Neuroscience",
                year: 2019,
                reliability: "high",
                description: "Estudo demonstrando que 40Hz aumenta a sincronia neural em tarefas de atenção."
            }
        ],
        protocols: [
            {
                name: "Protocolo de Foco Básico",
                duration: "12 minutos",
                instructions: "Usar com ondas senoidais em ambiente silencioso."
            }
        ],
        safety: {
            contraindications: ["Epilepsia fotossensível"],
            sideEffects: ["Leve dor de cabeça"]
        },
        statistics: {
            uses: 5420,
            successRate: 82,
            userRating: 4.2
        },
        synergies: ["25Hz", "50Hz"],
        traditionalUse: "Utilizada em práticas meditativas",
        researchStatus: "Bem estabelecido"
    },
    {
        id: "energy_25",
        name: "Energia e Vitalidade",
        value: 25,
        category: "energia",
        subcategory: "Ativação Celular",
        description: "Aumenta os níveis de energia e combate a fadiga crônica.",
        mechanism: "Estimulação da produção de ATP nas mitocôndrias.",
        scientificEvidence: [
            {
                study: "Journal of Alternative and Complementary Medicine",
                year: 2020,
                reliability: "medium",
                description: "Estudo clínico mostrando redução de 40% nos níveis de fadiga."
            }
        ],
        protocols: [
            {
                name: "Protocolo Matinal de Energia",
                duration: "15 minutos",
                instructions: "Usar pela manhã com ondas em dente de serra."
            }
        ],
        safety: {
            contraindications: ["Insônia grave"],
            sideEffects: ["Insônia se usado à noite"]
        },
        statistics: {
            uses: 3870,
            successRate: 78,
            userRating: 4.0
        },
        synergies: ["50Hz", "150Hz"],
        traditionalUse: "Utilizada em tradições de cura",
        researchStatus: "Em investigação"
    },
    // Adicione mais frequências conforme necessário
];

// Tornar disponível globalmente
if (typeof window !== 'undefined') {
    window.frequenciesData = frequenciesData;
}
