// transacao.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {
  buscarInformacoes(codigo: string): Observable<string> {
    let bandeira: string;
    let motivo: string;
  
    switch (codigo) {
      case '5':
      case '05':
      case '51':
        bandeira = 'ELO | VISA | MASTER';
        motivo = 'Não autorizada - Saldo/Limite Insuficiente';
        break;
        case '7':
        case '07':
        bandeira = 'VISA';
        motivo = 'FRAUDE CONFIRMADA';
        break;
      case '55':
        bandeira = 'ELO | VISA | MASTER';
        motivo = 'SENHA INVÁLIDA';
        break;
      case '86':
        bandeira = 'VISA';
        motivo = 'Senha Inválida';
        break;
      case '57':
        bandeira = 'ELO | VISA | MASTER';
        motivo = 'Transação Não Permitida para o Cartão - Não tente novamente';
        break;
      case '14':
      case '56':
        bandeira = 'ELO | VISA | MASTER';
        motivo = 'Número do Cartão não pertence ao emissor / Número do Cartão Inválido';
        break;
        case '62':
      bandeira = 'ELO | VISA | MASTER';
      motivo = 'Bloqueio Temporário (Ex: Inadimplência) - Contate a central do seu cartão';
      break;
      case '63':
        bandeira = 'ELO | VISA | MASTER';
        motivo = 'Violação de Segurança / suspeita de fraude - Verifique os dados do cartão';
        break;
      case '59':
        bandeira = 'ELO | VISA';
        motivo = 'Suspeita de Fraude - Contate a central do seu cartão';
        break;
      case '58':
        bandeira = 'ELO | VISA | MASTER';
        motivo = 'Comerciante Inválido - Transação não permitida - Não tente novamente';
        break;
      case '4':
      case '04':
        bandeira = 'ELO ';
        motivo = 'Refazer a transação (emissor solicita retentativa) | VISA E MASTER - FRAUDE CONFIRMADA';
        break;
      case '6':
      case '06':
        bandeira = 'Todas';
        motivo = 'Consultar credenciador - Lojista, contate o adquirente';
        break;
      case '19':
        bandeira = 'Todas';
        motivo = 'Problema no adquirente - Erro no cartão – Não tente novamente';
        break;
      case '12':
        bandeira = 'Todas';
        motivo = 'Erro no cartão - Verifique os dados do cartão';
        break;
      case '30':
        bandeira = 'Todas';
        motivo = 'Erro de formato (mensageria) - Erro no cartão - Não tente novamente';
        break;
      case '13':
        bandeira = 'Todas';
        motivo = 'Valor da transação inválida - Valor da transação não permitido - Não tente novamente';
        break;
      case '23':
        bandeira = 'Todas';
        motivo = 'Valor da parcela inválida - Parcelamento inválido - Não tente novamente';
        break;
      case '38':
        bandeira = 'Todas';
        motivo = 'Excedidas tentativas de senha/compras - Excedidas tentativas de senha. Contate a central do seu cartão';
        break;
      case '41':
        bandeira = 'Todas';
        motivo = 'Cartão perdido - Transação não permitida - Não tente novamente';
        break;
      case '43':
        bandeira = 'Todas';
        motivo = 'Cartão roubado - Transação não permitida - Não tente novamente';
        break;
        case '46':
        bandeira = 'VISA';
        motivo = 'Conta encerrada';
        break;
      case '54':
        bandeira = 'Todas';
        motivo = 'Cartão vencido / Data de expiração inválida - Verifique os dados do cartão';
        break;
      case '65':
        bandeira = 'Todas';
        motivo = 'Quantidade de saques excedido - Quantidade de saques excedida. Contate a central do seu cartão';
        break;
      case '83':
        bandeira = 'Todas';
        motivo = 'Senha vencida / Erro de criptografia de senha - Senha inválida - Não tente novamente';
        break;
      case '75':
        bandeira = 'Todas';
        motivo = 'Excedidas tentativas de senha - Excedidas tentativas de senha. Contate a central do seu cartão';
        break;
      case '76':
        bandeira = 'Todas';
        motivo = 'Conta destino inválida ou inexistente - Conta destino inválida - Não tente novamente';
        break;
      case '77':
        bandeira = 'Todas';
        motivo = 'Conta origem inválida ou inexistente - Conta origem inválida - Não tente novamente';
        break;
      case '78':
        bandeira = 'Todas';
        motivo = 'Cartão novo sem desbloqueio - Desbloqueie o cartão';
        break;
      case '82':
        bandeira = 'Todas';
        motivo = 'Cartão inválido (criptograma)';
        break;
      default:
        bandeira = 'Todas';
        motivo = `Código ${codigo} não encontrado.`;
        break;
    }
  
    return of(`Bandeira: ${bandeira} | Motivo: ${motivo}`);
  }
}
