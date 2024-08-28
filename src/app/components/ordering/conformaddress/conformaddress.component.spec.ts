import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformaddressComponent } from './conformaddress.component';

describe('ConformaddressComponent', () => {
  let component: ConformaddressComponent;
  let fixture: ComponentFixture<ConformaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConformaddressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConformaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
