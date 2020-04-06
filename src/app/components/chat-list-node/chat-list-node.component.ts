import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-list-node',
  templateUrl: './chat-list-node.component.html',
  styleUrls: ['./chat-list-node.component.css']
})
export class ChatListNodeComponent implements OnInit {
  @Input() chatObj;
  constructor() { }

  ngOnInit(): void {
  }

}
