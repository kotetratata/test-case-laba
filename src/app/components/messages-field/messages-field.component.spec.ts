import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesFieldComponent } from './messages-field.component';

describe('MessagesFieldComponent', () => {
  let component: MessagesFieldComponent;
  let fixture: ComponentFixture<MessagesFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
