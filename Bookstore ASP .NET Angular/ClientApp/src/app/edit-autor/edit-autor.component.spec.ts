import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAutorComponent } from './edit-autor.component';

describe('EditAutorComponent', () => {
  let component: EditAutorComponent;
  let fixture: ComponentFixture<EditAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
