import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EarthquakePagePage } from './earthquake-page.page';

const routes: Routes = [
  {
    path: '',
    component: EarthquakePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EarthquakePagePageRoutingModule {}
