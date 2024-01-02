import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TransacaoService } from './transacao.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'codcartao';
  codigo: string = '';
  resultado: string = '';

  constructor(private transacaoService: TransacaoService) {}

  onEnterKeyPress(event: any): void {
    if (event.key === 'Enter') {
      this.buscarInformacoes();
    }
  }

  buscarInformacoes() {
    this.transacaoService.buscarInformacoes(this.codigo).subscribe(
      (data) => {
        this.resultado = data;
      },
      (error) => {
        console.error('Erro ao buscar informações:', error);
        this.resultado = 'Erro ao buscar informações. Tente novamente mais tarde.';
      }
    );
  }
}
