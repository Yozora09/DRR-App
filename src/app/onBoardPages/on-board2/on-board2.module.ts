import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnBoard2PageRoutingModule } from './on-board2-routing.module';

import { OnBoard2Page } from './on-board2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnBoard2PageRoutingModule
  ],
  declarations: [OnBoard2Page]
})
export class OnBoard2PageModule {}
