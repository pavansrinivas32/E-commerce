import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdetailslistComponent } from './orderdetailslist.component';

describe('OrderdetailslistComponent', () => {
  let component: OrderdetailslistComponent;
  let fixture: ComponentFixture<OrderdetailslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderdetailslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderdetailslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
