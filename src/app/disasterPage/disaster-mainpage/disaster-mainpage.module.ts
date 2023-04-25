import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisasterMainpagePageRoutingModule } from './disaster-mainpage-routing.module';

import { DisasterMainpagePage } from './disaster-mainpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisasterMainpagePageRoutingModule
  ],
  declarations: [DisasterMainpagePage]
})
export class DisasterMainpagePageModule {}
