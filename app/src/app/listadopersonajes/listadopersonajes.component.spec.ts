import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadopersonajesComponent } from './listadopersonajes.component';

describe('ListadopersonajesComponent', () => {
  let component: ListadopersonajesComponent;
  let fixture: ComponentFixture<ListadopersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadopersonajesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadopersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
