import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitToSheetsComponent } from './submit-to-sheets.component';

describe('SubmitToSheetsComponent', () => {
  let component: SubmitToSheetsComponent;
  let fixture: ComponentFixture<SubmitToSheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitToSheetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitToSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
