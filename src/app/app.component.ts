import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Bom dia!';
  
  outraPalavra = 'Gato';

  constructor(){

    
  }

  eventoRecebido($event){
    console.log('AppComponent: EVENTO RECEBIDO', $event);
  }
}

