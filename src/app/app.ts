import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './components/nav/nav';
import { StoreDisplay } from './components/store-display/store-display';
import { Products } from './components/products/products';
import { Home } from "./components/home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, StoreDisplay, Products, Home],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'lab2';
}
