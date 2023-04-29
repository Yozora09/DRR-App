import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CycloneprepPage } from './cycloneprep.page';

const routes: Routes = [
  {
    path: '',
    component: CycloneprepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CycloneprepPageRoutingModule {}
