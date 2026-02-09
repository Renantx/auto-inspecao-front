import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { InspectionForm } from '../models/question.model';
import { AuthService } from './auth.service';

interface SaveInspectionResponse {
  success: boolean;
  message: string;
  data?: {
    inspecao_id: number;
    total_score: number;
    max_score: number;
    percentage: number;
    grade: string;
    fatal_errors_count: number;
  };
  errors?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class InspectionService {
  private readonly API_URL = 'http://rtiautoinspecao.saude.ws/api/inspecoes/salvar.php';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  /**
   * Salva uma inspeção no backend
   */
  saveInspection(form: InspectionForm): Observable<{ success: boolean; message?: string; data?: any }> {
    // Prepara os dados para envio
    const payload = {
      farmaciaNome: form.farmaciaNome,
      farmaciaCNPJ: form.farmaciaCNPJ || null,
      responsavelTecnico: form.responsavelTecnico || null,
      crf: form.crf || null,
      dataInspecao: form.dataInspecao instanceof Date
        ? form.dataInspecao.toISOString().split('T')[0]
        : form.dataInspecao,
      assinaturaDataUrl: form.assinaturaDataUrl || null,
      dataAssinatura: form.dataAssinatura || null,
      questions: form.questions.map(q => ({
        id: q.id,
        category: q.category,
        type: q.type,
        text: q.text,
        weight: q.weight,
        isFatal: q.isFatal,
        answer: q.answer,
        suggestion: q.suggestion || null
      }))
    };

    console.log('💾 Salvando inspeção no backend...');
    console.log('📤 Payload:', { ...payload, questions: `${payload.questions.length} questões` });

    return this.http.post<SaveInspectionResponse>(this.API_URL, payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe(
      map((response: SaveInspectionResponse): { success: boolean; message?: string; data?: any } => {
        console.log('✅ Inspeção salva com sucesso:', response);
        if (response.success && response.data) {
          return {
            success: true,
            message: response.message,
            data: response.data
          };
        }
        return {
          success: false,
          message: response.message || 'Erro ao salvar inspeção'
        };
      }),
      catchError((error): Observable<{ success: boolean; message?: string; data?: any }> => {
        console.error('❌ Erro ao salvar inspeção:', error);
        let errorMessage = 'Erro ao salvar inspeção. Tente novamente.';
        
        if (error.error) {
          if (error.error.message) {
            errorMessage = error.error.message;
          } else if (error.error.errors && Array.isArray(error.error.errors)) {
            errorMessage = error.error.errors.join(', ');
          }
        }
        
        return of<{ success: boolean; message?: string; data?: any }>({ success: false, message: errorMessage });
      })
    );
  }
}
