import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get year(): string {
    return new Date().getFullYear().toString();
  }

}
