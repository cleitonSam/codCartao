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
    let mensagem: any;
  
    switch (codigo) {
      case '5':
      case '51':
        bandeira = 'ELO | VISA | MASTER';
        motivo = 'Não autorizada - Saldo/Limite Insuficiente';
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
        bandeira = 'ELO ';
        motivo = 'Refazer a transação (emissor solicita retentativa) | VISA E MASTER - FRAUDE CONFIRMADA';
        bandeira = 'ELO ';
        motivo = 'Refazer a transação (emissor solicita retentativa) | VISA E MASTER - FRAUDE CONFIRMADA';
        break;
      case '6':
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
  
    return of(`Bandeira: ${bandeira} | Motivo: ${motivo} `);
  }

  buscarIn(codigo: string): Observable<string> {
    let bandeira: string;
    let motivo: string;
    let mensagem: any;
  
    switch (codigo) {
      case '5':
      case '51':
        bandeira = 'ELO | VISA | MASTER';
        motivo = 'Não autorizada - Saldo/Limite Insuficiente';
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
        motivo = '<b>Código 4 (Reversível):<b>\n\n ' +
        'Motivo: Refazer a transação (emissor solicita retentativa) | VISA E MASTER - FRAUDE CONFIRMADA CONTATO\n ' +
        'Assunto: Importante - Atraso no Pagamento com Cartão de Crédito (Fraude Confirmada - Contato Necessário)\n ' +
        'Olá [Nome do Aluno], espero que esteja bem. Sou (INFORMAR SEU NOME), da Motion fit academia. O Motivo do meu contato é que\n ' +
        'identificamos um problema relacionado ao pagamento com o cartão de crédito vinculado à sua conta.\n ' +
        'De acordo com nossos registros, ao tentar realizar a cobrança de sua mensalidade, a transação foi marcada pela operadora de cobrança, ' +
        'como "emissor solicita retentativa" pela operadora, e foi confirmada como uma possível fraude, pois a última compra que fez com seu ' +
        'cartão foi apontada como suspeita. Dessa forma não conseguimos realizar a cobrança da parcela em seu cartão. ' +
        'Diante disso, é indispensável que entremos em contato para esclarecimentos e para garantir a segurança da sua conta, e evitar atrasos ' +
        'que podem gerar juros e multa. Vou lhe passar algumas informações importantes sobre os detalhes da transação. ' +
        '• Bandeira do Cartão: VISA/MasterCard (INFORMAR A BANDEIRA CORRETA) ' +
        '• Motivo do Atraso: Emissor solicita retentativa - CLIENTE verificar possível tentativa de fraude anterior (de outra ' +
        'empresa/operadora)\n\n ' +

        
        '• Status: Fraude Confirmada - Contato Necessário ' +
        'Recomendamos que entre em contato com a sua operadora, para verificar, garantir a segurança e autorizar a transação pendente. ' +
        'Se preferir posso fazer a alteração do seu cartão agora mesmo, lhe envio o link de cadastro de cartão e você pode realizar o cadastro, ' +
        'ou pode nos retornar por esse mesmo Número (INFORMAR NÚMERO DA UNIDADE) para fornecer informações adicionais ou ' +
        'esclarecimentos sobre a transação ta bom? ' +
        'SE FOR LIGAÇÃO FINALIZAR COM: ' +
        'Foi um prazer falar com você, tem algo a mais que eu posso ajudar a melhorar sua experiência aqui na Motion fit? ( ANOTAR E ' +
        'ENCAMINHAR SOLICITAÇÃO DO ALUNO PARA SETOR RESPONSÁVEL INFORMANDO PRAZO ATÉ 7 DIAS PARA RETORNO ). Muito ' +
        'Obrigado pelo seu tempo, Motion fit agradece tenha um excelente dia! ' +
        '❖ SE FOR MENSAGEM FINALIZAR COM: ' +
        'Entendemos que situações como essas podem ser desconfortáveis, mas é crucial resolvermos essa questão para garantir a ' +
        'integridade da sua conta. Estamos à disposição para ajudar no que for necessário. Agradecemos pela sua compreensão e cooperação. ' +
        'Atenciosamente, (SEU NOME) (FUNÇÃO) ' +
        'MOTION FIT ACADEMIA';
        break;
      case '6':
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
  
    return of(`${motivo} `);
  }
}

