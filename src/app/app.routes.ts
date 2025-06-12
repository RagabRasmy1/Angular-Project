import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { MainComponent } from './components/main-component/main-component';
import { ContactUs } from './components/contact-us/contact-us';
import { NotFound } from './components/not-found/not-found';
import { ProductDetails } from './components/product-details/product-details';
import { StoreDisplay } from './components/store-display/store-display';
import { Signup } from './components/signup/signup';
import { Login } from './components/login/login';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: Home,
      },
      {
        path: 'contact',
        component: ContactUs,
      },
      {
        path: 'about',
        component: StoreDisplay,
      },
      {
        path: 'products/:id',
        component: ProductDetails,
      },
      {path:'signup',component:Signup},
      {path: 'login', component:Login}
    ],
  },
  {
    path: '**',
    component: NotFound,
  },
];
