// Arquivo com TODAS as questões do Roteiro de Inspeção RDC 67/2007 - ANVISA
// Este arquivo contém o roteiro completo conforme o Anexo VII

import { Question, QuestionCategory, QuestionType } from '../models/question.model';

export const COMPLETE_QUESTIONS: Question[] = [
  // ========== 1. IDENTIFICAÇÃO DA FARMÁCIA ==========
  {
    id: '1.1',
    category: QuestionCategory.IDENTIFICACAO,
    type: QuestionType.INF,
    text: 'Razão Social',
    weight: 1,
    isFatal: false
  },
  {
    id: '1.2',
    category: QuestionCategory.IDENTIFICACAO,
    type: QuestionType.INF,
    text: 'CNPJ (C.G.C)',
    weight: 1,
    isFatal: false
  },
  {
    id: '1.3',
    category: QuestionCategory.IDENTIFICACAO,
    type: QuestionType.INF,
    text: 'Nome Fantasia',
    weight: 1,
    isFatal: false
  },
  {
    id: '1.4',
    category: QuestionCategory.IDENTIFICACAO,
    type: QuestionType.INF,
    text: 'Número da Autorização de Funcionamento e Data de publicação',
    weight: 2,
    isFatal: false
  },
  {
    id: '1.5',
    category: QuestionCategory.IDENTIFICACAO,
    type: QuestionType.INF,
    text: 'Número da Autorização Especial e Data de publicação',
    weight: 2,
    isFatal: false
  },
  {
    id: '1.6',
    category: QuestionCategory.IDENTIFICACAO,
    type: QuestionType.R,
    text: 'Número da Licença de Funcionamento está fixada em local visível?',
    weight: 3,
    isFatal: false
  },
  {
    id: '1.7',
    category: QuestionCategory.IDENTIFICACAO,
    type: QuestionType.INF,
    text: 'Endereço completo (Rua, Número, Bairro, Cidade, CEP, DDD, Telefone, Fax, E-mail)',
    weight: 1,
    isFatal: false
  },
  {
    id: '1.8',
    category: QuestionCategory.IDENTIFICACAO,
    type: QuestionType.I,
    text: 'Nome do Responsável Técnico e CRF/UF - Está presente?',
    weight: 5,
    isFatal: true,
    suggestion: 'O Responsável Técnico deve estar presente durante o horário de funcionamento da farmácia.'
  },
  {
    id: '1.9',
    category: QuestionCategory.IDENTIFICACAO,
    type: QuestionType.INF,
    text: 'Tipo de preparação que manipula (Homeopatia, Alopatia, Preparações estéreis, Fitoterápicos)',
    weight: 2,
    isFatal: false
  },
  {
    id: '1.10',
    category: QuestionCategory.IDENTIFICACAO,
    type: QuestionType.INF,
    text: 'Quais as formas farmacêuticas preparadas? (Sólidos, Semi-Sólidos, Líquidos Orais, Líquidos uso externo, Injetáveis de Pequeno Volume, Colírios, Outras)',
    weight: 2,
    isFatal: false
  },
  {
    id: '1.11',
    category: QuestionCategory.IDENTIFICACAO,
    type: QuestionType.INF,
    text: 'Manipula Substâncias de Baixo Índice Terapêutico? (Alta dosagem e baixa potência? Baixa dosagem e alta potência?)',
    weight: 3,
    isFatal: false
  },
  {
    id: '1.12',
    category: QuestionCategory.IDENTIFICACAO,
    type: QuestionType.INF,
    text: 'Manipula: Hormônios? Antibióticos? Citostáticos? Substâncias sujeitas a controle especial?',
    weight: 4,
    isFatal: false
  },
  {
    id: '1.13',
    category: QuestionCategory.IDENTIFICACAO,
    type: QuestionType.INF,
    text: 'Possui Filiais? Quantas?',
    weight: 1,
    isFatal: false
  },
  {
    id: '1.14',
    category: QuestionCategory.IDENTIFICACAO,
    type: QuestionType.INF,
    text: 'Caso a empresa possua mais de um estabelecimento, a farmácia centraliza alguma atividade de manipulação? Como estas atividades são distribuídas?',
    weight: 2,
    isFatal: false
  },
  {
    id: '1.15',
    category: QuestionCategory.IDENTIFICACAO,
    type: QuestionType.INF,
    text: 'São centralizadas as atividades de controle de qualidade?',
    weight: 2,
    isFatal: false
  },
  {
    id: '1.16',
    category: QuestionCategory.IDENTIFICACAO,
    type: QuestionType.INF,
    text: 'Pessoas contactadas/função',
    weight: 1,
    isFatal: false
  },

  // ========== 2. CONDIÇÕES GERAIS ==========
  {
    id: '2.1',
    category: QuestionCategory.CONDICOES_GERAIS,
    type: QuestionType.R,
    text: 'As imediações da farmácia estão limpas e em bom estado de conservação?',
    weight: 3,
    isFatal: false
  },
  {
    id: '2.2',
    category: QuestionCategory.CONDICOES_GERAIS,
    type: QuestionType.INF,
    text: 'Existem fontes de poluição ou contaminação ambiental próximas à farmácia?',
    weight: 4,
    isFatal: true,
    suggestion: 'A farmácia não deve estar próxima a fontes de poluição ou contaminação ambiental.'
  },
  {
    id: '2.3',
    category: QuestionCategory.CONDICOES_GERAIS,
    type: QuestionType.I,
    text: 'A dispensação das preparações magistrais de medicamentos é feita somente mediante prescrição de profissional habilitado?',
    weight: 5,
    isFatal: true,
    suggestion: 'É obrigatório dispensar preparações magistrais apenas com prescrição de profissional habilitado.'
  },
  {
    id: '2.4',
    category: QuestionCategory.CONDICOES_GERAIS,
    type: QuestionType.N,
    text: 'A manipulação das preparações oficinais é feita de acordo com a legislação vigente?',
    weight: 5,
    isFatal: true,
    suggestion: 'A manipulação deve seguir rigorosamente a legislação vigente da ANVISA.'
  },
  {
    id: '2.5',
    category: QuestionCategory.CONDICOES_GERAIS,
    type: QuestionType.I,
    text: 'É respeitada a proibição de aviar receitas em código, siglas ou números?',
    weight: 5,
    isFatal: true,
    suggestion: 'É proibido aviar receitas em código, siglas ou números. Todas as receitas devem estar claras e legíveis.'
  },
  {
    id: '2.6',
    category: QuestionCategory.CONDICOES_GERAIS,
    type: QuestionType.I,
    text: 'É respeitada a proibição de dispensação de medicamentos manipulados em substituição a medicamentos industrializados?',
    weight: 5,
    isFatal: true,
    suggestion: 'Não é permitido substituir medicamentos industrializados por manipulados sem prescrição específica.'
  },
  {
    id: '2.7',
    category: QuestionCategory.CONDICOES_GERAIS,
    type: QuestionType.N,
    text: 'É respeitada a proibição de captação de receitas contendo prescrições de medicamentos magistrais e oficinais em drogarias, ervanarias e postos de medicamentos?',
    weight: 5,
    isFatal: true,
    suggestion: 'É proibido captar receitas em drogarias, ervanarias e postos de medicamentos.'
  },
  {
    id: '2.8',
    category: QuestionCategory.CONDICOES_GERAIS,
    type: QuestionType.N,
    text: 'É respeitada a proibição de intermediação de fórmulas entre farmácias de diferentes empresas?',
    weight: 5,
    isFatal: true,
    suggestion: 'É proibida a intermediação de fórmulas entre farmácias de diferentes empresas.'
  },

  // ========== 3. RECURSOS HUMANOS E ORGANIZAÇÃO ==========
  {
    id: '3.1',
    category: QuestionCategory.RECURSOS_HUMANOS,
    type: QuestionType.INF,
    text: 'Número total de funcionários (M/F), Nível superior, 2° grau completo, Outros níveis',
    weight: 1,
    isFatal: false
  },
  {
    id: '3.2',
    category: QuestionCategory.RECURSOS_HUMANOS,
    type: QuestionType.I,
    text: 'Existe farmacêutico presente?',
    weight: 5,
    isFatal: true,
    suggestion: 'É obrigatória a presença de farmacêutico durante todo o horário de funcionamento.'
  },
  {
    id: '3.3',
    category: QuestionCategory.RECURSOS_HUMANOS,
    type: QuestionType.R,
    text: 'A farmácia possui um organograma?',
    weight: 2,
    isFatal: false
  },
  {
    id: '3.4',
    category: QuestionCategory.RECURSOS_HUMANOS,
    type: QuestionType.N,
    text: 'Demonstra possuir estrutura organizacional e de pessoal suficiente para o desenvolvimento de suas atividades?',
    weight: 4,
    isFatal: false
  },
  {
    id: '3.5',
    category: QuestionCategory.RECURSOS_HUMANOS,
    type: QuestionType.R,
    text: 'As atribuições e responsabilidades individuais estão formalmente descritas e perfeitamente compreensíveis a todos os empregados?',
    weight: 3,
    isFatal: false
  },
  {
    id: '3.6',
    category: QuestionCategory.RECURSOS_HUMANOS,
    type: QuestionType.INF,
    text: 'Existe sobreposição de atribuições e responsabilidades que possa comprometer a aplicação das Boas Práticas de Manipulação?',
    weight: 3,
    isFatal: false
  },
  {
    id: '3.7',
    category: QuestionCategory.RECURSOS_HUMANOS,
    type: QuestionType.N,
    text: 'É proibida a entrada de pessoal não autorizado nos diversos setores da área de manipulação?',
    weight: 4,
    isFatal: false
  },
  {
    id: '3.8',
    category: QuestionCategory.RECURSOS_HUMANOS,
    type: QuestionType.R,
    text: 'Na hipótese da necessidade de pessoas estranhas terem acesso à área de manipulação, existe procedimento escrito?',
    weight: 3,
    isFatal: false
  },
  {
    id: '3.8.1',
    category: QuestionCategory.RECURSOS_HUMANOS,
    type: QuestionType.N,
    text: 'São previamente informadas sobre a conduta, higiene pessoal e uso de vestimentas protetoras?',
    weight: 3,
    isFatal: false
  },
  {
    id: '3.9',
    category: QuestionCategory.RECURSOS_HUMANOS,
    type: QuestionType.N,
    text: 'A admissão dos funcionários é precedida de exames médicos?',
    weight: 3,
    isFatal: false
  },
  {
    id: '3.10',
    category: QuestionCategory.RECURSOS_HUMANOS,
    type: QuestionType.N,
    text: 'São realizadas avaliações médicas periódicas de todos os funcionários da farmácia?',
    weight: 3,
    isFatal: false
  },
  {
    id: '3.11',
    category: QuestionCategory.RECURSOS_HUMANOS,
    type: QuestionType.R,
    text: 'Foi elaborado "Programa de Controle Médico e Saúde Ocupacional" (PCMSO)?',
    weight: 3,
    isFatal: false
  },
  {
    id: '3.12',
    category: QuestionCategory.RECURSOS_HUMANOS,
    type: QuestionType.I,
    text: 'Em caso de lesão exposta, suspeita ou confirmação de enfermidade que possa comprometer a qualidade da preparação magistral, o funcionário é afastado de suas atividades?',
    weight: 5,
    isFatal: true,
    suggestion: 'Funcionários com lesões expostas ou enfermidades devem ser imediatamente afastados das atividades de manipulação.'
  },
  {
    id: '3.13',
    category: QuestionCategory.RECURSOS_HUMANOS,
    type: QuestionType.N,
    text: 'Na área de pesagem e salas de manipulação é respeitada a proibição do uso de cosméticos, jóias ou quaisquer objetos de adorno de uso pessoal?',
    weight: 4,
    isFatal: false
  },
  {
    id: '3.14',
    category: QuestionCategory.RECURSOS_HUMANOS,
    type: QuestionType.N,
    text: 'É respeitada a proibição de conversar, fumar, comer, beber, mascar, manter plantas, alimentos, bebidas, produtos fumígenos, medicamentos e objetos pessoais nas salas de pesagem e manipulação?',
    weight: 4,
    isFatal: false
  },
  {
    id: '3.15',
    category: QuestionCategory.RECURSOS_HUMANOS,
    type: QuestionType.N,
    text: 'Os empregados são instruídos e incentivados a reportar aos seus superiores imediatos qualquer condição de risco relativa ao produto, ambiente, equipamento ou pessoal?',
    weight: 3,
    isFatal: false
  },
  {
    id: '3.16',
    category: QuestionCategory.RECURSOS_HUMANOS,
    type: QuestionType.N,
    text: 'A farmácia é responsável pela distribuição dos Equipamentos de Proteção Individual de forma gratuita, em quantidade suficiente e com reposição periódica?',
    weight: 4,
    isFatal: false
  },
  {
    id: '3.17',
    category: QuestionCategory.RECURSOS_HUMANOS,
    type: QuestionType.N,
    text: 'Existe procedimento que oriente os funcionários quanto ao uso, manutenção, conservação e descarte dos Equipamentos de Proteção Individual?',
    weight: 3,
    isFatal: false
  },
  {
    id: '3.18',
    category: QuestionCategory.RECURSOS_HUMANOS,
    type: QuestionType.N,
    text: 'Os funcionários envolvidos na manipulação estão adequadamente paramentados, utilizando equipamentos de proteção individual (EPIs)?',
    weight: 5,
    isFatal: true,
    suggestion: 'Todos os funcionários envolvidos na manipulação devem estar adequadamente paramentados com EPIs.'
  },
  {
    id: '3.19',
    category: QuestionCategory.RECURSOS_HUMANOS,
    type: QuestionType.INF,
    text: 'Qual a freqüência de troca de uniformes?',
    weight: 2,
    isFatal: false
  },
  {
    id: '3.20',
    category: QuestionCategory.RECURSOS_HUMANOS,
    type: QuestionType.R,
    text: 'A lavagem dos equipamentos de proteção individual dos funcionários envolvidos na manipulação é de responsabilidade da farmácia?',
    weight: 3,
    isFatal: false
  },
  {
    id: '3.21',
    category: QuestionCategory.RECURSOS_HUMANOS,
    type: QuestionType.N,
    text: 'Existe procedimento para paramentação e higienização das mãos e antebraços antes do início da manipulação?',
    weight: 4,
    isFatal: false
  },

  // ========== 4. INFRA-ESTRUTURA FÍSICA ==========
  {
    id: '4.1',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.N,
    text: 'A farmácia está localizada, projetada, construída ou adaptada, com uma infra-estrutura adequada às atividades desenvolvidas?',
    weight: 4,
    isFatal: false
  },
  {
    id: '4.2',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.N,
    text: 'As áreas e instalações são adequadas e suficientes ao desenvolvimento das operações?',
    weight: 4,
    isFatal: false
  },
  {
    id: '4.2.1',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.INF,
    text: 'Possui, no mínimo: área ou sala para atividades administrativas; área ou sala de armazenamento; área ou sala de controle de qualidade; sala ou local de pesagem; sala(s) de manipulação; área de dispensação; vestiário; sala de paramentação; sanitários; área ou local para lavagem de utensílios; depósito de Material de Limpeza?',
    weight: 5,
    isFatal: true,
    suggestion: 'A farmácia deve possuir todas as áreas mínimas exigidas pela legislação.'
  },
  {
    id: '4.3',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.N,
    text: 'Os ambientes possuem superfícies internas (pisos, paredes e teto) lisas e impermeáveis, sem rachaduras, resistentes aos agentes sanitizantes e facilmente laváveis?',
    weight: 4,
    isFatal: false
  },
  {
    id: '4.3.1',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.N,
    text: 'Estão em bom estado de higiene e conservação?',
    weight: 4,
    isFatal: false
  },
  {
    id: '4.4',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.N,
    text: 'As salas, áreas e locais estão limpos?',
    weight: 4,
    isFatal: false
  },
  {
    id: '4.5',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.N,
    text: 'Não existem infiltrações e/ou mofo e/ou acúmulo de lixo?',
    weight: 4,
    isFatal: false
  },
  {
    id: '4.6',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.N,
    text: 'A iluminação e ventilação são compatíveis com as operações e com os materiais manuseados?',
    weight: 3,
    isFatal: false
  },
  {
    id: '4.7',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.R,
    text: 'As instalações elétricas estão em bom estado de conservação, segurança e uso?',
    weight: 3,
    isFatal: false
  },
  {
    id: '4.8',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.N,
    text: 'Os esgotos e encanamentos estão em bom estado?',
    weight: 3,
    isFatal: false
  },
  {
    id: '4.9',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.INF,
    text: 'Existem tubulações expostas?',
    weight: 2,
    isFatal: false
  },
  {
    id: '4.9.1',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.R,
    text: 'Estão identificadas?',
    weight: 2,
    isFatal: false
  },
  {
    id: '4.10',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.N,
    text: 'Os ralos são sifonados e com tampas escamoteáveis?',
    weight: 3,
    isFatal: false
  },
  {
    id: '4.11',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.R,
    text: 'Existem sanitários em quantidade suficiente?',
    weight: 3,
    isFatal: false
  },
  {
    id: '4.11.1',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.N,
    text: 'Estão limpos?',
    weight: 3,
    isFatal: false
  },
  {
    id: '4.12',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.N,
    text: 'Os sanitários são de fácil acesso e estão adequadamente localizados?',
    weight: 3,
    isFatal: false
  },
  {
    id: '4.13',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.N,
    text: 'Os sanitários dispõem de papel higiênico, lixeira com tampa e pedal, toalhas descartáveis, sabão líquido e pia com água corrente?',
    weight: 3,
    isFatal: false
  },
  {
    id: '4.14',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.R,
    text: 'A farmácia dispõe de vestiário destinado à guarda dos pertences dos funcionários e colocação de uniformes?',
    weight: 3,
    isFatal: false
  },
  {
    id: '4.15',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.N,
    text: 'A farmácia possui sala destinada à paramentação?',
    weight: 4,
    isFatal: false
  },
  {
    id: '4.15.1',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.R,
    text: 'A sala de paramentação serve como acesso às áreas de pesagem e manipulação?',
    weight: 4,
    isFatal: false
  },
  {
    id: '4.15.2',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.R,
    text: 'A sala é ventilada e possui dois ambientes (barreira sujo/limpo)?',
    weight: 4,
    isFatal: false
  },
  {
    id: '4.15.3',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.N,
    text: 'Existe nesta sala ou junto a ela lavatório com provisão de sabonete líquido e antisséptico, além de recursos para secagem das mãos?',
    weight: 4,
    isFatal: false
  },
  {
    id: '4.15.3.1',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.N,
    text: 'Este lavatório é de uso exclusivo para o processo de paramentação?',
    weight: 3,
    isFatal: false
  },
  {
    id: '4.16',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.R,
    text: 'A farmácia dispõe de área específica para lavagem de materiais de embalagem e de utensílios utilizados na manipulação?',
    weight: 3,
    isFatal: false
  },
  {
    id: '4.17',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.INF,
    text: 'A lavagem ocorre em local dentro do próprio laboratório de manipulação?',
    weight: 2,
    isFatal: false
  },
  {
    id: '4.17.1',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.N,
    text: 'Obedece a procedimentos escritos e ocorre em horário distinto do das atividades de manipulação?',
    weight: 3,
    isFatal: false
  },
  {
    id: '4.18',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.N,
    text: 'Existe local adequado para guarda de materiais limpos?',
    weight: 3,
    isFatal: false
  },
  {
    id: '4.19',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.N,
    text: 'Os materiais de limpeza e germicidas em estoque são armazenados em área ou local especificamente designado para tal fim e identificado?',
    weight: 3,
    isFatal: false
  },
  {
    id: '4.20',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.R,
    text: 'Existe local destinado especificamente à lavagem dos materiais utilizados na limpeza?',
    weight: 2,
    isFatal: false
  },
  {
    id: '4.21',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.N,
    text: 'Os ambientes de armazenamento, manipulação e do controle da qualidade são protegidos contra a entrada de aves, insetos, roedores ou outros animais e poeira?',
    weight: 5,
    isFatal: true,
    suggestion: 'Os ambientes devem estar completamente protegidos contra pragas e poeira.'
  },
  {
    id: '4.22',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.R,
    text: 'As atividades administrativas e o arquivo da documentação são realizados em área ou sala específica?',
    weight: 2,
    isFatal: false
  },
  {
    id: '4.23',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.INF,
    text: 'A farmácia possui sala de descanso e refeitório?',
    weight: 1,
    isFatal: false
  },
  {
    id: '4.23.1',
    category: QuestionCategory.INFRAESTRUTURA,
    type: QuestionType.N,
    text: 'Estão separados dos demais ambientes?',
    weight: 2,
    isFatal: false
  },

  // ========== 5. MATERIAIS, EQUIPAMENTOS E UTENSÍLIOS ==========
  {
    id: '5.1',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.N,
    text: 'A farmácia é dotada dos materiais, equipamentos e utensílios básicos (balanças de precisão, pesos padrão rastreáveis, vidraria verificada, sistema de purificação de água, refrigerador, termômetros, higrômetros, bancadas adequadas, lixeiras identificadas, armários fechados)?',
    weight: 5,
    isFatal: true,
    suggestion: 'A farmácia deve possuir todos os equipamentos básicos necessários para manipulação.'
  },
  {
    id: '5.2',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.INF,
    text: 'A farmácia possui uma central de pesagem?',
    weight: 3,
    isFatal: false
  },
  {
    id: '5.3',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.I,
    text: 'Caso negativo, a farmácia possui pelo menos uma balança em cada laboratório?',
    weight: 4,
    isFatal: false
  },
  {
    id: '5.4',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.N,
    text: 'As balanças estão instaladas em local que ofereça segurança e estabilidade?',
    weight: 4,
    isFatal: false
  },
  {
    id: '5.5',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.I,
    text: 'São adotados procedimentos que impeçam a contaminação cruzada e microbiana durante as atividades de pesagem?',
    weight: 4,
    isFatal: false
  },
  {
    id: '5.6',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.I,
    text: 'As balanças possuem capacidade e sensibilidade compatíveis com as quantidades a serem pesadas?',
    weight: 4,
    isFatal: false
  },
  {
    id: '5.6.1',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.N,
    text: 'Estão devidamente calibradas?',
    weight: 5,
    isFatal: true,
    suggestion: 'Todas as balanças devem estar calibradas e com registros de calibração atualizados.'
  },
  {
    id: '5.6.2',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.N,
    text: 'São mantidos os registros de calibração?',
    weight: 4,
    isFatal: false
  },
  {
    id: '5.7',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.R,
    text: 'Os equipamentos estão instalados e localizados de forma a facilitar a manutenção?',
    weight: 3,
    isFatal: false
  },
  {
    id: '5.8',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.N,
    text: 'Os equipamentos e materiais são mantidos de forma organizada e racional, evitando os riscos de contaminação, misturas de componentes e garantindo a seqüência das operações?',
    weight: 4,
    isFatal: false
  },
  {
    id: '5.9',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.N,
    text: 'A farmácia dispõe de equipamentos, utensílios e vidraria em quantidade suficiente para atender à demanda do estabelecimento e garantir material limpo, desinfetado ou esterilizado?',
    weight: 4,
    isFatal: false
  },
  {
    id: '5.10',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.N,
    text: 'As calibrações dos equipamentos e instrumentos de medição são executadas por empresa certificada, utilizando padrões rastreáveis à Rede Brasileira de Calibração?',
    weight: 4,
    isFatal: false
  },
  {
    id: '5.10.1',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.INF,
    text: 'Qual a freqüência das calibrações?',
    weight: 2,
    isFatal: false
  },
  {
    id: '5.10.2',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.N,
    text: 'São mantidos os registros?',
    weight: 3,
    isFatal: false
  },
  {
    id: '5.11',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.N,
    text: 'É realizada verificação dos equipamentos por pessoal treinado do próprio estabelecimento?',
    weight: 3,
    isFatal: false
  },
  {
    id: '5.11.1',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.INF,
    text: 'Qual a freqüência?',
    weight: 2,
    isFatal: false
  },
  {
    id: '5.12',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.N,
    text: 'Existem procedimentos escritos para a realização da verificação dos equipamentos?',
    weight: 3,
    isFatal: false
  },
  {
    id: '5.12.1',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.N,
    text: 'Existem registros?',
    weight: 3,
    isFatal: false
  },
  {
    id: '5.13',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.N,
    text: 'Existem padrões de referência?',
    weight: 3,
    isFatal: false
  },
  {
    id: '5.14',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.R,
    text: 'Todos os equipamentos são submetidos à manutenção preventiva?',
    weight: 3,
    isFatal: false
  },
  {
    id: '5.15',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.R,
    text: 'Existe um programa formal para manutenção preventiva dos equipamentos?',
    weight: 3,
    isFatal: false
  },
  {
    id: '5.16',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.R,
    text: 'Existem procedimentos escritos para manutenção preventiva e corretiva dos equipamentos?',
    weight: 3,
    isFatal: false
  },
  {
    id: '5.17',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.N,
    text: 'Todos os sistemas de climatização de ambientes são mantidos em condições adequadas de limpeza, conservação, manutenção, operação e controle?',
    weight: 4,
    isFatal: false
  },
  {
    id: '5.18',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.N,
    text: 'Existem equipamentos de proteção individual e coletiva?',
    weight: 4,
    isFatal: false
  },
  {
    id: '5.19',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.R,
    text: 'Existem sistemas/equipamentos para combate a incêndio, conforme legislação específica?',
    weight: 4,
    isFatal: false
  },
  {
    id: '5.20',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.R,
    text: 'Os extintores estão dentro do prazo de validade?',
    weight: 3,
    isFatal: false
  },
  {
    id: '5.21',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.R,
    text: 'O acesso aos extintores e mangueiras está livre?',
    weight: 3,
    isFatal: false
  },
  {
    id: '5.22',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.N,
    text: 'O mobiliário é feito de material liso, impermeável, resistente e de fácil limpeza?',
    weight: 3,
    isFatal: false
  },
  {
    id: '5.23',
    category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
    type: QuestionType.R,
    text: 'O mobiliário é o estritamente necessário ao trabalho de cada área?',
    weight: 2,
    isFatal: false
  },

  // ========== 6. LIMPEZA E SANITIZAÇÃO ==========
  {
    id: '6.1',
    category: QuestionCategory.LIMPEZA,
    type: QuestionType.N,
    text: 'Existem procedimentos operacionais de limpeza e sanitização das áreas, instalações, equipamentos e materiais?',
    weight: 4,
    isFatal: false
  },
  {
    id: '6.2',
    category: QuestionCategory.LIMPEZA,
    type: QuestionType.N,
    text: 'Os equipamentos e utensílios são mantidos limpos, desinfetados e guardados em local apropriado?',
    weight: 4,
    isFatal: false
  },
  {
    id: '6.3',
    category: QuestionCategory.LIMPEZA,
    type: QuestionType.N,
    text: 'O lixo e resíduos da manipulação são depositados em recipientes tampados e identificados?',
    weight: 4,
    isFatal: false
  },
  {
    id: '6.3.1',
    category: QuestionCategory.LIMPEZA,
    type: QuestionType.R,
    text: 'São esvaziados fora da área de manipulação?',
    weight: 3,
    isFatal: false
  },
  {
    id: '6.4',
    category: QuestionCategory.LIMPEZA,
    type: QuestionType.N,
    text: 'O lixo e resíduos da manipulação têm um descarte apropriado?',
    weight: 4,
    isFatal: false
  },
  {
    id: '6.5',
    category: QuestionCategory.LIMPEZA,
    type: QuestionType.N,
    text: 'São seguidas as exigências da legislação vigente sobre gerenciamento dos resíduos?',
    weight: 4,
    isFatal: false
  },
  {
    id: '6.6',
    category: QuestionCategory.LIMPEZA,
    type: QuestionType.N,
    text: 'A farmácia possui "Programa de Controle Integrado de Pragas e Vetores"?',
    weight: 4,
    isFatal: false
  },
  {
    id: '6.6.1',
    category: QuestionCategory.LIMPEZA,
    type: QuestionType.N,
    text: 'São mantidos os registros?',
    weight: 3,
    isFatal: false
  },
  {
    id: '6.6.2',
    category: QuestionCategory.LIMPEZA,
    type: QuestionType.N,
    text: 'A aplicação dos produtos é realizada por empresa licenciada para este fim?',
    weight: 4,
    isFatal: false
  },
  {
    id: '6.7',
    category: QuestionCategory.LIMPEZA,
    type: QuestionType.N,
    text: 'Os produtos usados na limpeza e sanitização são apropriados?',
    weight: 4,
    isFatal: false
  },
  {
    id: '6.8',
    category: QuestionCategory.LIMPEZA,
    type: QuestionType.INF,
    text: 'A farmácia manipula saneantes domissanitários?',
    weight: 2,
    isFatal: false
  },
  {
    id: '6.8.1',
    category: QuestionCategory.LIMPEZA,
    type: QuestionType.N,
    text: 'Os produtos manipulados são destinados ao consumo próprio?',
    weight: 3,
    isFatal: false
  },
  {
    id: '6.8.2',
    category: QuestionCategory.LIMPEZA,
    type: QuestionType.N,
    text: 'A manipulação ocorre em sala apropriada?',
    weight: 3,
    isFatal: false
  },

  // ========== 7. MATÉRIAS-PRIMAS E MATERIAIS DE EMBALAGEM ==========
  // 7.1. Aquisição
  {
    id: '7.1.1',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Existem especificações para todas as matérias-primas e materiais de embalagem?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.1.1.1',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Estão atualizadas, autorizadas e datadas pelo responsável?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.1.2',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'As especificações das matérias-primas contêm os requisitos constantes no item 7.1.3. do Anexo I?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.1.3',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.R,
    text: 'A farmácia mantém cadastro do(s) fornecedor(es) dos materiais?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.1.4',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'As matérias-primas são adquiridas de fabricantes/fornecedores qualificados quanto aos critérios de qualidade, de acordo com as especificações?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.1.5',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Existe procedimento operacional escrito que detalhe todas as etapas do processo de qualificação dos fornecedores?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.1.6',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'São mantidos os registros do processo de qualificação?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.1.7',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'São mantidos os documentos apresentados por cada fornecedor/fabricante?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.1.8',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'A qualificação do fabricante/fornecedor foi feita abrangendo no mínimo: comprovação de regularidade sanitária, avaliação por análises de controle de qualidade, auditorias para verificação do cumprimento das normas de BPF, avaliação do histórico dos fornecimentos anteriores?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.1.9',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.INF,
    text: 'Quem foi o responsável pela realização das auditorias nos fornecedores?',
    weight: 2,
    isFatal: false
  },
  {
    id: '7.1.10',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'A farmácia mantém cópia do relatório da auditoria?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.1.11',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Os recipientes adquiridos e destinados ao envase dos produtos manipulados são atóxicos e compatíveis físico-quimicamente com a composição do seu conteúdo?',
    weight: 4,
    isFatal: false
  },
  // 7.2. Recebimento
  {
    id: '7.2.1',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'As matérias-primas são recebidas por pessoa treinada?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.2.2',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Existe procedimento para recebimento das matérias-primas e materiais de embalagem?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.2.3',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Todos os materiais são submetidos à inspeção de recebimento?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.2.4',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Existem registros do recebimento de matérias-primas e materiais de embalagem?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.2.5',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Se uma única remessa de material contiver lotes distintos, cada lote é levado em consideração, separadamente, para inspeção, análise e liberação?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.2.6',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Cada lote da matéria-prima é acompanhado do respectivo Certificado de Análise do fornecedor?',
    weight: 5,
    isFatal: true,
    suggestion: 'Todas as matérias-primas devem possuir Certificado de Análise do fornecedor.'
  },
  {
    id: '7.2.6.1',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Os Certificados de Análise do fornecedor são arquivados?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.2.6.2',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Os Certificados de Análise contêm informações claras e conclusivas, com todas as especificações acordadas com o farmacêutico?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.2.6.3',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'São datados, assinados, contêm a identificação do nome do fabricante/fornecedor e do seu responsável técnico com respectivo registro no Conselho de Classe?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.2.7',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'As matérias-primas e materiais de embalagem são identificados, armazenados e colocados em quarentena?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.2.7.1',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'São amostrados e analisados conforme especificações?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.2.7.2',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'São rotulados quanto à sua situação?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.2.8',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Os materiais reprovados na inspeção de recebimento são segregados e devolvidos ao fornecedor, atendendo a legislação em vigor?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.2.9',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.INF,
    text: 'A farmácia fraciona matérias-primas para uso próprio?',
    weight: 2,
    isFatal: false
  },
  {
    id: '7.2.9.1',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'O fracionamento ocorre em instalações e condições adequadas?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.2.9.2',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Os rótulos das matérias-primas fracionadas contêm identificação que permita a rastreabilidade desde a sua origem?',
    weight: 4,
    isFatal: false
  },
  // 7.3. Controle de Qualidade
  {
    id: '7.3.1',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.I,
    text: 'A farmácia possui área ou sala de controle de qualidade?',
    weight: 5,
    isFatal: true,
    suggestion: 'É obrigatória a existência de área ou sala específica para controle de qualidade.'
  },
  {
    id: '7.3.2',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.INF,
    text: 'A empresa centraliza as atividades de controle de qualidade de matérias-primas?',
    weight: 2,
    isFatal: false
  },
  {
    id: '7.3.3',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'A farmácia conta com profissional capacitado e habilitado para as atividades de controle de qualidade?',
    weight: 5,
    isFatal: true,
    suggestion: 'É necessário ter profissional capacitado e habilitado para controle de qualidade.'
  },
  {
    id: '7.3.4',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.I,
    text: 'Está equipada para realizar as análises legalmente estabelecidas?',
    weight: 5,
    isFatal: true,
    suggestion: 'A área de controle de qualidade deve estar equipada adequadamente para realizar as análises exigidas.'
  },
  {
    id: '7.3.5',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Os equipamentos e aparelhos estão instalados de maneira adequada para o seu correto funcionamento?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.3.6',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Existem procedimentos operacionais aprovados para a realização de amostragem, inspeção e ensaios dos insumos farmacêuticos e dos materiais de embalagem?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.3.7',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.R,
    text: 'A farmácia realiza monitoramento das condições ambientais das áreas envolvidas no processo de manipulação?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.3.7.1',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.R,
    text: 'Existem procedimentos para o monitoramento?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.3.7.2',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.R,
    text: 'Existem registros?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.3.8',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'As especificações e as respectivas referências farmacopéicas, Codex ou outras fontes de consulta, oficialmente reconhecidas, estão disponíveis no estabelecimento?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.3.9',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Os certificados de análise dos fornecedores são avaliados para verificar o atendimento às especificações?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.3.9.1',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Existem registros dessa avaliação?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.3.10',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.I,
    text: 'As matérias-primas são analisadas no seu recebimento, efetuando-se no mínimo os testes: caracteres organolépticos, solubilidade, pH, peso, volume, ponto de fusão, densidade, avaliação do laudo de análise do fabricante/fornecedor?',
    weight: 5,
    isFatal: true,
    suggestion: 'É obrigatório realizar análises mínimas das matérias-primas no recebimento.'
  },
  {
    id: '7.3.11',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Caso os fornecedores de matérias-primas não estejam qualificados, a farmácia realiza os demais ensaios farmacopéicos previstos para cada matéria-prima?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.3.12',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Na ausência de monografia oficial e métodos gerais inscritos nos compêndios reconhecidos pela ANVISA, os ensaios de controle de qualidade são realizados com base nas especificações e metodologias fornecidas pelo fabricante?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.3.13',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'As metodologias fornecidas pelo fabricante foram devidamente validadas e foi realizada a transferência analítica das metodologias para o laboratório responsável pela realização das análises?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.3.14',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.INF,
    text: 'A farmácia terceiriza alguma atividade de controle de qualidade de matéria-prima?',
    weight: 2,
    isFatal: false
  },
  {
    id: '7.3.14.1',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'A terceirização atende às disposições do Anexo I?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.3.15',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'A farmácia realiza, nas matérias-primas de origem vegetal, os testes para determinação dos caracteres organolépticos e determinação de materiais estranhos?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.3.16',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'A farmácia realiza também a avaliação dos caracteres macroscópicos das plantas íntegras ou grosseiramente rasuradas?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.3.17',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Para as matérias-primas líquidas de origem vegetal, além dos testes já mencionados (quando aplicáveis), é realizada a determinação da densidade?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.3.18',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Caso os fornecedores não sejam qualificados pela farmácia, ela realiza ainda os testes de umidade, determinação de cinzas totais, pesquisa de contaminação microbiológica, além de caracteres microscópicos para materiais fragmentados ou pós?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.3.19',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'A reprovação de insumos é notificada à Autoridade Sanitária, segundo legislação vigente?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.3.20',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.I,
    text: 'São mantidos os registros das análises realizadas pela farmácia e daquelas objeto de terceirização?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.3.21',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Os Certificados de Análise emitidos pela farmácia ou por empresa contratada são avaliados para verificar o atendimento às especificações?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.3.21.1',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Contêm informações claras e conclusivas, com todas as especificações e definição dos resultados?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.3.21.2',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'São datados, assinados e com identificação do responsável técnico e respectivo número de inscrição no seu Conselho Profissional?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.3.22',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Os equipamentos e instrumentos de medição e ensaios são periodicamente verificados e calibrados?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.3.23',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.R,
    text: 'A verificação dos equipamentos é feita por pessoal treinado, do próprio estabelecimento, empregando procedimento escrito?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.3.24',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'A calibração dos equipamentos é executada por pessoal capacitado, utilizando padrões rastreáveis à Rede Brasileira de Calibração?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.3.24.1',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Existem registros?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.3.25',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.R,
    text: 'Os equipamentos utilizados no laboratório de controle de qualidade são submetidos à manutenção preventiva e corretiva?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.3.26',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.R,
    text: 'Existe um programa para manutenção dos equipamentos do controle de qualidade?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.3.27',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.R,
    text: 'Existem procedimentos operacionais para manutenção dos equipamentos?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.3.28',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.R,
    text: 'São mantidos os registros de manutenção?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.3.29',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.R,
    text: 'A amostragem dos materiais é executada em local específico e sob condições ambientais adequadas?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.3.30',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'A amostragem dos materiais obedece a procedimentos operacionais?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.3.31',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'A amostragem é realizada de forma a evitar a contaminação cruzada?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.3.32',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Todos os utensílios utilizados no processo de amostragem que entrarem em contato com os materiais são limpos, sanitizados e guardados em locais apropriados?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.3.33',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.I,
    text: 'A reanálise das matérias primas, quando realizada, ocorre dentro de seus prazos de validade?',
    weight: 4,
    isFatal: false
  },
  // 7.4. Armazenamento
  {
    id: '7.4.1',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'A área ou sala de armazenamento tem capacidade suficiente para assegurar a estocagem ordenada das diversas categorias de matérias-primas, materiais de embalagem e outros produtos?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.4.2',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'A área ou sala de armazenamento está limpa?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.4.3',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'As condições de temperatura e umidade são compatíveis com os produtos armazenados?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.4.4',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'As condições de temperatura e umidade de armazenamento estão definidas em procedimento?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.4.4.1',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'São monitoradas e registradas?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.4.5',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'As matérias-primas, materiais de embalagem e outros produtos são armazenados sob condições apropriadas de modo a preservar a identidade, integridade, qualidade e segurança dos mesmos?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.4.6',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Existe área ou local segregado e identificado ou sistema que permita a estocagem de produtos, em quarentena, em condições de segurança?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.4.7',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Existe área ou local segregado e identificado ou sistema para estocagem de matérias primas, materiais de embalagem e produtos, reprovados, devolvidos ou com prazo de validade vencido, em condições de segurança?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.4.8',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.I,
    text: 'A farmácia dispõe de armário resistente e/ou sala própria, fechados com chave ou outro dispositivo que ofereça segurança para a guarda de substâncias e medicamentos sujeitos a regime de controle especial?',
    weight: 5,
    isFatal: true,
    suggestion: 'Substâncias controladas devem ser armazenadas em local seguro e trancado.'
  },
  {
    id: '7.4.9',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.I,
    text: 'As substâncias que foram submetidas a processo de diluição são armazenadas em local distinto das suas matérias-primas ativas de origem?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.4.10',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'A farmácia dispõe de local e equipamentos seguros e protegidos para o armazenamento de produtos inflamáveis, cáusticos, corrosivos e explosivos?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.4.11',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.INF,
    text: 'Existe necessidade de câmara frigorífica e ou refrigerador?',
    weight: 2,
    isFatal: false
  },
  {
    id: '7.4.12',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Os produtos e matérias primas instáveis a variação de temperatura estão armazenados em refrigerador?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.4.12.1',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Esse refrigerador é exclusivo para guarda de matérias-primas e produtos farmacêuticos?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.4.12.2',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Existem controle e registro de temperatura?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.4.13',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Todos os materiais são armazenados e manuseados sob condições apropriadas e de forma ordenada, de modo a preservar a identidade, integridade química, física e microbiológica, garantindo a qualidade e segurança dos mesmos?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.4.14',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Os materiais armazenados são mantidos afastados do piso, paredes e teto, com espaçamento apropriado para permitir a limpeza e inspeção?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.4.15',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Os materiais são estocados em locais identificados, de modo a facilitar a sua localização, sem riscos de troca?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.4.16',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Os rótulos das matérias-primas armazenadas apresentam, no mínimo: denominação do produto, identificação do fornecedor, número do lote, teor/potência, data de fabricação, prazo de validade, condições de armazenamento e situação interna?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.4.17',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.I,
    text: 'As matérias-primas de origem e seus diluídos estão claramente identificados com os alertas adequados?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.4.18',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'A farmácia realiza o controle de estoque das matérias-primas registrando as entradas e saídas de cada uma delas?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.4.19',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.I,
    text: 'As matérias-primas armazenadas encontram-se dentro do prazo de validade?',
    weight: 4,
    isFatal: false
  },
  {
    id: '7.4.20',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.INF,
    text: 'Qual o procedimento adotado pela farmácia nos casos em que ocorra o vencimento do prazo de validade das matérias primas?',
    weight: 2,
    isFatal: false
  },
  {
    id: '7.4.20.1',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Existe procedimento escrito?',
    weight: 3,
    isFatal: false
  },
  {
    id: '7.4.20.2',
    category: QuestionCategory.MATERIAS_PRIMAS,
    type: QuestionType.N,
    text: 'Existem registros?',
    weight: 3,
    isFatal: false
  },

  // ========== 8. ÁGUA ==========
  // 8.1. Água Potável
  {
    id: '8.1.1',
    category: QuestionCategory.AGUA,
    type: QuestionType.I,
    text: 'A farmácia é abastecida com água potável?',
    weight: 5,
    isFatal: true,
    suggestion: 'A farmácia deve ser abastecida exclusivamente com água potável.'
  },
  {
    id: '8.1.2',
    category: QuestionCategory.AGUA,
    type: QuestionType.INF,
    text: 'Possui caixa d\'água própria?',
    weight: 2,
    isFatal: false
  },
  {
    id: '8.1.2.1',
    category: QuestionCategory.AGUA,
    type: QuestionType.N,
    text: 'Está devidamente protegida para evitar a entrada de animais de qualquer porte ou quaisquer outros contaminantes?',
    weight: 4,
    isFatal: false
  },
  {
    id: '8.1.3',
    category: QuestionCategory.AGUA,
    type: QuestionType.N,
    text: 'Existem procedimentos para a limpeza da caixa d\'água?',
    weight: 3,
    isFatal: false
  },
  {
    id: '8.1.3.1',
    category: QuestionCategory.AGUA,
    type: QuestionType.N,
    text: 'São mantidos os registros que comprovem sua realização?',
    weight: 3,
    isFatal: false
  },
  {
    id: '8.1.4',
    category: QuestionCategory.AGUA,
    type: QuestionType.N,
    text: 'Caso se trate de caixa d\'água de uso coletivo, a farmácia tem acesso aos documentos referentes à limpeza dos reservatórios?',
    weight: 3,
    isFatal: false
  },
  {
    id: '8.1.4.1',
    category: QuestionCategory.AGUA,
    type: QuestionType.N,
    text: 'Mantém cópia dos mesmos?',
    weight: 2,
    isFatal: false
  },
  {
    id: '8.1.5',
    category: QuestionCategory.AGUA,
    type: QuestionType.N,
    text: 'A farmácia possui procedimento escrito para realizar amostragem da água e que determine a periodicidade das análises?',
    weight: 3,
    isFatal: false
  },
  {
    id: '8.1.6',
    category: QuestionCategory.AGUA,
    type: QuestionType.N,
    text: 'Existem especificações para água potável?',
    weight: 3,
    isFatal: false
  },
  {
    id: '8.1.7',
    category: QuestionCategory.AGUA,
    type: QuestionType.N,
    text: 'São feitos testes físico-químicos e microbiológicos, no mínimo a cada seis meses, para monitorar a qualidade da água de abastecimento?',
    weight: 4,
    isFatal: false
  },
  {
    id: '8.1.7.1',
    category: QuestionCategory.AGUA,
    type: QuestionType.N,
    text: 'São mantidos os registros?',
    weight: 3,
    isFatal: false
  },
  {
    id: '8.1.7.2',
    category: QuestionCategory.AGUA,
    type: QuestionType.N,
    text: 'São realizadas, no mínimo, as seguintes análises da água potável: pH, cor aparente, turbidez, cloro residual livre, sólidos totais dissolvidos, contagem total de bactérias, coliformes totais, presença de E. coli, coliformes termorresistentes?',
    weight: 4,
    isFatal: false
  },
  {
    id: '8.1.7.3',
    category: QuestionCategory.AGUA,
    type: QuestionType.N,
    text: 'Estão estabelecidas e registradas as medidas adotadas em caso de laudo insatisfatório da água de abastecimento?',
    weight: 3,
    isFatal: false
  },
  // 8.2. Água Purificada
  {
    id: '8.2.1',
    category: QuestionCategory.AGUA,
    type: QuestionType.I,
    text: 'A água utilizada na manipulação é obtida a partir da água potável?',
    weight: 5,
    isFatal: true,
    suggestion: 'A água para manipulação deve ser purificada a partir de água potável.'
  },
  {
    id: '8.2.2',
    category: QuestionCategory.AGUA,
    type: QuestionType.N,
    text: 'É tratada em um sistema que assegure a obtenção da água com especificações farmacopéicas para água purificada?',
    weight: 5,
    isFatal: true,
    suggestion: 'É obrigatório possuir sistema de purificação de água que atenda às especificações farmacopéicas.'
  },
  {
    id: '8.2.2.1',
    category: QuestionCategory.AGUA,
    type: QuestionType.INF,
    text: 'Qual o sistema utilizado? Especifique.',
    weight: 2,
    isFatal: false
  },
  {
    id: '8.2.2.2',
    category: QuestionCategory.AGUA,
    type: QuestionType.INF,
    text: 'Qual é a capacidade em litros/hora?',
    weight: 2,
    isFatal: false
  },
  {
    id: '8.2.3',
    category: QuestionCategory.AGUA,
    type: QuestionType.N,
    text: 'Há procedimentos escritos para a limpeza e manutenção do sistema de purificação da água?',
    weight: 4,
    isFatal: false
  },
  {
    id: '8.2.3.1',
    category: QuestionCategory.AGUA,
    type: QuestionType.N,
    text: 'São mantidos os registros?',
    weight: 3,
    isFatal: false
  },
  {
    id: '8.2.4',
    category: QuestionCategory.AGUA,
    type: QuestionType.N,
    text: 'São realizados testes físico-químicos e microbiológicos da água purificada, no mínimo mensalmente, com o objetivo de monitorar o processo de obtenção de água?',
    weight: 4,
    isFatal: false
  },
  {
    id: '8.2.5',
    category: QuestionCategory.AGUA,
    type: QuestionType.N,
    text: 'A farmácia possui procedimento escrito para a coleta e amostragem da água?',
    weight: 3,
    isFatal: false
  },
  {
    id: '8.2.5.1',
    category: QuestionCategory.AGUA,
    type: QuestionType.R,
    text: 'Está incluído como ponto de amostragem o local usado para armazenamento da água purificada?',
    weight: 3,
    isFatal: false
  },
  {
    id: '8.2.6',
    category: QuestionCategory.AGUA,
    type: QuestionType.I,
    text: 'Estão estabelecidas e registradas as medidas adotadas em caso de laudo insatisfatório da água purificada?',
    weight: 4,
    isFatal: false
  },
  {
    id: '8.2.6.1',
    category: QuestionCategory.AGUA,
    type: QuestionType.N,
    text: 'É avaliada a efetividade das medidas adotadas por meio de uma nova análise?',
    weight: 3,
    isFatal: false
  },
  {
    id: '8.2.7',
    category: QuestionCategory.AGUA,
    type: QuestionType.INF,
    text: 'Existem depósitos para a água purificada?',
    weight: 2,
    isFatal: false
  },
  {
    id: '8.2.7.1',
    category: QuestionCategory.AGUA,
    type: QuestionType.INF,
    text: 'Qual a capacidade?',
    weight: 1,
    isFatal: false
  },
  {
    id: '8.2.7.2',
    category: QuestionCategory.AGUA,
    type: QuestionType.INF,
    text: 'Qual o material utilizado?',
    weight: 1,
    isFatal: false
  },
  {
    id: '8.2.8',
    category: QuestionCategory.AGUA,
    type: QuestionType.R,
    text: 'Existe algum cuidado para evitar a contaminação microbiológica da água armazenada?',
    weight: 3,
    isFatal: false
  },
  {
    id: '8.2.8.1',
    category: QuestionCategory.AGUA,
    type: QuestionType.INF,
    text: 'Qual?',
    weight: 1,
    isFatal: false
  },
  {
    id: '8.2.9',
    category: QuestionCategory.AGUA,
    type: QuestionType.N,
    text: 'É respeitada a exigência de armazenamento da água purificada por um período inferior a 24 horas e em condições que garantam a manutenção da qualidade da mesma?',
    weight: 4,
    isFatal: false
  },
  {
    id: '8.2.9.1',
    category: QuestionCategory.AGUA,
    type: QuestionType.R,
    text: 'É realizada a sanitização dos recipientes a cada troca de água?',
    weight: 3,
    isFatal: false
  },
  {
    id: '8.2.10',
    category: QuestionCategory.AGUA,
    type: QuestionType.INF,
    text: 'Qual o consumo médio de água purificada?',
    weight: 1,
    isFatal: false
  },

  // ========== 9. MANIPULAÇÃO ==========
  {
    id: '9.1',
    category: QuestionCategory.MANIPULACAO,
    type: QuestionType.N,
    text: 'A farmácia dispõe de sala ou local específico para a pesagem das matérias-primas, dotado de sistema de exaustão?',
    weight: 5,
    isFatal: true,
    suggestion: 'É obrigatória a existência de sala específica para pesagem com sistema de exaustão.'
  },
  {
    id: '9.2',
    category: QuestionCategory.MANIPULACAO,
    type: QuestionType.INF,
    text: 'O local destinado à pesagem está localizado dentro de cada sala de manipulação?',
    weight: 2,
    isFatal: false
  },
  {
    id: '9.3',
    category: QuestionCategory.MANIPULACAO,
    type: QuestionType.N,
    text: 'As dimensões e instalações da sala ou local de pesagem são compatíveis com o volume de matérias-primas a serem pesadas?',
    weight: 3,
    isFatal: false
  },
  {
    id: '9.4',
    category: QuestionCategory.MANIPULACAO,
    type: QuestionType.R,
    text: 'As embalagens das matérias-primas são submetidas à limpeza prévia antes da pesagem?',
    weight: 3,
    isFatal: false
  },
  {
    id: '9.5',
    category: QuestionCategory.MANIPULACAO,
    type: QuestionType.N,
    text: 'Os materiais para pesagem e medida (recipientes, espátulas, pipetas e outros) estão limpos?',
    weight: 4,
    isFatal: false
  },
  {
    id: '9.6',
    category: QuestionCategory.MANIPULACAO,
    type: QuestionType.N,
    text: 'Após a pesagem e/ou medida, os materiais são etiquetados imediatamente, quando for o caso, a fim de evitar trocas?',
    weight: 4,
    isFatal: false
  },
  {
    id: '9.7',
    category: QuestionCategory.MANIPULACAO,
    type: QuestionType.INF,
    text: 'Os recipientes utilizados na pesagem/medida das substâncias são reutilizados para outras pesagens?',
    weight: 2,
    isFatal: false
  },
  {
    id: '9.7.1',
    category: QuestionCategory.MANIPULACAO,
    type: QuestionType.N,
    text: 'No caso de serem reutilizados, são limpos adequadamente?',
    weight: 4,
    isFatal: false
  },
  {
    id: '9.8',
    category: QuestionCategory.MANIPULACAO,
    type: QuestionType.N,
    text: 'Os laboratórios de manipulação possuem dimensões que facilitem, ao máximo, a limpeza, manutenção e outras operações a serem executadas?',
    weight: 3,
    isFatal: false
  },
  {
    id: '9.9',
    category: QuestionCategory.MANIPULACAO,
    type: QuestionType.I,
    text: 'O laboratório de manipulação de sólidos é totalmente segregado dos demais?',
    weight: 4,
    isFatal: false
  },
  {
    id: '9.10',
    category: QuestionCategory.MANIPULACAO,
    type: QuestionType.I,
    text: 'O laboratório de manipulação de semi-sólidos e líquidos é totalmente segregado dos demais?',
    weight: 4,
    isFatal: false
  },
  {
    id: '9.11',
    category: QuestionCategory.MANIPULACAO,
    type: QuestionType.INF,
    text: 'São utilizadas na manipulação substâncias voláteis, tóxicas, corrosivas, cáusticas ou irritantes?',
    weight: 2,
    isFatal: false
  },
  {
    id: '9.11.1',
    category: QuestionCategory.MANIPULACAO,
    type: QuestionType.N,
    text: 'A manipulação destas substâncias é realizada em capela com exaustão?',
    weight: 4,
    isFatal: false
  },
  {
    id: '9.12',
    category: QuestionCategory.MANIPULACAO,
    type: QuestionType.N,
    text: 'Existe procedimento para avaliação farmacêutica das prescrições?',
    weight: 5,
    isFatal: true,
    suggestion: 'É obrigatório ter procedimento escrito para avaliação farmacêutica das prescrições.'
  },
  {
    id: '9.12.1',
    category: QuestionCategory.MANIPULACAO,
    type: QuestionType.N,
    text: 'O procedimento contempla às exigências do Regulamento Técnico?',
    weight: 4,
    isFatal: false
  },
  {
    id: '9.12.2',
    category: QuestionCategory.MANIPULACAO,
    type: QuestionType.N,
    text: 'Somente são atendidas prescrições que atendam aos itens 5.17.1 a 5.17.4 do Regulamento Técnico?',
    weight: 5,
    isFatal: true,
    suggestion: 'Apenas prescrições que atendam aos requisitos legais devem ser aceitas.'
  },
  {
    id: '9.12.3',
    category: QuestionCategory.MANIPULACAO,
    type: QuestionType.R,
    text: 'Verifica-se o correto preenchimento da prescrição, conforme o item 5.18.4. do Regulamento Técnico?',
    weight: 4,
    isFatal: false
  },
  {
    id: '9.13',
    category: QuestionCategory.MANIPULACAO,
    type: QuestionType.N,
    text: 'Com base nos dados da prescrição, são realizados e registrados os cálculos necessários para a manipulação do medicamento?',
    weight: 4,
    isFatal: false
  },
  {
    id: '9.14',
    category: QuestionCategory.MANIPULACAO,
    type: QuestionType.N,
    text: 'Existem procedimentos operacionais escritos para manipulação das diferentes formas farmacêuticas preparadas na farmácia?',
    weight: 5,
    isFatal: true,
    suggestion: 'Devem existir procedimentos operacionais escritos para todas as formas farmacêuticas manipuladas.'
  },
  {
    id: '9.15',
    category: QuestionCategory.MANIPULACAO,
    type: QuestionType.N,
    text: 'A farmácia garante que todos os produtos manipulados sejam rastreáveis?',
    weight: 5,
    isFatal: true,
    suggestion: 'Todos os produtos manipulados devem ser rastreáveis através de registros adequados.'
  },
  {
    id: '9.16',
    category: QuestionCategory.MANIPULACAO,
    type: QuestionType.N,
    text: 'Os excipientes utilizados na manipulação de medicamentos são padronizados pela farmácia, de acordo com embasamento técnico-científico?',
    weight: 4,
    isFatal: false
  },
  {
    id: '9.17',
    category: QuestionCategory.MANIPULACAO,
    type: QuestionType.I,
    text: 'A farmácia possui Livro de Receituário e registra as informações referentes à prescrição de cada medicamento manipulado?',
    weight: 5,
    isFatal: true,
    suggestion: 'É obrigatório manter Livro de Receituário com todas as informações das prescrições.'
  },
  {
    id: '9.17.1',
    category: QuestionCategory.MANIPULACAO,
    type: QuestionType.INF,
    text: 'O Livro de Receituário é informatizado?',
    weight: 1,
    isFatal: false
  },
  {
    id: '9.18',
    category: QuestionCategory.MANIPULACAO,
    type: QuestionType.R,
    text: 'O Livro de Receituário, informatizado ou não, contém Termos de Abertura e de Encerramento lavrados pela Autoridade Sanitária local?',
    weight: 4,
    isFatal: false
  },
  {
    id: '9.19',
    category: QuestionCategory.MANIPULACAO,
    type: QuestionType.N,
    text: 'São registradas no Livro de Receituário as informações sobre: número de ordem, nome e endereço do paciente, nome do prescritor, data da prescrição, identificação da fórmula, quantidade manipulada, data da manipulação, identificação do responsável pela manipulação?',
    weight: 5,
    isFatal: true,
    suggestion: 'Todas as informações obrigatórias devem ser registradas no Livro de Receituário.'
  }
];
