import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  mostrar: boolean = true;

  mostrarMensagem(): void {
    this.mostrar = !this.mostrar;
    console.log("CONSOLE");
  }

  mudarCor() {
    const novaCor = this.gerarCorAleatoria(); // Gera uma nova cor aleatória
    document.body.style.backgroundColor = novaCor;
  }

  gerarCorAleatoria() {
    // Gera uma cor hexadecimal aleatória
    return '#' + Math.floor(Math.random()*16777215).toString(16);
    
  }

}
