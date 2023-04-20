import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnBoard3Page } from './on-board3.page';

const routes: Routes = [
  {
    path: '',
    component: OnBoard3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnBoard3PageRoutingModule {}
