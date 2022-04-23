import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {UniquePipe} from "../pipes/unique.pipe";

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [
        UniquePipe
    ],
    exports: [RouterModule, UniquePipe]
})
export class HomePageRoutingModule {}
