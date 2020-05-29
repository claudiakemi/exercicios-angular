import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.sass']
})
export class ExercicioPipesComponent {

  filme = {
    titulo: 'Harry Potter e a Pedra Filosofal',
    estrelas: 4.456892,
    preco: 15.45,
    dataLancamento: new Date(2019, 6, 30),
  };

}
