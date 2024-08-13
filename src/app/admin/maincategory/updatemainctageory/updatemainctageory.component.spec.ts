import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemainctageoryComponent } from './updatemainctageory.component';

describe('UpdatemainctageoryComponent', () => {
  let component: UpdatemainctageoryComponent;
  let fixture: ComponentFixture<UpdatemainctageoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatemainctageoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatemainctageoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
