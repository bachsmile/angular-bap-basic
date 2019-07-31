import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAccessoriesComponent } from './shop-accessories.component';

describe('ShopAccessoriesComponent', () => {
  let component: ShopAccessoriesComponent;
  let fixture: ComponentFixture<ShopAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
