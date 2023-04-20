import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CyclonePagePage } from './cyclone-page.page';

const routes: Routes = [
  {
    path: '',
    component: CyclonePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CyclonePagePageRoutingModule {}
