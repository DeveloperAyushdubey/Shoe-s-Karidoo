import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainctageoryComponent } from './mainctageory.component';

describe('MainctageoryComponent', () => {
  let component: MainctageoryComponent;
  let fixture: ComponentFixture<MainctageoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainctageoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainctageoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
