import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoAdd } from './producto-add';

describe('ProductoAdd', () => {
  let component: ProductoAdd;
  let fixture: ComponentFixture<ProductoAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
