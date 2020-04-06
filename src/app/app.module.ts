import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { HeaderComponent } from './components/header/header.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { ClientMessageComponent } from './components/client-message/client-message.component';
import { CompanionMessageComponent } from './components/companion-message/companion-message.component';
import { EnteringFieldComponent } from './components/entering-field/entering-field.component';
import { ChatListNodeComponent } from './components/chat-list-node/chat-list-node.component';
import { MessageComponent } from './components/message/message.component';
import { MessagesFieldComponent } from './components/messages-field/messages-field.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChatListComponent,
    HeaderComponent,
    ChatWindowComponent,
    ClientMessageComponent,
    CompanionMessageComponent,
    EnteringFieldComponent,
    ChatListNodeComponent,
    MessageComponent,
    MessagesFieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
