import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EarthquakeprepPageRoutingModule } from './earthquakeprep-routing.module';

import { EarthquakeprepPage } from './earthquakeprep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EarthquakeprepPageRoutingModule
  ],
  declarations: [EarthquakeprepPage]
})
export class EarthquakeprepPageModule {}
