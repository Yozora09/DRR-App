import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FireprepPage } from './fireprep.page';

const routes: Routes = [
  {
    path: '',
    component: FireprepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FireprepPageRoutingModule {}
