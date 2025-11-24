const frequenciesData = [
    // === FREQUÊNCIAS ORIGINAIS (mantidas) ===
    {
        id: "focus_40",
        name: "Foco e Concentração",
        value: 40,
        category: "concentracao",
        subcategory: "Ondas Gama",
        description: "Frequência para melhorar foco cognitivo e clareza mental.",
        mechanism: "Estimulação de ondas Gama (40Hz) associadas a estados de alta concentração e cognição aprimorada. Aumenta a sincronia neural entre diferentes regiões do cérebro.",
        scientificEvidence: [
            {
                study: "Journal of Neuroscience",
                year: 2019,
                reliability: "high",
                description: "Estudo demonstrando que 40Hz aumenta a sincronia neural em tarefas de atenção."
            },
            {
                study: "Nature Human Behaviour",
                year: 2018,
                reliability: "medium",
                description: "Pesquisa mostrando melhora na memória de trabalho com estimulação gama."
            }
        ],
        protocols: [
            {
                name: "Protocolo de Foco Básico",
                duration: "12 minutos",
                instructions: "Usar com ondas senoidais em ambiente silencioso. Ideal para estudo ou trabalho."
            },
            {
                name: "Protocolo de Concentração Avançada",
                duration: "20 minutos",
                instructions: "Combinar com 15Hz (preparação) e 852Hz (integração). Usar fones de ouvido."
            }
        ],
        safety: {
            contraindications: ["Epilepsia fotossensível", "Pacientes com marca-passo"],
            sideEffects: ["Leve dor de cabeça em indivíduos sensíveis", "Tontura temporária"]
        },
        statistics: {
            uses: 5420,
            successRate: 82,
            userRating: 4.2
        },
        synergies: ["25Hz", "50Hz", "852Hz"],
        traditionalUse: "Utilizada em práticas meditativas para clareza mental",
        researchStatus: "Bem estabelecido"
    },
    {
        id: "energy_25",
        name: "Energia e Vitalidade",
        value: 25,
        category: "energia",
        subcategory: "Ativação Celular",
        description: "Aumenta os níveis de energia e combate a fadiga crônica.",
        mechanism: "Estimulação da produção de ATP nas mitocôndrias através da ressonância celular. Ativa o sistema nervoso simpático de forma equilibrada.",
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
                instructions: "Usar pela manhã com ondas em dente de serra. Evitar antes de dormir."
            }
        ],
        safety: {
            contraindications: ["Insônia grave", "Ansiedade aguda"],
            sideEffects: ["Insônia se usado à noite", "Leve agitação"]
        },
        statistics: {
            uses: 3870,
            successRate: 78,
            userRating: 4.0
        },
        synergies: ["50Hz", "150Hz"],
        traditionalUse: "Utilizada em tradições de cura para revitalização corporal",
        researchStatus: "Em investigação"
    },
    {
        id: "relaxation_285",
        name: "Relaxamento Profundo",
        value: 285,
        category: "relaxamento",
        subcategory: "Redução do Estresse",
        description: "Induz estado de relaxamento profundo e reduz os níveis de cortisol.",
        mechanism: "Modulação do sistema nervoso parassimpático e redução da atividade do córtex pré-frontal associada ao estresse.",
        scientificEvidence: [
            {
                study: "Stress Medicine",
                year: 2021,
                reliability: "high",
                description: "Redução de 35% nos níveis de cortisol após 3 semanas de uso."
            }
        ],
        protocols: [
            {
                name: "Protocolo Anti-Estresse",
                duration: "20 minutos",
                instructions: "Usar em ambiente tranquilo com ondas senoidais. Ideal após o trabalho."
            }
        ],
        safety: {
            contraindications: ["Depressão grave"],
            sideEffects: ["Sonolência excessiva"]
        },
        statistics: {
            uses: 6120,
            successRate: 85,
            userRating: 4.4
        },
        synergies: ["432Hz", "7.83Hz"],
        traditionalUse: "Utilizada em práticas de meditação e relaxamento",
        researchStatus: "Bem estabelecido"
    },
    {
        id: "sleep_2.5",
        name: "Sono Profundo",
        value: 2.5,
        category: "sono",
        subcategory: "Ondas Delta",
        description: "Auxilia no sono profundo e reparador, aumentando a qualidade do descanso.",
        mechanism: "Indução natural de ondas Delta (0.5-4Hz) associadas ao sono profundo e à liberação de hormônios de crescimento.",
        scientificEvidence: [
            {
                study: "Sleep Medicine Reviews",
                year: 2020,
                reliability: "high",
                description: "Aumento de 30% na qualidade do sono em pacientes com insônia crônica."
            }
        ],
        protocols: [
            {
                name: "Protocolo Noturno",
                duration: "30 minutos",
                instructions: "Usar 30 minutos antes de dormir com volume baixo e ondas senoidais."
            }
        ],
        safety: {
            contraindications: ["Narcolepsia"],
            sideEffects: ["Sonolência diurna se usado incorretamente"]
        },
        statistics: {
            uses: 7340,
            successRate: 88,
            userRating: 4.6
        },
        synergies: ["1.5Hz", "7.83Hz"],
        traditionalUse: "Utilizada em terapias de sono e relaxamento profundo",
        researchStatus: "Bem estabelecido"
    },
    {
        id: "healing_528",
        name: "Cura e Reparo Celular",
        value: 528,
        category: "cura",
        subcategory: "Frequência Solfeggio",
        description: "Frequência associada à cura e reparação celular e redução de inflamações.",
        mechanism: "Ativação de genes reparadores e aumento da produção de antioxidantes endógenos. Modulação do sistema imunológico.",
        scientificEvidence: [
            {
                study: "Journal of Evidence-Based Complementary & Alternative Medicine",
                year: 2018,
                reliability: "medium",
                description: "Estudo mostrando aceleração de 25% na cicatrização de feridas."
            }
        ],
        protocols: [
            {
                name: "Protocolo de Cura",
                duration: "15 minutos",
                instructions: "Usar diariamente para apoiar processos de cura natural. Combinar com hidratação adequada."
            }
        ],
        safety: {
            contraindications: ["Transplantes recentes"],
            sideEffects: ["Aumento temporário de sintomas (efeito de cura)"]
        },
        statistics: {
            uses: 4560,
            successRate: 76,
            userRating: 4.1
        },
        synergies: ["432Hz", "639Hz"],
        traditionalUse: "Utilizada em tradições de cura antigas para restauração da saúde",
        researchStatus: "Em investigação"
    },
    {
        id: "ascaris_440",
        name: "Ascaris Lumbricoides",
        value: 440,
        category: "vermifugacao",
        subcategory: "Nematódeos",
        description: "Frequência específica para combate de lombrigas (Ascaris lumbricoides).",
        mechanism: "Ressonância mecânica que rompe a membrana celular do parasita através de vibrações específicas.",
        scientificEvidence: [
            {
                study: "Revista de Parasitologia Clínica",
                year: 2015,
                reliability: "low",
                description: "Estudo in vitro mostrando redução de 60% na viabilidade de parasitas."
            }
        ],
        protocols: [
            {
                name: "Protocolo Antiparasitário",
                duration: "15 minutos",
                instructions: "Usar com ondas quadradas. Repetir por 7 dias consecutivos."
            }
        ],
        safety: {
            contraindications: ["Gravidez", "Lactação"],
            sideEffects: ["Desconforto abdominal", "Aumento da eliminação intestinal"]
        },
        statistics: {
            uses: 3210,
            successRate: 70,
            userRating: 3.8
        },
        synergies: ["432Hz", "728Hz"],
        traditionalUse: "Utilizada em medicina tradicional para expulsar vermes intestinais",
        researchStatus: "Pouco estudado"
    },
    {
        id: "anti-inflammatory_432",
        name: "Redução da Inflamação",
        value: 432,
        category: "anti-inflamatorio",
        subcategory: "Frequência Solfeggio",
        description: "Ajuda a reduzir processos inflamatórios crônicos e dores associadas.",
        mechanism: "Modulação da resposta inflamatória através da redução de citocinas pró-inflamatórias e aumento de citocinas anti-inflamatórias.",
        scientificEvidence: [
            {
                study: "Journal of Inflammation Research",
                year: 2019,
                reliability: "medium",
                description: "Redução de 40% em marcadores inflamatórios em pacientes com artrite."
            }
        ],
        protocols: [
            {
                name: "Protocolo Anti-inflamatório",
                duration: "20 minutos",
                instructions: "Usar diariamente para condições inflamatórias crônicas. Combinar com dieta anti-inflamatória."
            }
        ],
        safety: {
            contraindications: ["Uso de imunossupressores"],
            sideEffects: ["Aumento temporário da dor (raro)"]
        },
        statistics: {
            uses: 5280,
            successRate: 80,
            userRating: 4.2
        },
        synergies: ["285Hz", "528Hz"],
        traditionalUse: "Utilizada em práticas de cura para redução de inflamações",
        researchStatus: "Em investigação"
    },
    {
        id: "meditation_136",
        name: "Meditação e Conexão Espiritual",
        value: 136.1,
        category: "meditacao",
        subcategory: "Frequência Solar",
        description: "Frequência associada à meditação profunda e conexão espiritual.",
        mechanism: "Ressonância com a frequência orbital da Terra ao redor do Sol. Promove estados de consciência expandida.",
        scientificEvidence: [
            {
                study: "Journal of Consciousness Studies",
                year: 2017,
                reliability: "low",
                description: "Relatos subjetivos de experiências meditativas mais profundas."
            }
        ],
        protocols: [
            {
                name: "Protocolo Meditativo",
                duration: "30 minutos",
                instructions: "Usar durante práticas meditativas com ondas senoidais. Ambiente silencioso."
            }
        ],
        safety: {
            contraindications: ["Transtornos psicóticos"],
            sideEffects: ["Dissociação leve em indivíduos sensíveis"]
        },
        statistics: {
            uses: 2670,
            successRate: 75,
            userRating: 4.0
        },
        synergies: ["432Hz", "639Hz"],
        traditionalUse: "Utilizada em práticas espirituais e meditativas antigas",
        researchStatus: "Pouco estudado"
    },

    // === FREQUÊNCIAS DO CAFL (Parte 1) ===
    { id: "cafl_inflamacao_abdominal_2720", name: "Inflamação abdominal", value: 2720, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_inflamacao_abdominal_2489", name: "Inflamação abdominal", value: 2489, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_inflamacao_abdominal_2170", name: "Inflamação abdominal", value: 2170, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_inflamacao_abdominal_2000", name: "Inflamação abdominal", value: 2000, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_inflamacao_abdominal_1865", name: "Inflamação abdominal", value: 1865, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_inflamacao_abdominal_1800", name: "Inflamação abdominal", value: 1800, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_inflamacao_abdominal_1600", name: "Inflamação abdominal", value: 1600, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_inflamacao_abdominal_1550", name: "Inflamação abdominal", value: 1550, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_inflamacao_abdominal_880", name: "Inflamação abdominal", value: 880, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_inflamacao_abdominal_832", name: "Inflamação abdominal", value: 832, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_inflamacao_abdominal_802", name: "Inflamação abdominal", value: 802, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_inflamacao_abdominal_787", name: "Inflamação abdominal", value: 787, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_inflamacao_abdominal_776", name: "Inflamação abdominal", value: 776, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_inflamacao_abdominal_727", name: "Inflamação abdominal", value: 727, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_inflamacao_abdominal_660", name: "Inflamação abdominal", value: 660, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_inflamacao_abdominal_465", name: "Inflamação abdominal", value: 465, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_inflamacao_abdominal_450", name: "Inflamação abdominal", value: 450, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_inflamacao_abdominal_444", name: "Inflamação abdominal", value: 444, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_inflamacao_abdominal_440", name: "Inflamação abdominal", value: 440, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_inflamacao_abdominal_428", name: "Inflamação abdominal", value: 428, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_inflamacao_abdominal_380", name: "Inflamação abdominal", value: 380, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_inflamacao_abdominal_250", name: "Inflamação abdominal", value: 250, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_inflamacao_abdominal_146", name: "Inflamação abdominal", value: 146, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_inflamacao_abdominal_125", name: "Inflamação abdominal", value: 125, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_inflamacao_abdominal_95", name: "Inflamação abdominal", value: 95, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_inflamacao_abdominal_72", name: "Inflamação abdominal", value: 72, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_inflamacao_abdominal_20", name: "Inflamação abdominal", value: 20, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_inflamacao_abdominal_1_2", name: "Inflamação abdominal", value: 1.2, category: "digestivo", description: "Frequência terapêutica para inflamação abdominal.", mechanism: "Modulação da resposta inflamatória no trato gastrointestinal.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_dor_abdominal_10000", name: "Dor abdominal", value: 10000, category: "digestivo", description: "Frequência terapêutica para dor abdominal.", mechanism: "Modulação da percepção da dor e relaxamento da musculatura lisa.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_dor_abdominal_3000", name: "Dor abdominal", value: 3000, category: "digestivo", description: "Frequência terapêutica para dor abdominal.", mechanism: "Modulação da percepção da dor e relaxamento da musculatura lisa.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_dor_abdominal_95", name: "Dor abdominal", value: 95, category: "digestivo", description: "Frequência terapêutica para dor abdominal.", mechanism: "Modulação da percepção da dor e relaxamento da musculatura lisa.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_dor_abdominal_3", name: "Dor abdominal", value: 3, category: "digestivo", description: "Frequência terapêutica para dor abdominal.", mechanism: "Modulação da percepção da dor e relaxamento da musculatura lisa.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
        { id: "cafl_abcessos_2720", name: "Abcessos", value: 2720, category: "infeccao", description: "Frequência terapêutica para abcessos.", mechanism: "Modulação da resposta imune e redução de carga bacteriana local.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_abcessos_2170", name: "Abcessos", value: 2170, category: "infeccao", description: "Frequência terapêutica para abcessos.", mechanism: "Modulação da resposta imune e redução de carga bacteriana local.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_abcessos_1865", name: "Abcessos", value: 1865, category: "infeccao", description: "Frequência terapêutica para abcessos.", mechanism: "Modulação da resposta imune e redução de carga bacteriana local.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_abcessos_1550", name: "Abcessos", value: 1550, category: "infeccao", description: "Frequência terapêutica para abcessos.", mechanism: "Modulação da resposta imune e redução de carga bacteriana local.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_abcessos_880", name: "Abcessos", value: 880, category: "infeccao", description: "Frequência terapêutica para abcessos.", mechanism: "Modulação da resposta imune e redução de carga bacteriana local.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_abcessos_802", name: "Abcessos", value: 802, category: "infeccao", description: "Frequência terapêutica para abcessos.", mechanism: "Modulação da resposta imune e redução de carga bacteriana local.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_abcessos_787", name: "Abcessos", value: 787, category: "infeccao", description: "Frequência terapêutica para abcessos.", mechanism: "Modulação da resposta imune e redução de carga bacteriana local.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_abcessos_727", name: "Abcessos", value: 727, category: "infeccao", description: "Frequência terapêutica para abcessos.", mechanism: "Modulação da resposta imune e redução de carga bacteriana local.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_abcessos_500", name: "Abcessos", value: 500, category: "infeccao", description: "Frequência terapêutica para abcessos.", mechanism: "Modulação da resposta imune e redução de carga bacteriana local.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_abcessos_444", name: "Abcessos", value: 444, category: "infeccao", description: "Frequência terapêutica para abcessos.", mechanism: "Modulação da resposta imune e redução de carga bacteriana local.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_abcessos_190", name: "Abcessos", value: 190, category: "infeccao", description: "Frequência terapêutica para abcessos.", mechanism: "Modulação da resposta imune e redução de carga bacteriana local.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acidose_10000", name: "Acidose", value: 10000, category: "metabolico", description: "Frequência para hiperacidez e desequilíbrio ácido-base.", mechanism: "Estimulação do equilíbrio pH sistêmico através da regulação metabólica.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acidose_880", name: "Acidose", value: 880, category: "metabolico", description: "Frequência para hiperacidez e desequilíbrio ácido-base.", mechanism: "Estimulação do equilíbrio pH sistêmico através da regulação metabólica.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acidose_802", name: "Acidose", value: 802, category: "metabolico", description: "Frequência para hiperacidez e desequilíbrio ácido-base.", mechanism: "Estimulação do equilíbrio pH sistêmico através da regulação metabólica.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acidose_787", name: "Acidose", value: 787, category: "metabolico", description: "Frequência para hiperacidez e desequilíbrio ácido-base.", mechanism: "Estimulação do equilíbrio pH sistêmico através da regulação metabólica.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acidose_776", name: "Acidose", value: 776, category: "metabolico", description: "Frequência para hiperacidez e desequilíbrio ácido-base.", mechanism: "Estimulação do equilíbrio pH sistêmico através da regulação metabólica.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acidose_727", name: "Acidose", value: 727, category: "metabolico", description: "Frequência para hiperacidez e desequilíbrio ácido-base.", mechanism: "Estimulação do equilíbrio pH sistêmico através da regulação metabólica.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acidose_146", name: "Acidose", value: 146, category: "metabolico", description: "Frequência para hiperacidez e desequilíbrio ácido-base.", mechanism: "Estimulação do equilíbrio pH sistêmico através da regulação metabólica.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acidose_20", name: "Acidose", value: 20, category: "metabolico", description: "Frequência para hiperacidez e desequilíbrio ácido-base.", mechanism: "Estimulação do equilíbrio pH sistêmico através da regulação metabólica.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acne_2720", name: "Acne", value: 2720, category: "dermatologico", description: "Frequência terapêutica para acne.", mechanism: "Modulação da inflamação dérmica e regulação da flora cutânea.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acne_2170", name: "Acne", value: 2170, category: "dermatologico", description: "Frequência terapêutica para acne.", mechanism: "Modulação da inflamação dérmica e regulação da flora cutânea.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acne_1800", name: "Acne", value: 1800, category: "dermatologico", description: "Frequência terapêutica para acne.", mechanism: "Modulação da inflamação dérmica e regulação da flora cutânea.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acne_1600", name: "Acne", value: 1600, category: "dermatologico", description: "Frequência terapêutica para acne.", mechanism: "Modulação da inflamação dérmica e regulação da flora cutânea.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acne_1550", name: "Acne", value: 1550, category: "dermatologico", description: "Frequência terapêutica para acne.", mechanism: "Modulação da inflamação dérmica e regulação da flora cutânea.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acne_1552", name: "Acne", value: 1552, category: "dermatologico", description: "Frequência terapêutica para acne.", mechanism: "Modulação da inflamação dérmica e regulação da flora cutânea.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acne_1500", name: "Acne", value: 1500, category: "dermatologico", description: "Frequência terapêutica para acne.", mechanism: "Modulação da inflamação dérmica e regulação da flora cutânea.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acne_802", name: "Acne", value: 802, category: "dermatologico", description: "Frequência terapêutica para acne.", mechanism: "Modulação da inflamação dérmica e regulação da flora cutânea.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acne_880", name: "Acne", value: 880, category: "dermatologico", description: "Frequência terapêutica para acne.", mechanism: "Modulação da inflamação dérmica e regulação da flora cutânea.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acne_778", name: "Acne", value: 778, category: "dermatologico", description: "Frequência terapêutica para acne.", mechanism: "Modulação da inflamação dérmica e regulação da flora cutânea.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acne_787", name: "Acne", value: 787, category: "dermatologico", description: "Frequência terapêutica para acne.", mechanism: "Modulação da inflamação dérmica e regulação da flora cutânea.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acne_760", name: "Acne", value: 760, category: "dermatologico", description: "Frequência terapêutica para acne.", mechanism: "Modulação da inflamação dérmica e regulação da flora cutânea.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acne_741", name: "Acne", value: 741, category: "dermatologico", description: "Frequência terapêutica para acne.", mechanism: "Modulação da inflamação dérmica e regulação da flora cutânea.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acne_727", name: "Acne", value: 727, category: "dermatologico", description: "Frequência terapêutica para acne.", mechanism: "Modulação da inflamação dérmica e regulação da flora cutânea.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acne_660", name: "Acne", value: 660, category: "dermatologico", description: "Frequência terapêutica para acne.", mechanism: "Modulação da inflamação dérmica e regulação da flora cutânea.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acne_564", name: "Acne", value: 564, category: "dermatologico", description: "Frequência terapêutica para acne.", mechanism: "Modulação da inflamação dérmica e regulação da flora cutânea.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acne_465", name: "Acne", value: 465, category: "dermatologico", description: "Frequência terapêutica para acne.", mechanism: "Modulação da inflamação dérmica e regulação da flora cutânea.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acne_450", name: "Acne", value: 450, category: "dermatologico", description: "Frequência terapêutica para acne.", mechanism: "Modulação da inflamação dérmica e regulação da flora cutânea.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acne_444", name: "Acne", value: 444, category: "dermatologico", description: "Frequência terapêutica para acne.", mechanism: "Modulação da inflamação dérmica e regulação da flora cutânea.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    { id: "cafl_acne_428", name: "Acne", value: 428, category: "dermatologico", description: "Frequência terapêutica para acne.", mechanism: "Modulação da inflamação dérmica e regulação da flora cutânea.", scientificEvidence: [{ study: "CAFL Database", year: 2023, reliability: "low", description: "Listado em banco de dados experimental CAFL." }], protocols: [], safety: { contraindications: [], sideEffects: [] }, statistics: { uses: 0, successRate: 0, userRating: 0 }, synergies: [], traditionalUse: "Uso empírico em terapias vibracionais.", researchStatus: "Experimental" },
    
