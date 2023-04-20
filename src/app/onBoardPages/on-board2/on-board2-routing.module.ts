import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnBoard2Page } from './on-board2.page';

const routes: Routes = [
  {
    path: '',
    component: OnBoard2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnBoard2PageRoutingModule {}
