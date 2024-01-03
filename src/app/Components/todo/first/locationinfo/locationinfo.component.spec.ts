import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationinfoComponent } from './locationinfo.component';

describe('LocationinfoComponent', () => {
  let component: LocationinfoComponent;
  let fixture: ComponentFixture<LocationinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
