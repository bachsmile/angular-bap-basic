import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMenComponent } from './shop-men.component';

describe('ShopMenComponent', () => {
  let component: ShopMenComponent;
  let fixture: ComponentFixture<ShopMenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopMenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
