import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesubcategoryComponent } from './createsubcategory.component';

describe('CreatesubcategoryComponent', () => {
  let component: CreatesubcategoryComponent;
  let fixture: ComponentFixture<CreatesubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatesubcategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatesubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
