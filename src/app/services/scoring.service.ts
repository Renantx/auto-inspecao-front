import { Injectable } from '@angular/core';
import { Question, InspectionForm, QuestionType } from '../models/question.model';

export interface ScoreResult {
  totalScore: number;
  maxScore: number;
  percentage: number;
  grade: string;
  fatalErrors: Question[];
  suggestions: string[];
  categoryScores: { category: string; score: number; maxScore: number; percentage: number }[];
}

@Injectable({
  providedIn: 'root'
})
export class ScoringService {

  calculateScore(form: InspectionForm): ScoreResult {
    let totalScore = 0;
    let maxScore = 0;
    const fatalErrors: Question[] = [];
    const categoryScores: { [key: string]: { score: number; maxScore: number } } = {};

    form.questions.forEach(question => {
      const questionMaxScore = question.weight * 10; // Cada questão vale peso * 10 pontos
      maxScore += questionMaxScore;

      // Verificar se a questão foi respondida
      if (question.answer === undefined || question.answer === null || question.answer === '') {
        // Questão não respondida não ganha pontos
        this.addToCategoryScore(categoryScores, question.category.toString(), 0, questionMaxScore);
        return;
      }

      // Para questões SIM/NÃO, INF, R, I, N
      if (question.type === QuestionType.SIM_NAO || question.type === QuestionType.R || question.type === QuestionType.I || question.type === QuestionType.N) {
        if (question.answer === true) {
          // Resposta SIM (positiva) ganha pontos completos
          totalScore += questionMaxScore;
          this.addToCategoryScore(categoryScores, question.category.toString(), questionMaxScore, questionMaxScore);
        } else if (question.answer === false && question.isFatal) {
          // Resposta NÃO em questão fatal = erro fatal
          fatalErrors.push(question);
          this.addToCategoryScore(categoryScores, question.category.toString(), 0, questionMaxScore);
        } else {
          // Resposta NÃO em questão não fatal = 0 pontos
          this.addToCategoryScore(categoryScores, question.category.toString(), 0, questionMaxScore);
        }
      } else if (question.type === QuestionType.INF) {
        // Questões informativas: se respondidas, ganham pontos proporcionais
        if (question.answer && question.answer.toString().trim() !== '') {
          totalScore += questionMaxScore;
          this.addToCategoryScore(categoryScores, question.category.toString(), questionMaxScore, questionMaxScore);
        } else {
          this.addToCategoryScore(categoryScores, question.category.toString(), 0, questionMaxScore);
        }
      }
    });

    const percentage = maxScore > 0 ? (totalScore / maxScore) * 100 : 0;
    const grade = this.calculateGrade(percentage, fatalErrors.length);
    
    const suggestions = fatalErrors
      .filter(q => q.suggestion)
      .map(q => q.suggestion!)
      .filter((v, i, a) => a.indexOf(v) === i); // Remove duplicatas

    const categoryScoresArray = Object.keys(categoryScores).map(category => ({
      category: this.getCategoryName(category),
      score: categoryScores[category].score,
      maxScore: categoryScores[category].maxScore,
      percentage: categoryScores[category].maxScore > 0 
        ? (categoryScores[category].score / categoryScores[category].maxScore) * 100 
        : 0
    }));

    return {
      totalScore,
      maxScore,
      percentage,
      grade,
      fatalErrors,
      suggestions,
      categoryScores: categoryScoresArray
    };
  }

  private addToCategoryScore(
    categoryScores: { [key: string]: { score: number; maxScore: number } },
    category: string,
    score: number,
    maxScore: number
  ) {
    if (!categoryScores[category]) {
      categoryScores[category] = { score: 0, maxScore: 0 };
    }
    categoryScores[category].score += score;
    categoryScores[category].maxScore += maxScore;
  }

  private calculateGrade(percentage: number, fatalErrorsCount: number): string {
    if (fatalErrorsCount > 0) {
      return 'REPROVADO';
    }
    
    if (percentage >= 90) {
      return 'EXCELENTE';
    } else if (percentage >= 75) {
      return 'BOM';
    } else if (percentage >= 60) {
      return 'REGULAR';
    } else {
      return 'INSUFICIENTE';
    }
  }

  private getCategoryName(category: string): string {
    const names: { [key: string]: string } = {
      'IDENTIFICACAO': 'Identificação',
      'CONDICOES_GERAIS': 'Condições Gerais',
      'RECURSOS_HUMANOS': 'Recursos Humanos',
      'INFRAESTRUTURA': 'Infraestrutura Física',
      'MATERIAIS_EQUIPAMENTOS': 'Materiais e Equipamentos',
      'LIMPEZA': 'Limpeza e Sanitização',
      'MATERIAS_PRIMAS': 'Matérias-Primas',
      'AGUA': 'Água',
      'MANIPULACAO': 'Manipulação',
      'CONTROLES': 'Controles',
      'ESTOQUE_MINIMO': 'Estoque Mínimo',
      'ROTULAGEM_EMBALAGEM': 'Rotulagem e Embalagem',
      'CONSERVACAO_TRANSPORTE': 'Conservação e Transporte',
      'DISPENSACAO': 'Dispensação',
      'GARANTIA_QUALIDADE': 'Garantia de Qualidade',
      'BAIXO_INDICE_TERAPEUTICO': 'Baixo Índice Terapêutico',
      'HORMONIOS_ANTIBIOTICOS': 'Hormônios, Antibióticos e Citostáticos',
      'PRODUTOS_ESTEREIS': 'Produtos Estéreis',
      'HOMEOPATICAS': 'Preparações Homeopáticas',
      'DOSE_UNITARIA': 'Dose Unitária e Unitarização'
    };
    return names[category] || category;
  }
}
