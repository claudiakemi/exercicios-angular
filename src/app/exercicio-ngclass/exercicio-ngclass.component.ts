import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-ngclass',
  templateUrl: './exercicio-ngclass.component.html',
  styleUrls: ['./exercicio-ngclass.component.sass']
})
export class ExercicioNgclassComponent implements OnInit {

  deveSerVerde = false;

  tornarVerde() {
    this.deveSerVerde = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
