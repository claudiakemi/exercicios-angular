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
      this.title = 'Título mudado depois de 3s';
      console.log('Passa aqui depois de 3s');
    }, 3000);
  }

  ngOnInit(): void {
  }

}
