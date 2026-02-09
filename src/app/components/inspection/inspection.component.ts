import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InspectionDataService } from '../../services/inspection-data.service';
import { CnpjService } from '../../services/cnpj.service';
import { InspectionForm, Question, QuestionCategory } from '../../models/question.model';

@Component({
  selector: 'app-inspection',
  templateUrl: './inspection.component.html',
  styleUrls: ['./inspection.component.scss']
})
export class InspectionComponent implements OnInit {
  form: InspectionForm;
  currentCategory: QuestionCategory | null = null;
  cnpjLoading = false;
  cnpjMessage: string | null = null;
  cnpjSuccess = false;
  categories: { value: QuestionCategory; label: string }[] = [
    { value: QuestionCategory.IDENTIFICACAO, label: 'Identificação da Farmácia' },
    { value: QuestionCategory.CONDICOES_GERAIS, label: 'Condições Gerais' },
    { value: QuestionCategory.RECURSOS_HUMANOS, label: 'Recursos Humanos e Organização' },
    { value: QuestionCategory.INFRAESTRUTURA, label: 'Infraestrutura Física' },
    { value: QuestionCategory.MATERIAIS_EQUIPAMENTOS, label: 'Materiais, Equipamentos e Utensílios' },
    { value: QuestionCategory.LIMPEZA, label: 'Limpeza e Sanitização' },
    { value: QuestionCategory.MATERIAS_PRIMAS, label: 'Matérias-Primas e Materiais de Embalagem' },
    { value: QuestionCategory.AGUA, label: 'Água' },
    { value: QuestionCategory.MANIPULACAO, label: 'Manipulação' },
    { value: QuestionCategory.CONTROLES, label: 'Controles' },
    { value: QuestionCategory.ESTOQUE_MINIMO, label: 'Estoque Mínimo' },
    { value: QuestionCategory.ROTULAGEM_EMBALAGEM, label: 'Rotulagem e Embalagem' },
    { value: QuestionCategory.CONSERVACAO_TRANSPORTE, label: 'Conservação e Transporte' },
    { value: QuestionCategory.DISPENSACAO, label: 'Dispensação' },
    { value: QuestionCategory.GARANTIA_QUALIDADE, label: 'Garantia de Qualidade' },
    { value: QuestionCategory.BAIXO_INDICE_TERAPEUTICO, label: 'Baixo Índice Terapêutico' },
    { value: QuestionCategory.HORMONIOS_ANTIBIOTICOS, label: 'Hormônios, Antibióticos e Citostáticos' },
    { value: QuestionCategory.PRODUTOS_ESTEREIS, label: 'Produtos Estéreis' },
    { value: QuestionCategory.HOMEOPATICAS, label: 'Preparações Homeopáticas' },
    { value: QuestionCategory.DOSE_UNITARIA, label: 'Dose Unitária e Unitarização' }
  ];

  constructor(
    private inspectionDataService: InspectionDataService,
    private cnpjService: CnpjService,
    private router: Router
  ) {
    this.form = this.inspectionDataService.createEmptyForm();
  }

  buscarRazaoSocialPorCnpj(): void {
    const cnpj = (this.form.farmaciaCNPJ || '').trim();
    if (!cnpj) {
      this.cnpjMessage = null;
      this.cnpjSuccess = false;
      return;
    }
    const apenasNumeros = cnpj.replace(/\D/g, '');
    if (apenasNumeros.length !== 14) {
      this.cnpjMessage = 'Informe um CNPJ com 14 dígitos para buscar a razão social.';
      this.cnpjSuccess = false;
      return;
    }
    this.cnpjMessage = null;
    this.cnpjSuccess = false;
    this.cnpjLoading = true;
    this.cnpjService.consultar(cnpj).subscribe(resultado => {
      this.cnpjLoading = false;
      if (resultado.sucesso && resultado.dados.razao_social) {
        this.form.farmaciaNome = resultado.dados.razao_social;
        this.cnpjMessage = 'Razão social preenchida automaticamente.';
        this.cnpjSuccess = true;
      } else {
        this.cnpjMessage = resultado.sucesso ? 'Razão social não informada na base.' : resultado.mensagem;
        this.cnpjSuccess = false;
      }
    });
  }

  ngOnInit(): void {
    // Começar com a primeira categoria
    if (this.categories.length > 0) {
      this.currentCategory = this.categories[0].value;
    }
  }

  getCurrentCategoryQuestions(): Question[] {
    if (!this.currentCategory) return [];
    return this.form.questions.filter(q => q.category === this.currentCategory);
  }

  getCategoryLabel(category: QuestionCategory): string {
    const cat = this.categories.find(c => c.value === category);
    return cat ? cat.label : category;
  }

  selectCategory(category: QuestionCategory): void {
    this.currentCategory = category;
  }

  getAnsweredCount(): number {
    return this.form.questions.filter(q => 
      q.answer !== undefined && q.answer !== null && q.answer !== ''
    ).length;
  }

  getTotalQuestionsCount(): number {
    return this.form.questions.length;
  }

  getProgressPercentage(): number {
    return (this.getAnsweredCount() / this.getTotalQuestionsCount()) * 100;
  }

  canFinish(): boolean {
    // Permite finalizar a qualquer momento; apenas o nome da farmácia é obrigatório.
    // Questões não respondidas (ex.: homeopatia, controlados, estoque mínimo) não entram na pontuação.
    return this.form.farmaciaNome.trim() !== '';
  }

  finishInspection(): void {
    // Salvar no localStorage
    localStorage.setItem('inspectionForm', JSON.stringify(this.form));
    this.router.navigate(['/resultado']);
  }

  updateAnswer(questionId: string, answer: boolean | string): void {
    const question = this.form.questions.find(q => q.id === questionId);
    if (question) {
      question.answer = answer;
    }
  }
}
