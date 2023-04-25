import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrrmoPagePageRoutingModule } from './drrmo-page-routing.module';

import { DrrmoPagePage } from './drrmo-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrrmoPagePageRoutingModule
  ],
  declarations: [DrrmoPagePage]
})
export class DrrmoPagePageModule {}
