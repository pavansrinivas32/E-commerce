import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadytodispatchComponent } from './readytodispatch.component';

describe('ReadytodispatchComponent', () => {
  let component: ReadytodispatchComponent;
  let fixture: ComponentFixture<ReadytodispatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadytodispatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadytodispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
