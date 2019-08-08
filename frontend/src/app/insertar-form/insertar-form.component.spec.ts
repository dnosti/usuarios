import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarFormComponent } from './insertar-form.component';

describe('InsertarFormComponent', () => {
  let component: InsertarFormComponent;
  let fixture: ComponentFixture<InsertarFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
