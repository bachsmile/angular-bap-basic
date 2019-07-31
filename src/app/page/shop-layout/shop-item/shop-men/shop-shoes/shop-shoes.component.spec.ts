import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopShoesComponent } from './shop-shoes.component';

describe('ShopShoesComponent', () => {
  let component: ShopShoesComponent;
  let fixture: ComponentFixture<ShopShoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopShoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
