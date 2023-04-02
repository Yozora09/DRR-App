import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./authentication/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'personal-info',
    loadChildren: () => import('./authentication/registration/personal-info/personal-info.module').then( m => m.PersonalInfoPageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./authentication/registration/address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'user-info',
    loadChildren: () => import('./authentication/registration/user-info/user-info.module').then( m => m.UserInfoPageModule)
  },
  {
    path: 'home-screen',
    loadChildren: () => import('./home-screen/home-screen.module').then( m => m.HomeScreenPageModule)
  },
  {
    path: 'confirmation',
    loadChildren: () => import('./confirmation/confirmation.module').then( m => m.ConfirmationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
