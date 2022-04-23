import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatPageRoutingModule } from './chat-routing.module';

import { ChatPage } from './chat.page';
import {FirstChatMessagesComponent} from "../components/first-chat-messages/first-chat-messages.component";
import {ChatCtaButtonsComponent} from "../components/chat-cta-buttons/chat-cta-buttons.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPageRoutingModule
  ],
  declarations: [ChatPage, FirstChatMessagesComponent, ChatCtaButtonsComponent]
})
export class ChatPageModule {}
