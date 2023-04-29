import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandslidePagePage } from './landslide-page.page';

const routes: Routes = [
  {
    path: '',
    component: LandslidePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandslidePagePageRoutingModule {}
