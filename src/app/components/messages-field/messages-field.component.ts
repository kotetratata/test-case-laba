import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-messages-field',
  templateUrl: './messages-field.component.html',
  styleUrls: ['./messages-field.component.css']
})
export class MessagesFieldComponent implements OnInit {
  @Input() chatObj;
  constructor() { }

  ngOnInit(): void {
  }

}
