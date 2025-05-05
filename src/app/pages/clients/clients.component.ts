import { Component } from '@angular/core';
import { environment } from '@env';

@Component({
  standalone: false,
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {

  private readonly clientsPath = '/assets/clients/';
  clients;

  constructor() {
    this.clients = environment.clients.map(({ alt, src,  href}) => ({
      alt,
      src: this.clientsPath + src,
      href,
    }))

  }


  logoClick(event: MouseEvent, href: string) {
    // disable navigation if link doesn't exist
    if(href === '#') {
      event.preventDefault();
    }
  }

}
