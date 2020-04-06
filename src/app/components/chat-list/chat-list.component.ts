import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {data} from '../../../assets/data';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  @Output() onSelected = new EventEmitter<boolean>();
  public chats = data;
  constructor() { }

  ngOnInit(): void {
  }

  select(selectedChat) {
    this.onSelected.emit(selectedChat);
  }

}
