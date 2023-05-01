import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GobagprepPageRoutingModule } from './gobagprep-routing.module';

import { GobagprepPage } from './gobagprep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GobagprepPageRoutingModule
  ],
  declarations: [GobagprepPage]
})
export class GobagprepPageModule {}
