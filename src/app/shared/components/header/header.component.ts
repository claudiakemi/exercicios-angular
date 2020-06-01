import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Input() title = 'Seja bem-vindo!';
  
  constructor() { 
    setTimeout(() => {
      this.title = 'Seja bem-vindo(a)!';
      console.log('Passa aqui depois de 3s');
    }, 3000);
  }

  ngOnInit(): void {
  }

}
