export enum QuestionType {
  SIM_NAO = 'SIM_NAO',
  INF = 'INF',
  R = 'R',
  I = 'I',
  N = 'N'
}

export enum QuestionCategory {
  IDENTIFICACAO = 'IDENTIFICACAO',
  CONDICOES_GERAIS = 'CONDICOES_GERAIS',
  RECURSOS_HUMANOS = 'RECURSOS_HUMANOS',
  INFRAESTRUTURA = 'INFRAESTRUTURA',
  MATERIAIS_EQUIPAMENTOS = 'MATERIAIS_EQUIPAMENTOS',
  LIMPEZA = 'LIMPEZA',
  MATERIAS_PRIMAS = 'MATERIAS_PRIMAS',
  AGUA = 'AGUA',
  MANIPULACAO = 'MANIPULACAO',
  CONTROLES = 'CONTROLES',
  ESTOQUE_MINIMO = 'ESTOQUE_MINIMO',
  ROTULAGEM_EMBALAGEM = 'ROTULAGEM_EMBALAGEM',
  CONSERVACAO_TRANSPORTE = 'CONSERVACAO_TRANSPORTE',
  DISPENSACAO = 'DISPENSACAO',
  GARANTIA_QUALIDADE = 'GARANTIA_QUALIDADE',
  BAIXO_INDICE_TERAPEUTICO = 'BAIXO_INDICE_TERAPEUTICO',
  HORMONIOS_ANTIBIOTICOS = 'HORMONIOS_ANTIBIOTICOS',
  PRODUTOS_ESTEREIS = 'PRODUTOS_ESTEREIS',
  HOMEOPATICAS = 'HOMEOPATICAS',
  DOSE_UNITARIA = 'DOSE_UNITARIA'
}

export interface Question {
  id: string;
  category: QuestionCategory;
  type: QuestionType;
  text: string;
  weight: number; // Peso da questão (1-5, sendo 5 crítico)
  isFatal: boolean; // Se for erro fatal
  answer?: boolean | string; // Resposta: true/false para SIM/NÃO, string para INF
  suggestion?: string; // Sugestão caso seja erro fatal
}

export interface InspectionForm {
  farmaciaNome: string;
  farmaciaCNPJ?: string;
  responsavelTecnico?: string;
  crf?: string;
  dataInspecao: Date;
  questions: Question[];
  /** Imagem da assinatura (data URL base64) do responsável técnico */
  assinaturaDataUrl?: string;
  /** Data/hora em que o farmacêutico assinou (ISO string) */
  dataAssinatura?: string;
}
