import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentdispatchsComponent } from './currentdispatchs.component';

describe('CurrentdispatchsComponent', () => {
  let component: CurrentdispatchsComponent;
  let fixture: ComponentFixture<CurrentdispatchsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentdispatchsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentdispatchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
