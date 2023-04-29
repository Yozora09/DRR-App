import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotlinesPageRoutingModule } from './hotlines-routing.module';

import { HotlinesPage } from './hotlines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotlinesPageRoutingModule
  ],
  declarations: [HotlinesPage]
})
export class HotlinesPageModule {}
