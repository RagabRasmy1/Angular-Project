import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { Home } from '../home/home';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-component',
  imports: [Nav, RouterOutlet],
  templateUrl: './main-component.html',
  styleUrl: './main-component.css',
})
export class MainComponent {}
