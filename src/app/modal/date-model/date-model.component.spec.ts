import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateModelComponent } from './date-model.component';

describe('DateModelComponent', () => {
  let component: DateModelComponent;
  let fixture: ComponentFixture<DateModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
