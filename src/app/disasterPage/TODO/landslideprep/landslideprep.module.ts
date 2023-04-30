import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandslideprepPageRoutingModule } from './landslideprep-routing.module';

import { LandslideprepPage } from './landslideprep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandslideprepPageRoutingModule
  ],
  declarations: [LandslideprepPage]
})
export class LandslideprepPageModule {}
