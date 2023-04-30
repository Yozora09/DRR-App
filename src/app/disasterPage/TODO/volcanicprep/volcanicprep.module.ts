import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolcanicprepPageRoutingModule } from './volcanicprep-routing.module';

import { VolcanicprepPage } from './volcanicprep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolcanicprepPageRoutingModule
  ],
  declarations: [VolcanicprepPage]
})
export class VolcanicprepPageModule {}
