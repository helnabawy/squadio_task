import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from "@ionic/angular";
import {ContactsService} from "../services/contacts.service";

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.page.html',
  styleUrls: ['./group-create.page.scss'],
})
export class GroupCreatePage implements OnInit {
  groupNameInput = '';
  groupNameMaxLength = 25;

  constructor(private navController: NavController,
              public contactsService: ContactsService) {
  }

  get remainingNameCharactersCount(): number {
    return this.groupNameMaxLength - this.groupNameInput.length;
  }

  ngOnInit() {
  }

  pop() {
    this.navController.pop();
  }

  navigateToChat() {
    this.navController.navigateForward('/chat', {state: {chatTitle: this.groupNameInput}});
  }
}
