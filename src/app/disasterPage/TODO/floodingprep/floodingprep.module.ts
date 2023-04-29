import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FloodingprepPageRoutingModule } from './floodingprep-routing.module';

import { FloodingprepPage } from './floodingprep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FloodingprepPageRoutingModule
  ],
  declarations: [FloodingprepPage]
})
export class FloodingprepPageModule {}
