import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddVideoComponent } from './form-add-video.component';

describe('FormAddVideoComponent', () => {
  let component: FormAddVideoComponent;
  let fixture: ComponentFixture<FormAddVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
