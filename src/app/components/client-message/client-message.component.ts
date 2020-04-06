import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-client-message',
  templateUrl: './client-message.component.html',
  styleUrls: ['./client-message.component.css']
})
export class ClientMessageComponent implements OnInit {
  @Input()  message;
  constructor() { }

  ngOnInit(): void {
  }

}
