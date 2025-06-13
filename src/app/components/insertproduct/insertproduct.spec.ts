import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsertProductComponent } from './insertproduct'; 

describe('Insertproduct', () => {
  let component: InsertProductComponent;
  let fixture: ComponentFixture<InsertProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertProductComponent] // إذا كانت standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(InsertProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});