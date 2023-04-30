import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolcanicprepPage } from './volcanicprep.page';

const routes: Routes = [
  {
    path: '',
    component: VolcanicprepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolcanicprepPageRoutingModule {}
