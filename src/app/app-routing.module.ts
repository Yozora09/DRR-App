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
    path: 'confirmation',
    loadChildren: () => import('./confirmation/confirmation.module').then( m => m.ConfirmationPageModule)
  },
  {
    path: 'on-board1',
    loadChildren: () => import('./onBoardPages/on-board1/on-board1.module').then( m => m.OnBoard1PageModule)
  },
  {
    path: 'on-board2',
    loadChildren: () => import('./onBoardPages/on-board2/on-board2.module').then( m => m.OnBoard2PageModule)
  },
  {
    path: 'on-board3',
    loadChildren: () => import('./onBoardPages/on-board3/on-board3.module').then( m => m.OnBoard3PageModule)
  },
  {
    path: 'home-screen',
    loadChildren: () => import('./mainScreen/main/home-screen/home-screen.module').then( m => m.HomeScreenPageModule)
  },
  {
    path: 'info-page',
    loadChildren: () => import('./mainScreen/main/info-page/info-page.module').then( m => m.InfoPagePageModule)
  },
  {
    path: 'account-page',
    loadChildren: () => import('./mainScreen/main/account-page/account-page.module').then( m => m.AccountPagePageModule)
  },
  {
    path: 'earthquake-page',
    loadChildren: () => import('./disasterPage/disasters/earthquake-page/earthquake-page.module').then( m => m.EarthquakePagePageModule)
  },
  {
    path: 'cyclone-page',
    loadChildren: () => import('./disasterPage/disasters/cyclone-page/cyclone-page.module').then( m => m.CyclonePagePageModule)
  },
  {
    path: 'flooding-page',
    loadChildren: () => import('./disasterPage/disasters/flooding-page/flooding-page.module').then( m => m.FloodingPagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
