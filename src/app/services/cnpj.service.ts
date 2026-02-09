import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const BRASIL_API_CNPJ = 'https://brasilapi.com.br/api/cnpj/v1';

export interface CnpjResponse {
  cnpj: string;
  razao_social: string;
  nome_fantasia: string | null;
  logradouro?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  municipio?: string;
  uf?: string;
  cep?: string;
  ddd_telefone_1?: string;
  email?: string | null;
  situacao_cadastral?: string;
  descricao_situacao_cadastral?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CnpjService {

  constructor(private http: HttpClient) {}

  /**
   * Consulta dados do CNPJ na BrasilAPI (pública, sem necessidade de chave).
   * O CNPJ deve conter 14 dígitos (com ou sem formatação).
   */
  consultar(cnpj: string): Observable<{ sucesso: true; dados: CnpjResponse } | { sucesso: false; mensagem: string }> {
    const apenasNumeros = (cnpj || '').replace(/\D/g, '');
    if (apenasNumeros.length !== 14) {
      return of({
        sucesso: false,
        mensagem: 'CNPJ deve ter 14 dígitos.'
      });
    }

    return this.http.get<CnpjResponse>(`${BRASIL_API_CNPJ}/${apenasNumeros}`).pipe(
      map(dados => ({ sucesso: true as const, dados })),
      catchError(err => {
        const msg = err?.error?.message
          || (err?.status === 404 ? 'CNPJ não encontrado.' : 'Não foi possível consultar o CNPJ. Tente novamente.');
        return of({ sucesso: false as const, mensagem: msg });
      })
    );
  }
}
