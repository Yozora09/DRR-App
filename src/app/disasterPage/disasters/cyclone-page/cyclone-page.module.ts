import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CyclonePagePageRoutingModule } from './cyclone-page-routing.module';

import { CyclonePagePage } from './cyclone-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CyclonePagePageRoutingModule
  ],
  declarations: [CyclonePagePage]
})
export class CyclonePagePageModule {}
