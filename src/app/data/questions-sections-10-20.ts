// Questões das seções 10 a 20 do Roteiro de Inspeção RDC 67/2007 - ANVISA (Anexo VII)

import { Question, QuestionCategory, QuestionType } from '../models/question.model';

export const QUESTIONS_SECTIONS_10_20: Question[] = [
  // ========== 10. DOS CONTROLES ==========
  {
    id: '10.1.1',
    category: QuestionCategory.CONTROLES,
    type: QuestionType.N,
    text: 'São realizados os ensaios previstos no Anexo I em todas as preparações magistrais e oficinais manipuladas?',
    weight: 5,
    isFatal: true,
    suggestion: 'Realizar os ensaios previstos no Anexo I em todas as preparações magistrais e oficinais.'
  },
  {
    id: '10.1.2',
    category: QuestionCategory.CONTROLES,
    type: QuestionType.N,
    text: 'Os ensaios são realizados no próprio estabelecimento?',
    weight: 4,
    isFatal: false
  },
  {
    id: '10.1.3',
    category: QuestionCategory.CONTROLES,
    type: QuestionType.N,
    text: 'Os resultados são registrados na respectiva ordem de manipulação?',
    weight: 4,
    isFatal: false
  },
  {
    id: '10.1.4',
    category: QuestionCategory.CONTROLES,
    type: QuestionType.R,
    text: 'Quando realizado o ensaio de peso médio, são calculados também o desvio padrão e o coeficiente de variação em relação ao peso médio?',
    weight: 4,
    isFatal: false
  },
  {
    id: '10.1.5',
    category: QuestionCategory.CONTROLES,
    type: QuestionType.N,
    text: 'Os resultados são avaliados pelo farmacêutico, com vistas à aprovação ou não da preparação para dispensação?',
    weight: 5,
    isFatal: true,
    suggestion: 'O farmacêutico deve avaliar os resultados antes da liberação para dispensação.'
  },
  {
    id: '10.2.1',
    category: QuestionCategory.CONTROLES,
    type: QuestionType.INF,
    text: 'O estabelecimento manipula formas farmacêuticas sólidas?',
    weight: 1,
    isFatal: false
  },
  {
    id: '10.2.2',
    category: QuestionCategory.CONTROLES,
    type: QuestionType.N,
    text: 'É realizado o monitoramento do processo de diluição, conforme estabelecido no Anexo I?',
    weight: 4,
    isFatal: false
  },
  {
    id: '10.2.3',
    category: QuestionCategory.CONTROLES,
    type: QuestionType.N,
    text: 'É realizado o monitoramento do processo de manipulação das formas farmacêuticas sólidas, conforme Anexo I?',
    weight: 4,
    isFatal: false
  },
  {
    id: '10.2.4',
    category: QuestionCategory.CONTROLES,
    type: QuestionType.N,
    text: 'Existe procedimento operacional que defina toda a metodologia para a execução do monitoramento?',
    weight: 4,
    isFatal: false
  },
  {
    id: '10.2.5',
    category: QuestionCategory.CONTROLES,
    type: QuestionType.N,
    text: 'Os resultados de todas as análises são registrados e arquivados no estabelecimento à disposição da Autoridade Sanitária?',
    weight: 4,
    isFatal: false
  },
  {
    id: '10.2.6',
    category: QuestionCategory.CONTROLES,
    type: QuestionType.N,
    text: 'Estão estabelecidas e registradas as medidas adotadas em caso de laudo insatisfatório?',
    weight: 4,
    isFatal: false
  },
  {
    id: '10.2.6.1',
    category: QuestionCategory.CONTROLES,
    type: QuestionType.N,
    text: 'É avaliada a efetividade das medidas adotadas por meio de uma nova análise?',
    weight: 3,
    isFatal: false
  },

  // ========== 11. MANIPULAÇÃO DO ESTOQUE MÍNIMO ==========
  {
    id: '11.1',
    category: QuestionCategory.ESTOQUE_MINIMO,
    type: QuestionType.INF,
    text: 'A farmácia mantém estoque mínimo?',
    weight: 1,
    isFatal: false
  },
  {
    id: '11.1.1',
    category: QuestionCategory.ESTOQUE_MINIMO,
    type: QuestionType.INF,
    text: 'De que tipo de formulações (estoque mínimo)?',
    weight: 1,
    isFatal: false
  },
  {
    id: '11.2',
    category: QuestionCategory.ESTOQUE_MINIMO,
    type: QuestionType.N,
    text: 'São atendidas as disposições do Anexo I para manutenção de estoque mínimo?',
    weight: 4,
    isFatal: false
  },
  {
    id: '11.3',
    category: QuestionCategory.ESTOQUE_MINIMO,
    type: QuestionType.N,
    text: 'As preparações para compor estoque mínimo atendem a uma ordem de manipulação específica para cada lote, seguindo uma formulação padrão?',
    weight: 4,
    isFatal: false
  },
  {
    id: '11.4',
    category: QuestionCategory.ESTOQUE_MINIMO,
    type: QuestionType.N,
    text: 'As preparações de estoque mínimo estão rotuladas corretamente?',
    weight: 4,
    isFatal: false
  },
  {
    id: '11.5',
    category: QuestionCategory.ESTOQUE_MINIMO,
    type: QuestionType.N,
    text: 'Após a manipulação, o produto é submetido à inspeção visual e conferência de todas as etapas do processo, verificando a clareza e exatidão das informações do rótulo?',
    weight: 4,
    isFatal: false
  },
  {
    id: '11.6.1',
    category: QuestionCategory.ESTOQUE_MINIMO,
    type: QuestionType.N,
    text: 'São realizados controles em processo, devidamente documentados, para garantir as especificações estabelecidas para o produto?',
    weight: 4,
    isFatal: false
  },
  {
    id: '11.6.2',
    category: QuestionCategory.ESTOQUE_MINIMO,
    type: QuestionType.N,
    text: 'A farmácia possui procedimentos operacionais escritos e está devidamente equipada para realizar análise lote a lote dos produtos de estoque mínimo?',
    weight: 4,
    isFatal: false
  },
  {
    id: '11.6.3',
    category: QuestionCategory.ESTOQUE_MINIMO,
    type: QuestionType.N,
    text: 'São realizadas todas as análises aplicáveis às formulações do estoque mínimo previstas no Anexo I?',
    weight: 5,
    isFatal: true,
    suggestion: 'Realizar todas as análises aplicáveis ao estoque mínimo conforme Anexo I.'
  },
  {
    id: '11.6.3.1',
    category: QuestionCategory.ESTOQUE_MINIMO,
    type: QuestionType.N,
    text: 'São mantidos os registros das análises do estoque mínimo?',
    weight: 3,
    isFatal: false
  },
  {
    id: '11.6.3.2',
    category: QuestionCategory.ESTOQUE_MINIMO,
    type: QuestionType.N,
    text: 'As análises são realizadas conforme metodologia oficial e em amostragem estatisticamente representativa do tamanho do lote?',
    weight: 4,
    isFatal: false
  },
  {
    id: '11.6.4',
    category: QuestionCategory.ESTOQUE_MINIMO,
    type: QuestionType.N,
    text: 'A farmácia dispõe de laboratório de controle de qualidade capacitado para realização de controle em processo e análise da preparação manipulada do estoque mínimo?',
    weight: 4,
    isFatal: false
  },
  {
    id: '11.6.5',
    category: QuestionCategory.ESTOQUE_MINIMO,
    type: QuestionType.INF,
    text: 'As análises referidas nos itens "h", "i" e "j" do item 11.2 do Anexo I são terceirizadas?',
    weight: 1,
    isFatal: false
  },
  {
    id: '11.6.5.1',
    category: QuestionCategory.ESTOQUE_MINIMO,
    type: QuestionType.R,
    text: 'Existe contrato formal para terceirização de análises do estoque mínimo?',
    weight: 3,
    isFatal: false
  },
  {
    id: '11.6.6',
    category: QuestionCategory.ESTOQUE_MINIMO,
    type: QuestionType.N,
    text: 'No caso das bases galênicas, é realizado o monitoramento mensal da pureza microbiológica e adotado sistema de rodízio considerando o tipo de base e manipulador?',
    weight: 4,
    isFatal: false
  },
  {
    id: '11.6.6.1',
    category: QuestionCategory.ESTOQUE_MINIMO,
    type: QuestionType.N,
    text: 'Todos os tipos de base são analisados pelo menos uma vez ao ano?',
    weight: 3,
    isFatal: false
  },
  {
    id: '11.6.7',
    category: QuestionCategory.ESTOQUE_MINIMO,
    type: QuestionType.N,
    text: 'É mantida amostra de referência de cada lote de estoque mínimo preparado, até 4 meses após o vencimento do medicamento ou da base galênica?',
    weight: 4,
    isFatal: false
  },
  {
    id: '11.6.7.1',
    category: QuestionCategory.ESTOQUE_MINIMO,
    type: QuestionType.N,
    text: 'A quantidade de amostra mantida é suficiente para a realização de duas análises completas?',
    weight: 3,
    isFatal: false
  },

  // ========== 12. ROTULAGEM E EMBALAGEM ==========
  {
    id: '12.1',
    category: QuestionCategory.ROTULAGEM_EMBALAGEM,
    type: QuestionType.N,
    text: 'Existem procedimentos operacionais escritos para rotulagem e embalagem de produtos manipulados?',
    weight: 4,
    isFatal: false
  },
  {
    id: '12.2',
    category: QuestionCategory.ROTULAGEM_EMBALAGEM,
    type: QuestionType.R,
    text: 'Os rótulos são armazenados de forma segura e com acesso restrito?',
    weight: 3,
    isFatal: false
  },
  {
    id: '12.3',
    category: QuestionCategory.ROTULAGEM_EMBALAGEM,
    type: QuestionType.N,
    text: 'As preparações magistrais e oficinais estão rotuladas corretamente?',
    weight: 5,
    isFatal: true,
    suggestion: 'Garantir que todas as preparações estejam rotuladas conforme legislação.'
  },
  {
    id: '12.4',
    category: QuestionCategory.ROTULAGEM_EMBALAGEM,
    type: QuestionType.N,
    text: 'Os recipientes utilizados no envase dos produtos manipulados garantem a estabilidade físico-química e microbiológica da preparação?',
    weight: 5,
    isFatal: true,
    suggestion: 'Utilizar recipientes compatíveis com a preparação para garantir estabilidade.'
  },

  // ========== 13. CONSERVAÇÃO E TRANSPORTE ==========
  {
    id: '13.1',
    category: QuestionCategory.CONSERVACAO_TRANSPORTE,
    type: QuestionType.N,
    text: 'Existem procedimentos sobre conservação e transporte dos produtos manipulados?',
    weight: 4,
    isFatal: false
  },
  {
    id: '13.2',
    category: QuestionCategory.CONSERVACAO_TRANSPORTE,
    type: QuestionType.INF,
    text: 'Como é realizado o transporte dos produtos manipulados, se for o caso?',
    weight: 1,
    isFatal: false
  },
  {
    id: '13.3',
    category: QuestionCategory.CONSERVACAO_TRANSPORTE,
    type: QuestionType.N,
    text: 'Os medicamentos termossensíveis são mantidos em condições de temperatura compatíveis com sua conservação?',
    weight: 5,
    isFatal: true,
    suggestion: 'Manter medicamentos termossensíveis em temperatura adequada durante conservação e transporte.'
  },
  {
    id: '13.4',
    category: QuestionCategory.CONSERVACAO_TRANSPORTE,
    type: QuestionType.N,
    text: 'O local de conservação e dispensação dos produtos manipulados e fracionados está organizado e limpo?',
    weight: 4,
    isFatal: false
  },
  {
    id: '13.5',
    category: QuestionCategory.CONSERVACAO_TRANSPORTE,
    type: QuestionType.N,
    text: 'Os produtos manipulados estão armazenados ao abrigo da luz direta, sem poeira, protegidos de temperatura e umidade excessivas?',
    weight: 4,
    isFatal: false
  },
  {
    id: '13.6',
    category: QuestionCategory.CONSERVACAO_TRANSPORTE,
    type: QuestionType.I,
    text: 'Os produtos estão dentro do prazo de validade?',
    weight: 5,
    isFatal: true,
    suggestion: 'Não dispensar produtos fora do prazo de validade.'
  },
  {
    id: '13.7',
    category: QuestionCategory.CONSERVACAO_TRANSPORTE,
    type: QuestionType.N,
    text: 'Existe procedimento para o destino dos medicamentos que estão com o prazo de validade expirado?',
    weight: 4,
    isFatal: false
  },
  {
    id: '13.8',
    category: QuestionCategory.CONSERVACAO_TRANSPORTE,
    type: QuestionType.I,
    text: 'Os medicamentos sujeitos ao controle especial estão guardados em local com chave ou outro dispositivo de segurança?',
    weight: 5,
    isFatal: true,
    suggestion: 'Armazenar medicamentos de controle especial em local trancado e seguro.'
  },
  {
    id: '13.9',
    category: QuestionCategory.CONSERVACAO_TRANSPORTE,
    type: QuestionType.N,
    text: 'Os produtos prontos para serem entregues aos pacientes estão devidamente identificados e guardados de forma a oferecer segurança?',
    weight: 4,
    isFatal: false
  },
  {
    id: '13.10',
    category: QuestionCategory.CONSERVACAO_TRANSPORTE,
    type: QuestionType.N,
    text: 'É respeitada a proibição de exposição ao público de produtos manipulados, com o objetivo de propaganda, publicidade ou promoção?',
    weight: 4,
    isFatal: false
  },
  {
    id: '13.11',
    category: QuestionCategory.CONSERVACAO_TRANSPORTE,
    type: QuestionType.INF,
    text: 'Qual o destino dado às preparações não retiradas pelos clientes?',
    weight: 1,
    isFatal: false
  },
  {
    id: '13.12',
    category: QuestionCategory.CONSERVACAO_TRANSPORTE,
    type: QuestionType.N,
    text: 'Existe procedimento que estabeleça o destino dado às preparações não retiradas pelo cliente, no caso de oferecer risco no descarte?',
    weight: 4,
    isFatal: false
  },

  // ========== 14. DISPENSAÇÃO ==========
  {
    id: '14.1',
    category: QuestionCategory.DISPENSACAO,
    type: QuestionType.N,
    text: 'O farmacêutico presta orientação necessária aos pacientes, objetivando o uso correto dos produtos?',
    weight: 5,
    isFatal: true,
    suggestion: 'Realizar orientação farmacêutica ao paciente em toda dispensação.'
  },
  {
    id: '14.2',
    category: QuestionCategory.DISPENSACAO,
    type: QuestionType.N,
    text: 'Todas as receitas aviadas são carimbadas pela farmácia, com identificação do estabelecimento, data da dispensação e número de registro da manipulação?',
    weight: 5,
    isFatal: true,
    suggestion: 'Carimbar todas as receitas aviadas com dados obrigatórios.'
  },
  {
    id: '14.3',
    category: QuestionCategory.DISPENSACAO,
    type: QuestionType.R,
    text: 'A repetição de atendimento de uma mesma receita somente ocorre se houver indicação expressa do prescritor quanto à duração do tratamento?',
    weight: 5,
    isFatal: true,
    suggestion: 'Respeitar a indicação do prescritor quanto à duração do tratamento e repetições.'
  },

  // ========== 15. GARANTIA DE QUALIDADE ==========
  {
    id: '15.1',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.N,
    text: 'A farmácia possui um Sistema de Garantia da Qualidade (SGQ) que incorpore as BPMF, totalmente documentado e monitorado?',
    weight: 5,
    isFatal: true,
    suggestion: 'Implementar e documentar Sistema de Garantia da Qualidade conforme BPMF.'
  },
  {
    id: '15.2',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.N,
    text: 'A farmácia possui Manual de Boas Práticas de Manipulação?',
    weight: 5,
    isFatal: true,
    suggestion: 'Elaborar e manter atualizado o Manual de Boas Práticas de Manipulação.'
  },
  {
    id: '15.3',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.N,
    text: 'As operações de manipulação são claramente especificadas por escrito e as exigências de BPMF são cumpridas?',
    weight: 5,
    isFatal: true,
    suggestion: 'Documentar todas as operações e cumprir as exigências de BPMF.'
  },
  {
    id: '15.4',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.N,
    text: 'Os procedimentos operacionais previamente estabelecidos pela farmácia são cumpridos?',
    weight: 4,
    isFatal: false
  },
  {
    id: '15.5',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.N,
    text: 'A demanda de manipulações é compatível com a capacidade instalada da farmácia?',
    weight: 4,
    isFatal: false
  },
  {
    id: '15.6.1',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.R,
    text: 'A determinação do prazo de validade é baseada na avaliação físico-química das drogas e considerações sobre a sua estabilidade?',
    weight: 4,
    isFatal: false
  },
  {
    id: '15.6.2',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.R,
    text: 'O prazo de validade dos medicamentos manipulados estabelecido pela farmácia está vinculado ao período de tratamento?',
    weight: 4,
    isFatal: false
  },
  {
    id: '15.6.3',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.N,
    text: 'Existe procedimento que defina a política da empresa quanto às matérias-primas próximas ao vencimento?',
    weight: 3,
    isFatal: false
  },
  {
    id: '15.7.1',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.N,
    text: 'Todo o processo de manipulação é documentado, com procedimentos escritos que definam a especificidade das operações?',
    weight: 5,
    isFatal: true,
    suggestion: 'Manter documentação completa de todo o processo de manipulação.'
  },
  {
    id: '15.7.2',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.N,
    text: 'A documentação possibilita o rastreamento de informações para investigação de qualquer suspeita de desvio de qualidade?',
    weight: 4,
    isFatal: false
  },
  {
    id: '15.7.3',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.N,
    text: 'Os documentos são aprovados, assinados e datados pelo Responsável Técnico ou pessoa por ele autorizada?',
    weight: 4,
    isFatal: false
  },
  {
    id: '15.7.4',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.N,
    text: 'Os dados inseridos nos documentos durante a manipulação são claros, legíveis e sem rasuras?',
    weight: 4,
    isFatal: false
  },
  {
    id: '15.7.5',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.N,
    text: 'As alterações introduzidas permitem o conhecimento de seu conteúdo original?',
    weight: 3,
    isFatal: false
  },
  {
    id: '15.7.5.1',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.R,
    text: 'É justificado o motivo da alteração nos documentos?',
    weight: 3,
    isFatal: false
  },
  {
    id: '15.7.6',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.N,
    text: 'A documentação referente à manipulação de fórmulas é arquivada, conforme recomendado pelo Regulamento Técnico e seus Anexos?',
    weight: 4,
    isFatal: false
  },
  {
    id: '15.8.1',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.N,
    text: 'Existe um programa de treinamento de funcionários, elaborado com base em um levantamento de necessidades?',
    weight: 4,
    isFatal: false
  },
  {
    id: '15.8.1.1',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.N,
    text: 'O programa inclui os treinamentos iniciais e continuados?',
    weight: 4,
    isFatal: false
  },
  {
    id: '15.8.2',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.N,
    text: 'São realizados treinamentos específicos, de acordo com os grupos de atividades desenvolvidos pela farmácia?',
    weight: 4,
    isFatal: false
  },
  {
    id: '15.8.3',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.N,
    text: 'Existem registros dos treinamentos realizados?',
    weight: 4,
    isFatal: false
  },
  {
    id: '15.8.4',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.N,
    text: 'É realizada avaliação da efetividade dos treinamentos?',
    weight: 3,
    isFatal: false
  },
  {
    id: '15.8.4.1',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.N,
    text: 'Existem registros da avaliação dos treinamentos?',
    weight: 3,
    isFatal: false
  },
  {
    id: '15.9.1',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.N,
    text: 'A farmácia realiza auto-inspeções?',
    weight: 4,
    isFatal: false
  },
  {
    id: '15.9.1.1',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.INF,
    text: 'Qual a periodicidade das auto-inspeções?',
    weight: 1,
    isFatal: false
  },
  {
    id: '15.9.2',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.N,
    text: 'Os relatórios das auto-inspeções e suas conclusões são documentados e arquivados?',
    weight: 4,
    isFatal: false
  },
  {
    id: '15.9.3',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.N,
    text: 'Com base nas conclusões das auto-inspeções são estabelecidas as ações corretivas necessárias para assegurar o cumprimento das BPMF?',
    weight: 4,
    isFatal: false
  },
  {
    id: '15.10.1',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.N,
    text: 'A farmácia registra as reclamações recebidas referentes a desvios de qualidade?',
    weight: 4,
    isFatal: false
  },
  {
    id: '15.10.2',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.N,
    text: 'As reclamações são investigadas?',
    weight: 4,
    isFatal: false
  },
  {
    id: '15.10.3',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.N,
    text: 'São adotadas e registradas as medidas corretivas?',
    weight: 4,
    isFatal: false
  },
  {
    id: '15.10.4',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.N,
    text: 'São prestados esclarecimentos ao reclamante?',
    weight: 3,
    isFatal: false
  },
  {
    id: '15.10.5',
    category: QuestionCategory.GARANTIA_QUALIDADE,
    type: QuestionType.N,
    text: 'Está afixada, de modo visível, no principal local de atendimento ao público, placa informativa contendo endereço e telefones da autoridade sanitária local?',
    weight: 4,
    isFatal: false
  },

  // ========== 16. MANIPULAÇÃO DE SUBSTÂNCIAS DE BAIXO ÍNDICE TERAPÊUTICO ==========
  {
    id: '16.1',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.INF,
    text: 'A farmácia manipula substâncias de baixo índice terapêutico para uso interno?',
    weight: 1,
    isFatal: false
  },
  {
    id: '16.1.1',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.INF,
    text: 'Manipula substâncias de baixo índice terapêutico - alta dosagem e baixa potência? Quais?',
    weight: 1,
    isFatal: false
  },
  {
    id: '16.1.2',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.INF,
    text: 'Manipula substâncias de baixo índice terapêutico - baixa dosagem e alta potência? Quais?',
    weight: 1,
    isFatal: false
  },
  {
    id: '16.2',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.INF,
    text: 'Quais as formas farmacêuticas manipuladas (baixo índice terapêutico)?',
    weight: 1,
    isFatal: false
  },
  {
    id: '16.3',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'Está aprovada pela Vigilância Sanitária local para a manipulação destas substâncias?',
    weight: 5,
    isFatal: true,
    suggestion: 'Obter aprovação da Vigilância Sanitária para manipulação de substâncias de baixo índice terapêutico.'
  },
  {
    id: '16.4',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'Foi apresentada comprovação da formulação para os produtos sólidos manipulados por meio de perfil de dissolução?',
    weight: 5,
    isFatal: true,
    suggestion: 'Apresentar comprovação de perfil de dissolução quando aplicável.'
  },
  {
    id: '16.5',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'Os excipientes utilizados foram padronizados, de acordo com a compatibilidade das formulações, descrita em compêndios oficiais/farmacopéias?',
    weight: 5,
    isFatal: true,
    suggestion: 'Padronizar excipientes conforme compêndios oficiais.'
  },
  {
    id: '16.6',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.INF,
    text: 'O estudo de perfil de dissolução foi realizado pela empresa, grupo de empresas ou associação de classe?',
    weight: 1,
    isFatal: false
  },
  {
    id: '16.7',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'É garantida a reprodutibilidade dos estudos de perfil de dissolução quando da manipulação de substâncias de baixo índice terapêutico?',
    weight: 5,
    isFatal: true,
    suggestion: 'Garantir reprodutibilidade dos estudos de perfil de dissolução.'
  },
  {
    id: '16.8',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'Possui procedimento para qualificação dos fornecedores (substâncias baixo índice terapêutico)?',
    weight: 4,
    isFatal: false
  },
  {
    id: '16.9',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'Os fornecedores estão qualificados?',
    weight: 4,
    isFatal: false
  },
  {
    id: '16.10',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'Somente são adquiridas matérias-primas que estejam em conformidade com as especificações?',
    weight: 5,
    isFatal: true,
    suggestion: 'Adquirir apenas matérias-primas em conformidade com especificações.'
  },
  {
    id: '16.11',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'Existem procedimentos operacionais específicos para aquisição, recebimento, armazenamento, manipulação, dispensação e atenção farmacêutica (substâncias baixo índice)?',
    weight: 5,
    isFatal: true,
    suggestion: 'Elaborar e cumprir procedimentos específicos para substâncias de baixo índice terapêutico.'
  },
  {
    id: '16.11.1',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'Os procedimentos específicos para substâncias de baixo índice terapêutico são cumpridos?',
    weight: 5,
    isFatal: true,
    suggestion: 'Cumprir rigorosamente os procedimentos estabelecidos.'
  },
  {
    id: '16.12',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'No momento do recebimento é fixada identificação especial na rotulagem das matérias-primas alertando de que se trata de substância de baixo índice terapêutico?',
    weight: 4,
    isFatal: false
  },
  {
    id: '16.13',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'O armazenamento é realizado em local distinto, de acesso restrito, sob guarda do farmacêutico?',
    weight: 5,
    isFatal: true,
    suggestion: 'Armazenar em local distinto, restrito e sob responsabilidade do farmacêutico.'
  },
  {
    id: '16.14',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'As substâncias de baixo índice que ainda não foram submetidas a processo de diluição estão armazenadas em local distinto dos respectivos diluídos?',
    weight: 4,
    isFatal: false
  },
  {
    id: '16.15',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'No caso de manipular substância baixa dosagem e alta potência, são adotados e registrados: dupla checagem na pesagem (uma pelo farmacêutico), diluição geométrica e excipientes padronizados?',
    weight: 5,
    isFatal: true,
    suggestion: 'Adotar dupla checagem, diluição geométrica e excipientes padronizados conforme estudo.'
  },
  {
    id: '16.16',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'São realizadas análises de teor de cada diluído logo após o preparo e monitoramento trimestral do armazenado (conforme Anexo II)?',
    weight: 5,
    isFatal: true,
    suggestion: 'Realizar análises de teor e monitoramento trimestral conforme Anexo II.'
  },
  {
    id: '16.16.1',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'Existem registros das análises de teor e monitoramento?',
    weight: 4,
    isFatal: false
  },
  {
    id: '16.17',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'É realizada dupla checagem na pesagem para a manipulação, sendo uma feita pelo farmacêutico?',
    weight: 5,
    isFatal: true,
    suggestion: 'Implementar dupla checagem na pesagem com participação do farmacêutico.'
  },
  {
    id: '16.17.1',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'O procedimento de dupla checagem na pesagem é registrado?',
    weight: 4,
    isFatal: false
  },
  {
    id: '16.18',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'Na homogeneização do produto em processo de manipulação são empregados os mesmos excipientes e a mesma metodologia utilizada para obtenção do produto objeto do perfil de dissolução?',
    weight: 5,
    isFatal: true,
    suggestion: 'Utilizar mesma metodologia e excipientes do estudo de perfil de dissolução.'
  },
  {
    id: '16.19',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'No processo de encapsulamento são utilizadas cápsulas com o menor tamanho, de acordo com a dosagem?',
    weight: 4,
    isFatal: false
  },
  {
    id: '16.19.1',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'Existem registros do encapsulamento (tamanho de cápsula)?',
    weight: 3,
    isFatal: false
  },
  {
    id: '16.19.2',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'É realizado controle do peso médio, desvio padrão e coeficiente de variação em relação ao peso médio?',
    weight: 5,
    isFatal: true,
    suggestion: 'Realizar controle de peso médio, desvio padrão e CV em encapsulamento.'
  },
  {
    id: '16.19.2.1',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'Existem registros do controle de peso médio?',
    weight: 4,
    isFatal: false
  },
  {
    id: '16.20',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'O envase e a rotulagem seguem as disposições constantes do Anexo I desta Resolução?',
    weight: 5,
    isFatal: true,
    suggestion: 'Seguir Anexo I para envase e rotulagem.'
  },
  {
    id: '16.21',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'A dispensação é realizada mediante atenção farmacêutica?',
    weight: 5,
    isFatal: true,
    suggestion: 'Realizar atenção farmacêutica na dispensação.'
  },
  {
    id: '16.21.1',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'É realizado acompanhamento do paciente, avaliação e monitoramento do uso correto do medicamento?',
    weight: 5,
    isFatal: true,
    suggestion: 'Realizar acompanhamento e monitoramento do paciente.'
  },
  {
    id: '16.21.1.1',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'Existem registros do acompanhamento do paciente?',
    weight: 4,
    isFatal: false
  },
  {
    id: '16.22',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'É realizado o monitoramento do processo de manipulação de formas farmacêuticas de uso interno com realização de análise completa de formulação manipulada contendo substância de baixo índice terapêutico?',
    weight: 5,
    isFatal: true,
    suggestion: 'Realizar monitoramento trimestral com análise completa conforme Anexo.'
  },
  {
    id: '16.22.1',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'O monitoramento obedece a uma periodicidade trimestral?',
    weight: 4,
    isFatal: false
  },
  {
    id: '16.22.2',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'As amostras contemplam diferentes manipuladores, fármacos, dosagens e formas farmacêuticas?',
    weight: 4,
    isFatal: false
  },
  {
    id: '16.22.3',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'Está estabelecida em procedimento operacional a metodologia para a execução do monitoramento?',
    weight: 4,
    isFatal: false
  },
  {
    id: '16.22.4',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'Os resultados do monitoramento encontram-se registrados?',
    weight: 4,
    isFatal: false
  },
  {
    id: '16.22.5',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'A farmácia estabelece, registra e avalia a efetividade das medidas adotadas, por meio de uma nova análise, em caso de resultado insatisfatório?',
    weight: 4,
    isFatal: false
  },
  {
    id: '16.23',
    category: QuestionCategory.BAIXO_INDICE_TERAPEUTICO,
    type: QuestionType.I,
    text: 'Na dispensação, o medicamento é acompanhado de bula simplificada contendo os padrões mínimos de informações ao paciente?',
    weight: 5,
    isFatal: true,
    suggestion: 'Fornecer bula simplificada com informações mínimas ao paciente.'
  },

  // ========== 17. HORMÔNIOS, ANTIBIÓTICOS, CITOSTÁTICOS E CONTROLE ESPECIAL ==========
  {
    id: '17.1',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.INF,
    text: 'A farmácia manipula hormônios?',
    weight: 1,
    isFatal: false
  },
  {
    id: '17.2',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.INF,
    text: 'A farmácia manipula antibióticos?',
    weight: 1,
    isFatal: false
  },
  {
    id: '17.3',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.INF,
    text: 'A farmácia manipula citostáticos?',
    weight: 1,
    isFatal: false
  },
  {
    id: '17.4',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.INF,
    text: 'A farmácia manipula substâncias sujeitas a controle especial?',
    weight: 1,
    isFatal: false
  },
  {
    id: '17.5',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.INF,
    text: 'Quais as formas farmacêuticas manipuladas (hormônios/antibiotic/citostáticos/controle)?',
    weight: 1,
    isFatal: false
  },
  {
    id: '17.6',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'A farmácia notificou a Vigilância Sanitária que manipula substâncias constantes do Anexo III?',
    weight: 5,
    isFatal: true,
    suggestion: 'Notificar a Vigilância Sanitária sobre manipulação de substâncias do Anexo III.'
  },
  {
    id: '17.7',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'A farmácia possui Autorização Especial para a manipulação de substâncias sujeitas a controle especial?',
    weight: 5,
    isFatal: true,
    suggestion: 'Obter e manter Autorização Especial para controle especial.'
  },
  {
    id: '17.8',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'A farmácia possui salas de manipulação dedicadas, dotadas cada uma com antecâmara, para hormônios, antibióticos e citostáticos?',
    weight: 5,
    isFatal: true,
    suggestion: 'Manter salas dedicadas com antecâmara para cada classe terapêutica.'
  },
  {
    id: '17.8.1',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'Cada uma das salas possui sistema de ar independente e com eficiência comprovada?',
    weight: 5,
    isFatal: true,
    suggestion: 'Garantir sistema de ar independente por sala.'
  },
  {
    id: '17.8.2',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'As salas possuem pressão negativa em relação às áreas adjacentes, impedindo lançamento de pós e contaminação cruzada?',
    weight: 5,
    isFatal: true,
    suggestion: 'Manter pressão negativa e projeto que impeça contaminação.'
  },
  {
    id: '17.9',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'São adotados procedimentos para evitar contaminação cruzada durante as atividades de pesagem?',
    weight: 5,
    isFatal: true,
    suggestion: 'Implementar procedimentos contra contaminação cruzada na pesagem.'
  },
  {
    id: '17.10',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'A pesagem dos hormônios, citostáticos e antibióticos é efetuada na respectiva sala de manipulação?',
    weight: 5,
    isFatal: true,
    suggestion: 'Realizar pesagem na sala dedicada de cada classe.'
  },
  {
    id: '17.11',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'As balanças e bancadas são submetidas a rigoroso processo de limpeza antes e após cada pesagem?',
    weight: 5,
    isFatal: true,
    suggestion: 'Limpar rigorosamente balanças e bancadas antes e após cada pesagem.'
  },
  {
    id: '17.12',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'Todos os utensílios utilizados na manipulação de substâncias do Anexo III são separados e identificados por classe terapêutica?',
    weight: 5,
    isFatal: true,
    suggestion: 'Separar e identificar utensílios por classe terapêutica.'
  },
  {
    id: '17.13',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'É assegurado o uso de EPIs apropriados, condizentes com os riscos e volume de trabalho?',
    weight: 5,
    isFatal: true,
    suggestion: 'Fornecer e garantir uso de EPIs adequados.'
  },
  {
    id: '17.14',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'Os funcionários envolvidos na manipulação de substâncias do Anexo III são submetidos a exames médicos específicos (PCMSO)?',
    weight: 5,
    isFatal: true,
    suggestion: 'Incluir exames específicos no PCMSO para manipuladores.'
  },
  {
    id: '17.15',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.R,
    text: 'É adotado o sistema de rodízio no trabalho?',
    weight: 4,
    isFatal: false
  },
  {
    id: '17.16',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'Existe procedimento operacional específico para evitar contaminação cruzada?',
    weight: 5,
    isFatal: true,
    suggestion: 'Documentar e cumprir procedimento contra contaminação cruzada.'
  },
  {
    id: '17.17',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'Os excipientes utilizados foram padronizados?',
    weight: 4,
    isFatal: false
  },
  {
    id: '17.18',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'Possui procedimento para qualificação dos fornecedores?',
    weight: 4,
    isFatal: false
  },
  {
    id: '17.19',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'Os fornecedores estão qualificados?',
    weight: 4,
    isFatal: false
  },
  {
    id: '17.20',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'Somente são adquiridas matérias-primas que estejam em conformidade com as especificações?',
    weight: 5,
    isFatal: true,
    suggestion: 'Adquirir apenas matérias-primas em conformidade.'
  },
  {
    id: '17.21',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'Existem procedimentos operacionais específicos para aquisição, recebimento, armazenamento, manipulação, dispensação e orientação farmacêutica?',
    weight: 5,
    isFatal: true,
    suggestion: 'Elaborar procedimentos específicos para cada etapa.'
  },
  {
    id: '17.22',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'O armazenamento é realizado em local distinto, de acesso restrito, sob guarda do farmacêutico?',
    weight: 5,
    isFatal: true,
    suggestion: 'Armazenar em local distinto, restrito e sob responsabilidade do farmacêutico.'
  },
  {
    id: '17.23',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.INF,
    text: 'A farmácia prepara diluídos de substâncias constantes do Anexo III?',
    weight: 1,
    isFatal: false
  },
  {
    id: '17.23.1',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'Na pesagem para diluição é realizada dupla checagem, sendo uma feita pelo farmacêutico?',
    weight: 5,
    isFatal: true,
    suggestion: 'Realizar dupla checagem na pesagem para diluição.'
  },
  {
    id: '17.23.1.1',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'O procedimento de dupla checagem na pesagem é registrado?',
    weight: 4,
    isFatal: false
  },
  {
    id: '17.24',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'No processo de diluição e homogeneização é utilizada metodologia de diluição geométrica?',
    weight: 5,
    isFatal: true,
    suggestion: 'Utilizar diluição geométrica no processo.'
  },
  {
    id: '17.25',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'Existem registros do preparo dos diluídos?',
    weight: 4,
    isFatal: false
  },
  {
    id: '17.26',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'Os excipientes utilizados no preparo dos diluídos são padronizados?',
    weight: 4,
    isFatal: false
  },
  {
    id: '17.27',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'O armazenamento de diluídos de substâncias sujeitas a controle especial segue as disposições da regulamentação específica?',
    weight: 5,
    isFatal: true,
    suggestion: 'Seguir regulamentação específica para armazenamento de diluídos.'
  },
  {
    id: '17.28',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'É realizada dupla checagem na pesagem para a manipulação, sendo uma feita pelo farmacêutico?',
    weight: 5,
    isFatal: true,
    suggestion: 'Implementar dupla checagem na pesagem para manipulação.'
  },
  {
    id: '17.28.1',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'O procedimento de dupla checagem na pesagem é registrado?',
    weight: 4,
    isFatal: false
  },
  {
    id: '17.29',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'No processo de encapsulamento são utilizadas cápsulas com o menor tamanho, de acordo com a dosagem?',
    weight: 4,
    isFatal: false
  },
  {
    id: '17.29.1',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'É realizado controle do peso médio, desvio padrão e coeficiente de variação?',
    weight: 5,
    isFatal: true,
    suggestion: 'Realizar controle de peso médio, desvio padrão e CV.'
  },
  {
    id: '17.29.1.1',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'Existem registros do controle?',
    weight: 4,
    isFatal: false
  },
  {
    id: '17.30',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'O envase e a rotulagem seguem as disposições constantes do Anexo I?',
    weight: 5,
    isFatal: true,
    suggestion: 'Seguir Anexo I para envase e rotulagem.'
  },
  {
    id: '17.31',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'A dispensação é realizada mediante orientação farmacêutica?',
    weight: 5,
    isFatal: true,
    suggestion: 'Realizar orientação farmacêutica na dispensação.'
  },
  {
    id: '17.32',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'É realizado o monitoramento do processo de manipulação com análise completa de formulação contendo cada uma das classes (antibióticos, hormônios e citostáticos)?',
    weight: 5,
    isFatal: true,
    suggestion: 'Realizar monitoramento trimestral por classe terapêutica.'
  },
  {
    id: '17.32.1',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'O monitoramento obedece a uma periodicidade trimestral para cada classe?',
    weight: 4,
    isFatal: false
  },
  {
    id: '17.32.2',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'As amostras contemplam diferentes manipuladores, fármacos, dosagens e formas farmacêuticas?',
    weight: 4,
    isFatal: false
  },
  {
    id: '17.32.3',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'Está estabelecida em procedimento operacional a metodologia para a execução do monitoramento?',
    weight: 4,
    isFatal: false
  },
  {
    id: '17.32.4',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'Os resultados encontram-se registrados?',
    weight: 4,
    isFatal: false
  },
  {
    id: '17.32.5',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'A farmácia estabelece, registra e avalia a efetividade das medidas adotadas em caso de resultado insatisfatório?',
    weight: 4,
    isFatal: false
  },
  {
    id: '17.33.1',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'A manipulação das substâncias sob controle especial se dá exclusivamente sob prescrição?',
    weight: 5,
    isFatal: true,
    suggestion: 'Manipular controle especial apenas sob prescrição.'
  },
  {
    id: '17.33.2',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'A escrituração e os balanços são realizados obedecendo à Legislação Sanitária em vigor?',
    weight: 5,
    isFatal: true,
    suggestion: 'Manter escrituração e balanços conforme legislação.'
  },
  {
    id: '17.33.3',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'A documentação relativa à escrituração é arquivada e mantida no estabelecimento pelo período estabelecido na legislação?',
    weight: 5,
    isFatal: true,
    suggestion: 'Arquivar documentação pelo prazo legal.'
  },
  {
    id: '17.33.4',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.N,
    text: 'As Receitas de Controle Especial e as Notificações de Receita estão preenchidas corretamente e de acordo com a legislação específica?',
    weight: 5,
    isFatal: true,
    suggestion: 'Preencher corretamente receitas e notificações conforme legislação.'
  },
  {
    id: '17.33.5',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'A farmácia encaminha os Balanços e as Relações de Notificações de Receita à autoridade sanitária, respeitando os prazos?',
    weight: 5,
    isFatal: true,
    suggestion: 'Encaminhar balanços e relações dentro dos prazos legais.'
  },
  {
    id: '17.33.5.1',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'Apresentou os comprovantes de envio?',
    weight: 4,
    isFatal: false
  },
  {
    id: '17.33.6',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'É realizado o controle de estoque das matérias-primas sujeitas a controle especial?',
    weight: 5,
    isFatal: true,
    suggestion: 'Manter controle de estoque de matérias-primas de controle especial.'
  },
  {
    id: '17.33.7',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'As eventuais perdas são escrituradas e lançadas nos Balanços?',
    weight: 5,
    isFatal: true,
    suggestion: 'Escriturar e lançar perdas nos Balanços.'
  },
  {
    id: '17.33.7.1',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.N,
    text: 'As perdas estão devidamente justificadas?',
    weight: 4,
    isFatal: false
  },
  {
    id: '17.33.8',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'O peso das matérias-primas sujeitas a controle especial adquiridas é conferido no momento do recebimento?',
    weight: 5,
    isFatal: true,
    suggestion: 'Conferir peso no recebimento de matérias-primas de controle especial.'
  },
  {
    id: '17.33.8.1',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.INF,
    text: 'Caso exista diferença entre o peso constante na Nota Fiscal e o peso real, qual o procedimento adotado pela farmácia?',
    weight: 1,
    isFatal: false
  },
  {
    id: '17.33.8.2',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.N,
    text: 'Existem registros da conferência de peso?',
    weight: 4,
    isFatal: false
  },
  {
    id: '17.33.9',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'A rotulagem das preparações magistrais contendo substâncias sujeitas a controle especial obedece à legislação específica em vigor?',
    weight: 5,
    isFatal: true,
    suggestion: 'Rotular conforme legislação de controle especial.'
  },
  {
    id: '17.33.10',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.INF,
    text: 'Qual o procedimento adotado pela farmácia nos casos em que ocorra o vencimento do prazo de validade dessas substâncias?',
    weight: 1,
    isFatal: false
  },
  {
    id: '17.33.10.1',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.N,
    text: 'Existe procedimento escrito para vencimento de substâncias de controle especial?',
    weight: 4,
    isFatal: false
  },
  {
    id: '17.33.10.2',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.N,
    text: 'Existem registros do procedimento de vencimento?',
    weight: 3,
    isFatal: false
  },
  {
    id: '17.33.11',
    category: QuestionCategory.HORMONIOS_ANTIBIOTICOS,
    type: QuestionType.I,
    text: 'Os produtos manipulados que contenham substâncias sujeitas a controle especial são mantidos em local fechado com chave ou outro dispositivo que ofereça segurança?',
    weight: 5,
    isFatal: true,
    suggestion: 'Armazenar produtos com controle especial em local trancado.'
  },

  // ========== 18. MANIPULAÇÃO DE PRODUTOS ESTÉREIS (amostra representativa) ==========
  {
    id: '18.1.1',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.N,
    text: 'É realizado o efetivo monitoramento de todo o processo de preparação de estéreis, de modo a garantir a qualidade ao paciente?',
    weight: 5,
    isFatal: true,
    suggestion: 'Implementar monitoramento efetivo de todo o processo de preparação estéril.'
  },
  {
    id: '18.1.2',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.INF,
    text: 'A farmácia manipula produtos usados em terapia antineoplásica?',
    weight: 1,
    isFatal: false
  },
  {
    id: '18.2.1',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.N,
    text: 'Todo o pessoal envolvido com a manipulação de produtos estéreis conhece os princípios de manipulação de produtos estéreis?',
    weight: 5,
    isFatal: true,
    suggestion: 'Capacitar todo o pessoal nos princípios de manipulação estéril.'
  },
  {
    id: '18.2.2',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.N,
    text: 'O acesso de pessoas às áreas de preparação de formulações estéreis é restrito aos operadores diretamente envolvidos?',
    weight: 5,
    isFatal: true,
    suggestion: 'Restringir acesso às áreas de preparação estéril.'
  },
  {
    id: '18.2.3',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.I,
    text: 'Os manipuladores de produtos estéreis atendem a um alto nível de higiene?',
    weight: 5,
    isFatal: true,
    suggestion: 'Garantir alto nível de higiene dos manipuladores.'
  },
  {
    id: '18.2.4',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.N,
    text: 'Os manipuladores são instruídos a lavar corretamente as mãos e antebraços, com escovação das unhas, utilizando anti-séptico padronizado, antes de entrar na área?',
    weight: 5,
    isFatal: true,
    suggestion: 'Implementar procedimento de higienização das mãos e antebraços.'
  },
  {
    id: '18.2.6',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.I,
    text: 'Os funcionários envolvidos na manipulação de preparações estéreis estão adequadamente uniformizados para assegurar a proteção da preparação contra contaminação?',
    weight: 5,
    isFatal: true,
    suggestion: 'Fornecer uniformes adequados para áreas estéreis.'
  },
  {
    id: '18.2.7',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.N,
    text: 'Os uniformes são trocados a cada sessão de manipulação para garantir a higiene apropriada?',
    weight: 4,
    isFatal: false
  },
  {
    id: '18.2.12',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.I,
    text: 'Os uniformes usados na sala de manipulação, inclusive máscaras e luvas, são estéreis?',
    weight: 5,
    isFatal: true,
    suggestion: 'Utilizar uniformes, máscaras e luvas estéreis na sala de manipulação.'
  },
  {
    id: '18.2.13',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.I,
    text: 'Os uniformes usados na sala de manipulação são substituídos a cada sessão de manipulação?',
    weight: 5,
    isFatal: true,
    suggestion: 'Substituir uniformes a cada sessão.'
  },
  {
    id: '18.2.16',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.I,
    text: 'A lavagem e esterilização dos uniformes são realizadas sob a responsabilidade da empresa?',
    weight: 4,
    isFatal: false
  },
  {
    id: '18.3.1',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.N,
    text: 'A área de preparação de estéreis está localizada, projetada e construída ou adaptada segundo padrões técnicos adequados?',
    weight: 5,
    isFatal: true,
    suggestion: 'Adequar área de estéreis aos padrões técnicos.'
  },
  {
    id: '18.3.2',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.N,
    text: 'A farmácia possui: sala de limpeza/higienização/esterilização; sala de pesagem; sala de manipulação e envase exclusiva; área para revisão; área para quarentena/rotulagem/embalagem; sala de paramentação (antecâmara)?',
    weight: 5,
    isFatal: true,
    suggestion: 'Manter todas as áreas obrigatórias para preparação estéril.'
  },
  {
    id: '18.3.13',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.I,
    text: 'É respeitada a exigência de não se permitir o uso de pia e ralos na sala de pesagem, sala de manipulação e envase?',
    weight: 5,
    isFatal: true,
    suggestion: 'Não utilizar pia e ralos nas salas de pesagem e manipulação estéril.'
  },
  {
    id: '18.3.20',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.I,
    text: 'A sala destinada à manipulação e envase de preparações estéreis é independente e exclusiva?',
    weight: 5,
    isFatal: true,
    suggestion: 'Manter sala exclusiva e independente para manipulação e envase estéril.'
  },
  {
    id: '18.3.20.1',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.I,
    text: 'A sala é dotada de filtros de ar para retenção de partículas e microorganismos (Classe ISO 5) ou as atividades são realizadas sob fluxo laminar Classe ISO 5 em área Classe ISO 7?',
    weight: 5,
    isFatal: true,
    suggestion: 'Garantir classificação ISO 5 (fluxo laminar ou filtros) conforme norma.'
  },
  {
    id: '18.4.6',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.I,
    text: 'O ar injetado nas áreas classificadas é filtrado por filtros HEPA?',
    weight: 5,
    isFatal: true,
    suggestion: 'Utilizar filtros HEPA no ar das áreas classificadas.'
  },
  {
    id: '18.4.10',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.I,
    text: 'O equipamento utilizado no tratamento de água assegura a produção da água com a especificação "água para injetáveis"?',
    weight: 5,
    isFatal: true,
    suggestion: 'Garantir água para injetáveis conforme farmacopeia.'
  },
  {
    id: '18.6.2',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.I,
    text: 'A água utilizada na preparação de estéreis é obtida por destilação ou osmose reversa, obedecendo às características farmacopéicas de água para injetáveis?',
    weight: 5,
    isFatal: true,
    suggestion: 'Utilizar água para injetáveis conforme farmacopeia.'
  },
  {
    id: '18.7.2',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.I,
    text: 'A manipulação é realizada com técnica asséptica?',
    weight: 5,
    isFatal: true,
    suggestion: 'Seguir rigorosamente a técnica asséptica.'
  },
  {
    id: '18.7.3',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.I,
    text: 'O processo de manipulação está validado?',
    weight: 5,
    isFatal: true,
    suggestion: 'Validar o processo de manipulação estéril.'
  },
  {
    id: '18.7.15',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.I,
    text: 'O envase de preparações esterilizadas por filtração é realizado sob fluxo laminar classe ISO 5, em sala classe ISO 7?',
    weight: 5,
    isFatal: true,
    suggestion: 'Realizar envase sob fluxo laminar ISO 5 em sala ISO 7.'
  },
  {
    id: '18.7.15.1',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.I,
    text: 'É efetuado teste de integridade no filtro esterilizante antes e após o processo de filtração?',
    weight: 5,
    isFatal: true,
    suggestion: 'Realizar teste de integridade do filtro antes e após filtração.'
  },
  {
    id: '18.7.17',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.I,
    text: 'Todos os processos de esterilização são validados e sistematicamente monitorados com base em procedimentos escritos?',
    weight: 5,
    isFatal: true,
    suggestion: 'Validar e monitorar todos os processos de esterilização.'
  },
  {
    id: '18.7.22',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.R,
    text: 'É efetuado teste para verificação da hermeticidade dos produtos estéreis?',
    weight: 5,
    isFatal: true,
    suggestion: 'Realizar teste de hermeticidade nos produtos estéreis.'
  },
  {
    id: '18.8.2',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.I,
    text: 'Além dos controles previstos no Anexo I, o produto estéril pronto para o uso é submetido a: inspeção visual 100%, verificação do rótulo, teste de esterilidade e teste de endotoxinas (exceto oftálmicos)?',
    weight: 5,
    isFatal: true,
    suggestion: 'Realizar todos os controles obrigatórios para produto estéril.'
  },
  {
    id: '18.9.1',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.I,
    text: 'Os equipamentos e as salas classificadas são qualificados/certificados?',
    weight: 5,
    isFatal: true,
    suggestion: 'Qualificar/certificar equipamentos e salas classificadas.'
  },
  {
    id: '18.9.2',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.I,
    text: 'Os ciclos de esterilização e despirogenização são validados?',
    weight: 5,
    isFatal: true,
    suggestion: 'Validar ciclos de esterilização e despirogenização.'
  },
  {
    id: '18.9.3',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.I,
    text: 'O sistema de obtenção de água para preparação de estéreis está validado?',
    weight: 5,
    isFatal: true,
    suggestion: 'Validar sistema de água para injetáveis.'
  },
  {
    id: '18.9.4',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.I,
    text: 'O procedimento de preparações estéreis está validado para garantir a obtenção do medicamento estéril?',
    weight: 5,
    isFatal: true,
    suggestion: 'Validar procedimento de preparação estéril.'
  },
  {
    id: '18.10.2',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.I,
    text: 'A farmácia possui sala exclusiva para manipulação e fracionamento de citostáticos?',
    weight: 5,
    isFatal: true,
    suggestion: 'Manter sala exclusiva para citostáticos.'
  },
  {
    id: '18.10.4',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.I,
    text: 'Todas as operações de citostáticos são realizadas em Cabine de Segurança Biológica (CSB) Classe II B2?',
    weight: 5,
    isFatal: true,
    suggestion: 'Utilizar CSB Classe II B2 para citostáticos.'
  },
  {
    id: '18.10.7',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.I,
    text: 'Durante a manipulação de citostáticos são usados: dois pares de luvas cirúrgicas estéreis sem talco, avental longo ou macacão de baixa permeabilidade?',
    weight: 5,
    isFatal: true,
    suggestion: 'Utilizar EPIs obrigatórios para manipulação de citostáticos.'
  },
  {
    id: '18.10.14',
    category: QuestionCategory.PRODUTOS_ESTEREIS,
    type: QuestionType.R,
    text: 'A farmácia dispõe de Programa de Biossegurança, devidamente implantado?',
    weight: 5,
    isFatal: true,
    suggestion: 'Implantar e manter Programa de Biossegurança.'
  },

  // ========== 19. MANIPULAÇÃO DE PREPARAÇÕES HOMEOPÁTICAS ==========
  {
    id: '19.1',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.INF,
    text: 'A farmácia manipula preparações homeopáticas?',
    weight: 1,
    isFatal: false
  },
  {
    id: '19.2',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.N,
    text: 'Os funcionários envolvidos no processo de manipulação estão devidamente higienizados e não odorizados?',
    weight: 4,
    isFatal: false
  },
  {
    id: '19.3',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.I,
    text: 'Existe sala exclusiva para a manipulação de preparações homeopáticas?',
    weight: 5,
    isFatal: true,
    suggestion: 'Manter sala exclusiva para manipulação homeopática.'
  },
  {
    id: '19.4',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.R,
    text: 'A sala é condizente com o volume de operações?',
    weight: 3,
    isFatal: false
  },
  {
    id: '19.5',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.N,
    text: 'A sala está localizada em área de baixa incidência de radiações e de odores fortes?',
    weight: 4,
    isFatal: false
  },
  {
    id: '19.6',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.N,
    text: 'Quando aplicável, existe alcoômetro de Gay-Lussac e balança de uso exclusivo?',
    weight: 4,
    isFatal: false
  },
  {
    id: '19.7',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.N,
    text: 'Existe área ou local para limpeza e higienização dos utensílios, acessórios e recipientes utilizados nas preparações homeopáticas?',
    weight: 4,
    isFatal: false
  },
  {
    id: '19.8',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.INF,
    text: 'A área de lavagem é compartilhada para lavagem de outros recipientes utilizados na manipulação não homeopática?',
    weight: 1,
    isFatal: false
  },
  {
    id: '19.8.1',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.N,
    text: 'Caso seja compartilhada, a lavagem de materiais homeopáticos e não homeopáticos ocorre em momentos distintos e obedece a procedimentos escritos?',
    weight: 4,
    isFatal: false
  },
  {
    id: '19.9',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.N,
    text: 'A área ou local de lavagem e inativação é dotada de estufa para secagem e inativação de materiais, com termômetro?',
    weight: 4,
    isFatal: false
  },
  {
    id: '19.10',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.R,
    text: 'São mantidos os registros de temperatura e tempo do processo de inativação?',
    weight: 4,
    isFatal: false
  },
  {
    id: '19.11',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.N,
    text: 'Para a limpeza e sanitização do piso, paredes e mobiliário da sala de manipulação homeopática são usados produtos que não deixem resíduos ou possuam odores?',
    weight: 4,
    isFatal: false
  },
  {
    id: '19.12',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.R,
    text: 'As bancadas de trabalho são limpas com solução hidroalcoólica a 70% (p/p)?',
    weight: 4,
    isFatal: false
  },
  {
    id: '19.13',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.N,
    text: 'Os materiais destinados às preparações homeopáticas são armazenados em área ou local apropriado, ao abrigo de odores?',
    weight: 4,
    isFatal: false
  },
  {
    id: '19.14',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.I,
    text: 'A água utilizada para preparações homeopáticas atende aos requisitos farmacopéicos estabelecidos para água purificada?',
    weight: 5,
    isFatal: true,
    suggestion: 'Utilizar água purificada conforme farmacopeia.'
  },
  {
    id: '19.15',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.I,
    text: 'A preparação de heteroisoterápicos utilizando medicamentos ou substâncias sujeitas a controle especial é realizada obedecendo às exigências do Regulamento e da legislação específica?',
    weight: 5,
    isFatal: true,
    suggestion: 'Seguir legislação para heteroisoterápicos com controle especial.'
  },
  {
    id: '19.16',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.N,
    text: 'O local de trabalho e os equipamentos são limpos, de forma a garantir a higiene da área de manipulação?',
    weight: 4,
    isFatal: false
  },
  {
    id: '19.17',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.INF,
    text: 'Os utensílios, acessórios e recipientes utilizados nas preparações homeopáticas são descartados?',
    weight: 1,
    isFatal: false
  },
  {
    id: '19.17.1',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.N,
    text: 'Sendo possível sua reutilização, os mesmos são submetidos a procedimentos estabelecidos e adequados de higienização e inativação?',
    weight: 4,
    isFatal: false
  },
  {
    id: '19.18',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.N,
    text: 'Após a inativação e higienização dos utensílios, recipientes e acessórios, estes são guardados ao abrigo de sujidades e odores?',
    weight: 4,
    isFatal: false
  },
  {
    id: '19.19',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.INF,
    text: 'A farmácia prepara auto-isoterápicos?',
    weight: 1,
    isFatal: false
  },
  {
    id: '19.19.1',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.I,
    text: 'Existe sala específica para coleta de material e preparo de auto-isoterápicos até 12CH ou 24DH?',
    weight: 5,
    isFatal: true,
    suggestion: 'Manter sala específica para auto-isoterápicos quando aplicável.'
  },
  {
    id: '19.19.2',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.N,
    text: 'Existe procedimento para coleta de material (auto-isoterápicos)?',
    weight: 4,
    isFatal: false
  },
  {
    id: '19.19.3',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.I,
    text: 'Os materiais utilizados na coleta são descartáveis?',
    weight: 4,
    isFatal: false
  },
  {
    id: '19.19.4',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.I,
    text: 'O material descartável, após o uso, é submetido a procedimentos de descontaminação?',
    weight: 4,
    isFatal: false
  },
  {
    id: '19.20',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.N,
    text: 'Existem procedimentos operacionais padrão para todas as etapas do processo de preparações homeopáticas?',
    weight: 5,
    isFatal: true,
    suggestion: 'Elaborar e cumprir POPs para todas as etapas homeopáticas.'
  },
  {
    id: '19.20.1',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.N,
    text: 'Os POPs são cumpridos?',
    weight: 4,
    isFatal: false
  },
  {
    id: '19.21',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.R,
    text: 'A rotulagem das tinturas-mãe atende aos requisitos estabelecidos no Anexo V?',
    weight: 4,
    isFatal: false
  },
  {
    id: '19.22',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.R,
    text: 'A rotulagem das matrizes atende aos requisitos estabelecidos no Anexo V?',
    weight: 4,
    isFatal: false
  },
  {
    id: '19.23',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.N,
    text: 'A rotulagem das formas farmacêuticas de dispensação atende aos requisitos estabelecidos no Anexo V?',
    weight: 4,
    isFatal: false
  },
  {
    id: '19.24',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.N,
    text: 'Consta dos rótulos das preparações homeopáticas o prazo de validade e, quando necessário, a indicação das condições para sua conservação?',
    weight: 4,
    isFatal: false
  },
  {
    id: '19.25',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.N,
    text: 'A farmácia realiza análises de controle de qualidade dos insumos inertes recebidos?',
    weight: 4,
    isFatal: false
  },
  {
    id: '19.26',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.N,
    text: 'Os insumos ativos para os quais existem métodos de controle de qualidade são adquiridos acompanhados dos respectivos certificados de análise?',
    weight: 4,
    isFatal: false
  },
  {
    id: '19.27',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.R,
    text: 'Os insumos ativos para os quais não existem métodos de controle de qualidade são adquiridos acompanhados da respectiva descrição de preparo?',
    weight: 4,
    isFatal: false
  },
  {
    id: '19.28',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.N,
    text: 'São realizadas análises microbiológicas das matrizes do estoque existente, por amostragem representativa?',
    weight: 4,
    isFatal: false
  },
  {
    id: '19.28.1',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.N,
    text: 'Foi estipulada a periodicidade adequada para as análises das matrizes?',
    weight: 3,
    isFatal: false
  },
  {
    id: '19.28.2',
    category: QuestionCategory.HOMEOPATICAS,
    type: QuestionType.N,
    text: 'São mantidos os registros das análises realizadas?',
    weight: 3,
    isFatal: false
  },

  // ========== 20. PREPARAÇÃO DE DOSE UNITÁRIA E UNITARIZAÇÃO ==========
  {
    id: '20.1',
    category: QuestionCategory.DOSE_UNITARIA,
    type: QuestionType.I,
    text: 'Trata-se de farmácia de atendimento privativo de unidade hospitalar ou equivalente de assistência médica?',
    weight: 4,
    isFatal: false
  },
  {
    id: '20.2',
    category: QuestionCategory.DOSE_UNITARIA,
    type: QuestionType.INF,
    text: 'A farmácia realiza transformação/derivação de medicamentos?',
    weight: 1,
    isFatal: false
  },
  {
    id: '20.2.1',
    category: QuestionCategory.DOSE_UNITARIA,
    type: QuestionType.N,
    text: 'Atende aos requisitos do item 3.1.1 do Anexo VI para a execução de transformação/derivação?',
    weight: 4,
    isFatal: false
  },
  {
    id: '20.3',
    category: QuestionCategory.DOSE_UNITARIA,
    type: QuestionType.N,
    text: 'A preparação de doses unitárias e a unitarização de doses de medicamentos é realizada sob responsabilidade e orientação do farmacêutico?',
    weight: 5,
    isFatal: true,
    suggestion: 'Realizar preparação/unitarização sob responsabilidade do farmacêutico.'
  },
  {
    id: '20.3.1',
    category: QuestionCategory.DOSE_UNITARIA,
    type: QuestionType.N,
    text: 'São efetuados os respectivos registros de forma a garantir a rastreabilidade dos produtos e procedimentos realizados?',
    weight: 5,
    isFatal: true,
    suggestion: 'Manter registros que garantam rastreabilidade.'
  },
  {
    id: '20.4',
    category: QuestionCategory.DOSE_UNITARIA,
    type: QuestionType.N,
    text: 'A preparação de doses unitárias e a unitarização são registradas em Livro de Registro de Receituário ou equivalente eletrônico?',
    weight: 5,
    isFatal: true,
    suggestion: 'Registrar em Livro de Receituário ou sistema equivalente.'
  },
  {
    id: '20.4.1',
    category: QuestionCategory.DOSE_UNITARIA,
    type: QuestionType.N,
    text: 'Os registros contêm todas as informações necessárias?',
    weight: 4,
    isFatal: false
  },
  {
    id: '20.5',
    category: QuestionCategory.DOSE_UNITARIA,
    type: QuestionType.N,
    text: 'Existe procedimento operacional para a prevenção de trocas ou misturas de medicamentos?',
    weight: 5,
    isFatal: true,
    suggestion: 'Elaborar e cumprir procedimento contra trocas e misturas.'
  },
  {
    id: '20.6',
    category: QuestionCategory.DOSE_UNITARIA,
    type: QuestionType.N,
    text: 'É observada a proibição de realização de procedimentos de preparação concomitante de doses unitárias ou unitarização de mais de um medicamento?',
    weight: 5,
    isFatal: true,
    suggestion: 'Não realizar preparação concomitante de mais de um medicamento.'
  },
  {
    id: '20.7',
    category: QuestionCategory.DOSE_UNITARIA,
    type: QuestionType.N,
    text: 'A escrituração de todas as operações relacionadas com preparação de dose unitária ou unitarização está legível, sem rasuras ou emendas?',
    weight: 4,
    isFatal: false
  },
  {
    id: '20.8',
    category: QuestionCategory.DOSE_UNITARIA,
    type: QuestionType.R,
    text: 'A escrituração é mantida atualizada, sendo observada a ordem cronológica?',
    weight: 4,
    isFatal: false
  },
  {
    id: '20.9',
    category: QuestionCategory.DOSE_UNITARIA,
    type: QuestionType.N,
    text: 'O prazo de validade dos produtos submetidos à preparação de dose unitária ou unitarização atende ao disposto no Anexo VI?',
    weight: 5,
    isFatal: true,
    suggestion: 'Respeitar prazos de validade conforme Anexo VI.'
  },
  {
    id: '20.10',
    category: QuestionCategory.DOSE_UNITARIA,
    type: QuestionType.R,
    text: 'Para os casos de fracionamento sem o rompimento da embalagem primária, a farmácia adquire medicamentos disponíveis no mercado em embalagem primária fracionável?',
    weight: 4,
    isFatal: false
  },
  {
    id: '20.11',
    category: QuestionCategory.DOSE_UNITARIA,
    type: QuestionType.INF,
    text: 'A farmácia mantém estoque dos medicamentos já submetidos à preparação de dose unitarizada por quanto tempo?',
    weight: 1,
    isFatal: false
  },
  {
    id: '20.12',
    category: QuestionCategory.DOSE_UNITARIA,
    type: QuestionType.N,
    text: 'A embalagem primária do produto submetido à preparação de doses unitárias ou unitarização garante que as características do medicamento não sejam alteradas?',
    weight: 5,
    isFatal: true,
    suggestion: 'Utilizar embalagem primária que preserve qualidade do medicamento.'
  },
  {
    id: '20.13',
    category: QuestionCategory.DOSE_UNITARIA,
    type: QuestionType.N,
    text: 'Existem procedimentos operacionais escritos para as operações de rotulagem e embalagem de medicamentos submetidos ao preparo de dose unitária ou unitarizada?',
    weight: 4,
    isFatal: false
  },
  {
    id: '20.14',
    category: QuestionCategory.DOSE_UNITARIA,
    type: QuestionType.N,
    text: 'A rotulagem garante a rastreabilidade do medicamento submetido à preparação de dose unitária ou unitarizada?',
    weight: 5,
    isFatal: true,
    suggestion: 'Garantir rastreabilidade na rotulagem.'
  },
  {
    id: '20.15',
    category: QuestionCategory.DOSE_UNITARIA,
    type: QuestionType.N,
    text: 'O serviço de saúde possui infraestrutura adequada para exercer as atividades de preparação de dose unitária ou unitarizada de medicamento?',
    weight: 5,
    isFatal: true,
    suggestion: 'Manter infraestrutura adequada para dose unitária/unitarização.'
  },
  {
    id: '20.16',
    category: QuestionCategory.DOSE_UNITARIA,
    type: QuestionType.R,
    text: 'O serviço possui sala específica para as atividades de preparação de dose unitária ou unitarizada de medicamento?',
    weight: 5,
    isFatal: true,
    suggestion: 'Manter sala específica para dose unitária/unitarização.'
  },
  {
    id: '20.17',
    category: QuestionCategory.DOSE_UNITARIA,
    type: QuestionType.N,
    text: 'A sala destinada às atividades de preparação de dose unitária ou unitarizada está devidamente identificada e suas dimensões são compatíveis com o volume das operações?',
    weight: 4,
    isFatal: false
  },
  {
    id: '20.18',
    category: QuestionCategory.DOSE_UNITARIA,
    type: QuestionType.N,
    text: 'A sala possui: bancada revestida de material liso e de fácil limpeza; pia com água corrente; instrumentos e equipamentos de uso exclusivo; lixeira com tampa, pedal e saco plástico identificada?',
    weight: 5,
    isFatal: true,
    suggestion: 'Equipar a sala conforme exigências do Anexo VI.'
  }
];
