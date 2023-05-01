import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GobagprepPage } from './gobagprep.page';

const routes: Routes = [
  {
    path: '',
    component: GobagprepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GobagprepPageRoutingModule {}
