import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EarthquakeprepPage } from './earthquakeprep.page';

const routes: Routes = [
  {
    path: '',
    component: EarthquakeprepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EarthquakeprepPageRoutingModule {}
