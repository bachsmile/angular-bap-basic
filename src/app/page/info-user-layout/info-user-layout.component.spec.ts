import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUserLayoutComponent } from './info-user-layout.component';

describe('InfoUserLayoutComponent', () => {
  let component: InfoUserLayoutComponent;
  let fixture: ComponentFixture<InfoUserLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoUserLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUserLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
