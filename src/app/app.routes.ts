import { Routes } from '@angular/router';
import { HomeComponent } from './pages/main/home/home.component';
import { MainComponent } from './pages/main/home/main.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/auth/reset-password/reset-password.component';
import { ActivationAccountComponent } from './pages/auth/activation-account/activation-account.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
  },
  {
    path: 'activation-account',
    component: ActivationAccountComponent,
  },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'dashboard', component: HomeComponent },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
