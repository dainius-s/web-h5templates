import { Component } from '@angular/core';

@Component({
  
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor() { }

  get year(): string {
    return new Date().getFullYear().toString();
  }

}
