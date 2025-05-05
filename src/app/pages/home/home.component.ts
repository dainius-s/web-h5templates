import {AfterContentInit, Component, OnInit} from '@angular/core';
import {ParticlesConfig} from './particles.config';

declare let particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit(): void {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }

  ngAfterContentInit(): void {

  }

}
