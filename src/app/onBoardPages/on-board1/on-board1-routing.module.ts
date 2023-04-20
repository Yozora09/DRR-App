import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnBoard1Page } from './on-board1.page';

const routes: Routes = [
  {
    path: '',
    component: OnBoard1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnBoard1PageRoutingModule {}
