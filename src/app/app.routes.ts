import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LogicComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LogicComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];