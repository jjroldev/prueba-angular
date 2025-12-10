import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraDashboardComponent } from './cabecera-dashboard.component';

describe('CabeceraDashboardComponent', () => {
  let component: CabeceraDashboardComponent;
  let fixture: ComponentFixture<CabeceraDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
