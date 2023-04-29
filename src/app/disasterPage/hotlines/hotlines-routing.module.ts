import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotlinesPage } from './hotlines.page';

const routes: Routes = [
  {
    path: '',
    component: HotlinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotlinesPageRoutingModule {}
