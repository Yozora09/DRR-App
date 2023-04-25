import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisasterMainpagePage } from './disaster-mainpage.page';

const routes: Routes = [
  {
    path: '',
    component: DisasterMainpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisasterMainpagePageRoutingModule {}
