import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { MainComponent } from './components/main-component/main-component';
import { ContactUs } from './components/contact-us/contact-us';
import { NotFound } from './components/not-found/not-found';
import { ProductDetails } from './components/product-details/product-details';
import { StoreDisplay } from './components/store-display/store-display';
import { Signup } from './components/signup/signup';
import { Login } from './components/login/login';
import { loginGuard } from './Guards/login-guard';
import { InsertProductComponent } from './components/insertproduct/insertproduct';
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
        canActivate:[loginGuard]
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
      {path: 'login', component:Login},
      {
    path: 'insertproduct',
    component: InsertProductComponent
  },
    ],
  },
  {
    path: '**',
    component: NotFound,
  },
];
