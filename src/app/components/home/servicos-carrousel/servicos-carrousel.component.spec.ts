import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosCarrouselComponent } from './servicos-carrousel.component';

describe('ServicosCarrouselComponent', () => {
  let component: ServicosCarrouselComponent;
  let fixture: ComponentFixture<ServicosCarrouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicosCarrouselComponent]
    });
    fixture = TestBed.createComponent(ServicosCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
