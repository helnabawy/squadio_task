import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {ContactPreviewComponent} from "../components/contact-preview/contact-preview.component";
import {ContactItemComponent} from "../components/contact-item/contact-item.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  exports: [
    ContactPreviewComponent
  ],
  declarations: [HomePage, ContactPreviewComponent, ContactItemComponent]
})
export class HomePageModule {}
