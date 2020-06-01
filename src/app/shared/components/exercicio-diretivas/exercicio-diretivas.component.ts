import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.sass']
})
export class ExercicioDiretivasComponent {
 deveExibir = false;
 listaFrutas = [
   'Maçã',
   'Laranja',
   'Banana',
   'Mamão',
   'Melancia'
 ];

 listaCarros = [{
   nome: 'Gol',
   placa: 'ABC-123',
   cor: 'preto',
  }, {
    nome: 'Fusca',
    placa: 'QWE-456',
    cor: 'vermelho',
  }, {
    nome: 'Fox',
    placa: 'DFG-678',
    cor: 'branco',
 }];

 trocarValor() {
   this.deveExibir = !this.deveExibir;
 }

 soma(numero1, numero2) {
   return numero1 + numero2;
 }
}
