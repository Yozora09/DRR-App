import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnBoard1PageRoutingModule } from './on-board1-routing.module';

import { OnBoard1Page } from './on-board1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnBoard1PageRoutingModule
  ],
  declarations: [OnBoard1Page]
})
export class OnBoard1PageModule {}
