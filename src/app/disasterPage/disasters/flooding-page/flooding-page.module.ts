import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FloodingPagePageRoutingModule } from './flooding-page-routing.module';

import { FloodingPagePage } from './flooding-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FloodingPagePageRoutingModule
  ],
  declarations: [FloodingPagePage]
})
export class FloodingPagePageModule {}
