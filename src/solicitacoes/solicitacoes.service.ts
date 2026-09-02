import { Injectable, NotFoundException } from '@nestjs/common';
import { normalize } from 'path';

type StatusSolicitacao = 'pendente' | 'aprovada';

type Solicitacao = {
  id: number,
  titulo: string,
  status: StatusSolicitacao;
};

@Injectable()
export class SolicitacoesService {
  private readonly solicitacoes: Solicitacao[] = [
    { id: 1, titulo: 'Aquisição de notebook', status: 'pendente' },
  ];

  buscarPorId(id: number) {
    const solicitacao = this.solicitacoes.find((s) => s.id === id);

    if (!solicitacao) {
      throw new NotFoundException("Solicitação não encontrada");
    }

    return solicitacao;
  }

  aprovar(id: number) {
    const solicitacao = this.buscarPorId(id);
    solicitacao.status = 'aprovada';
    return solicitacao;
  }

  gerarRelatorio() {
    const solicitacoesTotais = this.solicitacoes.length;
    
    const solicitacoesPorStatus = {
      pendente: this.solicitacoes.filter(s => s.status === "pendente").length,
      aprovada: this.solicitacoes.filter(s => s.status === "aprovada").length
    }

    return {solicitacoesTotais, solicitacoesPorStatus}
  }
}
