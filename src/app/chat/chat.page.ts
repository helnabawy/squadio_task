import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactsService} from '../services/contacts.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  chatTitle: string;
  participantsNames = '';
  constructor(private route: ActivatedRoute,
              private router: Router,
              private contactsService: ContactsService
              ) {
    this.route.queryParams.subscribe(_p => {
      const navParams = this.router.getCurrentNavigation().extras.state;

      this.chatTitle = navParams && navParams.chatTitle ? navParams.chatTitle : 'Chat Conversation';
    });

    this.contactsService.selectedContacts$.subscribe(contacts => {
      this.participantsNames = contacts.map(c => c.displayName).join(', ');
    });

  }

  ngOnInit() {

  }

}
