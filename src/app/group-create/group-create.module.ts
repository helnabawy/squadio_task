import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupCreatePageRoutingModule } from './group-create-routing.module';

import { GroupCreatePage } from './group-create.page';
import {HomePageModule} from "../home/home.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GroupCreatePageRoutingModule,
        HomePageModule
    ],
  declarations: [GroupCreatePage]
})
export class GroupCreatePageModule {}
