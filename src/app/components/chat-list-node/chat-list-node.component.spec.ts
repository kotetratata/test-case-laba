import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatListNodeComponent } from './chat-list-node.component';

describe('ChatListNodeComponent', () => {
  let component: ChatListNodeComponent;
  let fixture: ComponentFixture<ChatListNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatListNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatListNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
