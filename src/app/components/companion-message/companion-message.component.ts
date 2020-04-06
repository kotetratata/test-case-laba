import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-companion-message',
  templateUrl: './companion-message.component.html',
  styleUrls: ['./companion-message.component.css']
})
export class CompanionMessageComponent implements OnInit {
  @Input()  message;
  constructor() { }

  ngOnInit(): void {
  }

}
