import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandslideprepPage } from './landslideprep.page';

const routes: Routes = [
  {
    path: '',
    component: LandslideprepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandslideprepPageRoutingModule {}
