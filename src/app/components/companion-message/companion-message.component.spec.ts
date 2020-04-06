import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionMessageComponent } from './companion-message.component';

describe('CompanionMessageComponent', () => {
  let component: CompanionMessageComponent;
  let fixture: ComponentFixture<CompanionMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
