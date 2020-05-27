import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { 
    console.log("Passei por aqui");


  }
  sum(number1, number2) {
    return number1 + number2;
  }

  ngOnInit(): void {
  }

}
