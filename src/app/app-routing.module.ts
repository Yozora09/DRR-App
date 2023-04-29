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
  },
  {
    path: 'disaster-mainpage',
    loadChildren: () => import('./disasterPage/disaster-mainpage/disaster-mainpage.module').then( m => m.DisasterMainpagePageModule)
  },
  {
    path: 'drrmo-page',
    loadChildren: () => import('./disasterPage/drrmo-page/drrmo-page.module').then( m => m.DrrmoPagePageModule)
  },
  {
    path: 'profile-page',
    loadChildren: () => import('./mainScreen/main/profile-page/profile-page.module').then( m => m.ProfilePagePageModule)
  },
  {
    path: 'about-page',
    loadChildren: () => import('./mainScreen/main/about-page/about-page.module').then( m => m.AboutPagePageModule)
  },
  {
    path: 'cycloneprep',
    loadChildren: () => import('./disasterPage/TODO/cycloneprep/cycloneprep.module').then( m => m.CycloneprepPageModule)
  },
  {
    path: 'earthquakeprep',
    loadChildren: () => import('./disasterPage/TODO/earthquakeprep/earthquakeprep.module').then( m => m.EarthquakeprepPageModule)
  },
  {
    path: 'floodingprep',
    loadChildren: () => import('./disasterPage/TODO/floodingprep/floodingprep.module').then( m => m.FloodingprepPageModule)
  },
  {
    path: 'fire-page',
    loadChildren: () => import('./disasterPage/disasters/fire-page/fire-page.module').then( m => m.FirePagePageModule)
  },
  {
    path: 'landslide-page',
    loadChildren: () => import('./disasterPage/disasters/landslide-page/landslide-page.module').then( m => m.LandslidePagePageModule)
  },
  {
    path: 'hotlines',
    loadChildren: () => import('./disasterPage/hotlines/hotlines.module').then( m => m.HotlinesPageModule)
  },
  {
    path: 'others',
    loadChildren: () => import('./disasterPage/others/others.module').then( m => m.OthersPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
