import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnBoard3PageRoutingModule } from './on-board3-routing.module';

import { OnBoard3Page } from './on-board3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnBoard3PageRoutingModule
  ],
  declarations: [OnBoard3Page]
})
export class OnBoard3PageModule {}
