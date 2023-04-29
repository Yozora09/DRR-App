import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CycloneprepPageRoutingModule } from './cycloneprep-routing.module';

import { CycloneprepPage } from './cycloneprep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CycloneprepPageRoutingModule
  ],
  declarations: [CycloneprepPage]
})
export class CycloneprepPageModule {}
