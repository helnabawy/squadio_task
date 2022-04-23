import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.page.html',
  styleUrls: ['./group-create.page.scss'],
})
export class GroupCreatePage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  pop() {
    this.navController.pop();
  }

  navigateToChat() {
    this.navController.navigateForward('/chat');
  }
}
