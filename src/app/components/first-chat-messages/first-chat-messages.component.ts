import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-first-chat-messages',
  templateUrl: './first-chat-messages.component.html',
  styleUrls: ['./first-chat-messages.component.scss'],
})
export class FirstChatMessagesComponent implements OnInit {
  @Input() chatTitle: string;
  constructor() { }

  ngOnInit() {}

}
