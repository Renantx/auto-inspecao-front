import { Injectable } from '@angular/core';
import { Question, QuestionCategory, QuestionType, InspectionForm } from '../models/question.model';
import { COMPLETE_QUESTIONS } from '../data/complete-questions';
import { QUESTIONS_SECTIONS_10_20 } from '../data/questions-sections-10-20';

@Injectable({
  providedIn: 'root'
})
export class InspectionDataService {
  
  getQuestions(): Question[] {
    // Retorna todas as questões do roteiro completo (seções 1-20 do Anexo VII - RDC 67/2007)
    return [...COMPLETE_QUESTIONS, ...QUESTIONS_SECTIONS_10_20];
    
    /* 
    // Versão com questões selecionadas (descomente para usar):
    return [
      // IDENTIFICAÇÃO DA FARMÁCIA
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
        text: 'CNPJ',
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
        id: '1.8',
        category: QuestionCategory.IDENTIFICACAO,
        type: QuestionType.I,
        text: 'Nome do Responsável Técnico presente?',
        weight: 5,
        isFatal: true,
        suggestion: 'O Responsável Técnico deve estar presente durante o horário de funcionamento da farmácia.'
      },

      // CONDIÇÕES GERAIS
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
        text: 'A dispensação das preparações magistrais é feita somente mediante prescrição de profissional habilitado?',
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

      // RECURSOS HUMANOS
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
        id: '3.4',
        category: QuestionCategory.RECURSOS_HUMANOS,
        type: QuestionType.N,
        text: 'Demonstra possuir estrutura organizacional e de pessoal suficiente para o desenvolvimento de suas atividades?',
        weight: 4,
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
        id: '3.18',
        category: QuestionCategory.RECURSOS_HUMANOS,
        type: QuestionType.N,
        text: 'Os funcionários envolvidos na manipulação estão adequadamente paramentados, utilizando equipamentos de proteção individual (EPIs)?',
        weight: 5,
        isFatal: true,
        suggestion: 'Todos os funcionários envolvidos na manipulação devem estar adequadamente paramentados com EPIs.'
      },

      // INFRAESTRUTURA FÍSICA
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
        id: '4.3',
        category: QuestionCategory.INFRAESTRUTURA,
        type: QuestionType.N,
        text: 'Os ambientes possuem superfícies internas (pisos, paredes e teto) lisas e impermeáveis, sem rachaduras, resistentes aos agentes sanitizantes e facilmente laváveis?',
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
        id: '4.21',
        category: QuestionCategory.INFRAESTRUTURA,
        type: QuestionType.N,
        text: 'Os ambientes de armazenamento, manipulação e do controle da qualidade são protegidos contra a entrada de aves, insetos, roedores ou outros animais e poeira?',
        weight: 5,
        isFatal: true,
        suggestion: 'Os ambientes devem estar completamente protegidos contra pragas e poeira.'
      },

      // MATERIAIS, EQUIPAMENTOS E UTENSÍLIOS
      {
        id: '5.1',
        category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
        type: QuestionType.N,
        text: 'A farmácia é dotada dos materiais, equipamentos e utensílios básicos (balanças de precisão, pesos padrão, vidraria verificada, sistema de purificação de água, refrigerador, termômetros, higrômetros, bancadas adequadas, lixeiras identificadas, armários fechados)?',
        weight: 5,
        isFatal: true,
        suggestion: 'A farmácia deve possuir todos os equipamentos básicos necessários para manipulação.'
      },
      {
        id: '5.6.1',
        category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
        type: QuestionType.N,
        text: 'As balanças estão devidamente calibradas?',
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
        id: '5.10',
        category: QuestionCategory.MATERIAIS_EQUIPAMENTOS,
        type: QuestionType.N,
        text: 'As calibrações dos equipamentos e instrumentos de medição são executadas por empresa certificada, utilizando padrões rastreáveis à Rede Brasileira de Calibração?',
        weight: 4,
        isFatal: false
      },

      // LIMPEZA E SANITIZAÇÃO
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

      // MATÉRIAS-PRIMAS E MATERIAIS DE EMBALAGEM
      {
        id: '7.1.1',
        category: QuestionCategory.MATERIAS_PRIMAS,
        type: QuestionType.N,
        text: 'Existem especificações para todas as matérias-primas e materiais de embalagem?',
        weight: 4,
        isFatal: false
      },
      {
        id: '7.1.4',
        category: QuestionCategory.MATERIAS_PRIMAS,
        type: QuestionType.N,
        text: 'As matérias-primas são adquiridas de fabricantes/fornecedores qualificados quanto aos critérios de qualidade?',
        weight: 4,
        isFatal: false
      },
      {
        id: '7.2.1',
        category: QuestionCategory.MATERIAS_PRIMAS,
        type: QuestionType.N,
        text: 'As matérias-primas são recebidas por pessoa treinada?',
        weight: 3,
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
        id: '7.3.1',
        category: QuestionCategory.MATERIAS_PRIMAS,
        type: QuestionType.I,
        text: 'A farmácia possui área ou sala de controle de qualidade?',
        weight: 5,
        isFatal: true,
        suggestion: 'É obrigatória a existência de área ou sala específica para controle de qualidade.'
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
        id: '7.4.8',
        category: QuestionCategory.MATERIAS_PRIMAS,
        type: QuestionType.I,
        text: 'A farmácia dispõe de armário resistente e/ou sala própria, fechados com chave ou outro dispositivo que ofereça segurança para a guarda de substâncias e medicamentos sujeitos a regime de controle especial?',
        weight: 5,
        isFatal: true,
        suggestion: 'Substâncias controladas devem ser armazenadas em local seguro e trancado.'
      },

      // ÁGUA
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
        id: '8.2.4',
        category: QuestionCategory.AGUA,
        type: QuestionType.N,
        text: 'São realizados testes físico-químicos e microbiológicos da água purificada, no mínimo mensalmente?',
        weight: 4,
        isFatal: false
      },

      // MANIPULAÇÃO
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
        id: '9.12',
        category: QuestionCategory.MANIPULACAO,
        type: QuestionType.N,
        text: 'Existe procedimento para avaliação farmacêutica das prescrições?',
        weight: 5,
        isFatal: true,
        suggestion: 'É obrigatório ter procedimento escrito para avaliação farmacêutica das prescrições.'
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
        id: '9.17',
        category: QuestionCategory.MANIPULACAO,
        type: QuestionType.I,
        text: 'A farmácia possui Livro de Receituário e registra as informações referentes à prescrição de cada medicamento manipulado?',
        weight: 5,
        isFatal: true,
        suggestion: 'É obrigatório manter Livro de Receituário com todas as informações das prescrições.'
      }
    ];
    */
  }

  createEmptyForm(): InspectionForm {
    return {
      farmaciaNome: '',
      farmaciaCNPJ: '',
      responsavelTecnico: '',
      crf: '',
      dataInspecao: new Date(),
      questions: this.getQuestions()
    };
  }
}
