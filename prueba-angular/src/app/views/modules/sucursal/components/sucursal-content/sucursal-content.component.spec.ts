import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalContentComponent } from './sucursal-content.component';

describe('SucursalContentComponent', () => {
  let component: SucursalContentComponent;
  let fixture: ComponentFixture<SucursalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucursalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
