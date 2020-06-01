import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.sass']
})
export class ExercicioDataBindingComponent implements OnInit {

  @Input() palavra: string;
  @Output() clicado = new EventEmitter();
  
  imageURL = 'https://i.ytimg.com/vi/ggykbkz7C6U/hqdefault.jpg';
  initialValue = 'Valor incial';
  isDisabled = true;
  accessibilityText = 'Texto acessível';
  valorDoInput = '';
  valorContador = 10;
  
  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
      console.log('isDisabled: ', this.isDisabled);
    }, 3000);
  }

  ngOnInit(): void {
  }

  onClick($event) {
    console.log('clicou!', $event);
  }

  digitouAlgo($event) {
    this.valorDoInput = $event.target.value;
    console.log($event);
  }
  
  onClickBotaoEmissor($event) {
    console.log('Devo emitir informações para o componente pai');
    this.clicado.emit($event);
  }

  // onValorAtualizadoNoContador(novoValor) {
  //   this.valorContador = novoValor;
  //   console.log('onValorAtualizadoNoContador: ', novoValor );
  // }
}
