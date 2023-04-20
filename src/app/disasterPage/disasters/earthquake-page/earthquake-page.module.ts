import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EarthquakePagePageRoutingModule } from './earthquake-page-routing.module';

import { EarthquakePagePage } from './earthquake-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EarthquakePagePageRoutingModule
  ],
  declarations: [EarthquakePagePage]
})
export class EarthquakePagePageModule {}
