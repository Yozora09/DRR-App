import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolcanicPageRoutingModule } from './volcanic-routing.module';

import { VolcanicPage } from './volcanic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolcanicPageRoutingModule
  ],
  declarations: [VolcanicPage]
})
export class VolcanicPageModule {}
