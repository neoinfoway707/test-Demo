import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustominfoComponent } from './custominfo.component';

describe('CustominfoComponent', () => {
  let component: CustominfoComponent;
  let fixture: ComponentFixture<CustominfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustominfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustominfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
