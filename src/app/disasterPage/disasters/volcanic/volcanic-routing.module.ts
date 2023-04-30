import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolcanicPage } from './volcanic.page';

const routes: Routes = [
  {
    path: '',
    component: VolcanicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolcanicPageRoutingModule {}
