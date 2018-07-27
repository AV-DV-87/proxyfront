import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSondageComponent } from './service-sondage.component';

describe('ServiceSondageComponent', () => {
  let component: ServiceSondageComponent;
  let fixture: ComponentFixture<ServiceSondageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSondageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSondageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
