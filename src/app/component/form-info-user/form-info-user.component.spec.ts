import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInfoUserComponent } from './form-info-user.component';

describe('FormInfoUserComponent', () => {
  let component: FormInfoUserComponent;
  let fixture: ComponentFixture<FormInfoUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInfoUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInfoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
