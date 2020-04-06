import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteringFieldComponent } from './entering-field.component';

describe('EnteringFieldComponent', () => {
  let component: EnteringFieldComponent;
  let fixture: ComponentFixture<EnteringFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnteringFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnteringFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
