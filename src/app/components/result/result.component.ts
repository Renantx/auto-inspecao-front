import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { InspectionForm } from '../../models/question.model';
import { ScoringService, ScoreResult } from '../../services/scoring.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @ViewChild('signatureCanvas', { static: false }) signatureCanvasRef!: ElementRef<HTMLCanvasElement>;

  form: InspectionForm | null = null;
  result: ScoreResult | null = null;
  assinaturaEditando = false;
  private canvasContext: CanvasRenderingContext2D | null = null;
  private desenhando = false;
  private lastX = 0;
  private lastY = 0;

  constructor(
    private scoringService: ScoringService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const savedForm = localStorage.getItem('inspectionForm');
    if (savedForm) {
      const parsedForm = JSON.parse(savedForm);
      // Converter a data de string para Date
      if (parsedForm.dataInspecao) {
        parsedForm.dataInspecao = new Date(parsedForm.dataInspecao);
      }
      this.form = parsedForm;
      if (this.form) {
        this.result = this.scoringService.calculateScore(this.form);
      }
    } else {
      // Se não houver formulário salvo, redirecionar para início
      this.router.navigate(['/']);
    }
  }

  getGradeColor(): string {
    if (!this.result) return '#bdc3c7';
    
    if (this.result.grade === 'REPROVADO') return '#e74c3c';
    if (this.result.grade === 'EXCELENTE') return '#27ae60';
    if (this.result.grade === 'BOM') return '#3498db';
    if (this.result.grade === 'REGULAR') return '#f39c12';
    return '#e67e22';
  }

  getGradeIcon(): string {
    if (!this.result) return '📊';
    
    if (this.result.grade === 'REPROVADO') return '❌';
    if (this.result.grade === 'EXCELENTE') return '⭐';
    if (this.result.grade === 'BOM') return '✓';
    if (this.result.grade === 'REGULAR') return '⚠️';
    return '📊';
  }

  hasFatalErrors(): boolean {
    return this.result ? this.result.fatalErrors.length > 0 : false;
  }

  newInspection(): void {
    localStorage.removeItem('inspectionForm');
    this.router.navigate(['/']);
  }

  printReport(): void {
    window.print();
  }

  getCategoryColor(percentage: number): string {
    if (percentage >= 90) return '#27ae60';
    if (percentage >= 75) return '#3498db';
    if (percentage >= 60) return '#f39c12';
    return '#e74c3c';
  }

  // --- Assinatura ---
  temAssinatura(): boolean {
    return !!(this.form?.assinaturaDataUrl);
  }

  iniciarAssinatura(): void {
    this.assinaturaEditando = true;
    setTimeout(() => this.initCanvas(), 50);
  }

  private initCanvas(): void {
    const canvas = this.signatureCanvasRef?.nativeElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    this.canvasContext = ctx;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    ctx.strokeStyle = '#1a237e';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, rect.width, rect.height);
  }

  onSignaturePointerDown(e: MouseEvent | TouchEvent): void {
    e.preventDefault();
    if (!this.canvasContext) return;
    this.desenhando = true;
    const pos = this.getPointerPos(e);
    this.lastX = pos.x;
    this.lastY = pos.y;
  }

  onSignaturePointerMove(e: MouseEvent | TouchEvent): void {
    e.preventDefault();
    if (!this.desenhando || !this.canvasContext) return;
    const pos = this.getPointerPos(e);
    this.canvasContext.beginPath();
    this.canvasContext.moveTo(this.lastX, this.lastY);
    this.canvasContext.lineTo(pos.x, pos.y);
    this.canvasContext.stroke();
    this.lastX = pos.x;
    this.lastY = pos.y;
  }

  onSignaturePointerUp(e: MouseEvent | TouchEvent): void {
    e.preventDefault();
    this.desenhando = false;
  }

  private getPointerPos(e: MouseEvent | TouchEvent): { x: number; y: number } {
    const canvas = this.signatureCanvasRef?.nativeElement;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    if ('touches' in e && e.touches.length > 0) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      };
    }
    const me = e as MouseEvent;
    return { x: me.clientX - rect.left, y: me.clientY - rect.top };
  }

  limparAssinatura(): void {
    if (!this.canvasContext) return;
    const canvas = this.signatureCanvasRef?.nativeElement;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    this.canvasContext.fillStyle = '#fff';
    this.canvasContext.fillRect(0, 0, rect.width, rect.height);
    this.canvasContext.strokeStyle = '#1a237e';
  }

  confirmarAssinatura(): void {
    const canvas = this.signatureCanvasRef?.nativeElement;
    if (!canvas || !this.form) return;
    const dataUrl = canvas.toDataURL('image/png');
    this.form.assinaturaDataUrl = dataUrl;
    this.form.dataAssinatura = new Date().toISOString();
    this.assinaturaEditando = false;
    try {
      localStorage.setItem('inspectionForm', JSON.stringify(this.form));
    } catch (_) {}
  }

  refazerAssinatura(): void {
    if (!this.form) return;
    this.form.assinaturaDataUrl = undefined;
    this.form.dataAssinatura = undefined;
    this.iniciarAssinatura();
    try {
      localStorage.setItem('inspectionForm', JSON.stringify(this.form));
    } catch (_) {}
  }

  dataAssinaturaFormatada(): string {
    if (!this.form?.dataAssinatura) return '';
    try {
      const d = new Date(this.form.dataAssinatura);
      return d.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
    } catch {
      return this.form.dataAssinatura;
    }
  }
}
