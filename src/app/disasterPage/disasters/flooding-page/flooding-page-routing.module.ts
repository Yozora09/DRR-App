import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloodingPagePage } from './flooding-page.page';

const routes: Routes = [
  {
    path: '',
    component: FloodingPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FloodingPagePageRoutingModule {}
