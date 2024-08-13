import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemainctageoryComponent } from './createmainctageory.component';

describe('CreatemainctageoryComponent', () => {
  let component: CreatemainctageoryComponent;
  let fixture: ComponentFixture<CreatemainctageoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatemainctageoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatemainctageoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
