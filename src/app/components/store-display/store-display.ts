import { Component } from '@angular/core';
import { Store } from '../../models/store';

@Component({
  selector: 'app-store-display',
  imports: [],
  templateUrl: './store-display.html',
  styleUrl: './store-display.css',
})
export class StoreDisplay {
  store: Store = new Store('myStore', ['Branch1', 'Branch2'], 'logo.png');
}
