import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FireprepPageRoutingModule } from './fireprep-routing.module';

import { FireprepPage } from './fireprep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FireprepPageRoutingModule
  ],
  declarations: [FireprepPage]
})
export class FireprepPageModule {}
