import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TransacaoService } from './transacao.service';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    FormsModule, PdfViewerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'codcartao';
  codigo: string = '';
  resultado: string = '';
  phoneNumber: string = '';
  mensagem: string = '';
  a: any;
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  constructor(private transacaoService: TransacaoService, private sanitizer: DomSanitizer) {}

  onEnterKeyPress(event: any): void {
    if (event.key === 'Enter') {
      this.buscarInformacoes();
    }
  }

  sanitizeHtml(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  

  buscarInformacoes() {
    this.transacaoService.buscarIn(this.codigo).subscribe(
      (t) =>{
        this.a = t;
        console.log(t)
      }
    )
    this.transacaoService.buscarInformacoes(this.codigo).subscribe(
      (data) => {
        this.resultado = data;
        console.log(data)
      },
      (error) => {
        console.error('Erro ao buscar informações:', error);
        this.resultado = 'Erro ao buscar informações. Tente novamente mais tarde.';
      }
    );
  }

  enviarMensagem() {
    if (this.phoneNumber) {
      const mensagem = encodeURIComponent(`${this.mensagem}`); // Substitua pelo seu texto
      const url = `https://api.whatsapp.com/send?phone=+55${this.phoneNumber}&text=${mensagem}`;
      window.open(url, '_blank');
    }
  }
}
