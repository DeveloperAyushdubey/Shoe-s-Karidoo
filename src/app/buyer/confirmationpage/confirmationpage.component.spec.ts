import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationpageComponent } from './confirmationpage.component';

describe('ConfirmationpageComponent', () => {
  let component: ConfirmationpageComponent;
  let fixture: ComponentFixture<ConfirmationpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
