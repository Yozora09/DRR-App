import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrrmoPagePage } from './drrmo-page.page';

const routes: Routes = [
  {
    path: '',
    component: DrrmoPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrrmoPagePageRoutingModule {}
