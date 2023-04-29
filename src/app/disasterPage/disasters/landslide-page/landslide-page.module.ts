import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandslidePagePageRoutingModule } from './landslide-page-routing.module';

import { LandslidePagePage } from './landslide-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandslidePagePageRoutingModule
  ],
  declarations: [LandslidePagePage]
})
export class LandslidePagePageModule {}
