import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopApparelComponent } from './shop-apparel.component';

describe('ShopApparelComponent', () => {
  let component: ShopApparelComponent;
  let fixture: ComponentFixture<ShopApparelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopApparelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopApparelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
