import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAutorComponent } from './delete-autor.component';

describe('DeleteAutorComponent', () => {
  let component: DeleteAutorComponent;
  let fixture: ComponentFixture<DeleteAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
