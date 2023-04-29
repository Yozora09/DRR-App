import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloodingprepPage } from './floodingprep.page';

const routes: Routes = [
  {
    path: '',
    component: FloodingprepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FloodingprepPageRoutingModule {}
