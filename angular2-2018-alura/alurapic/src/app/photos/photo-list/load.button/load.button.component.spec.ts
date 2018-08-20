import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Load.ButtonComponent } from './load.button.component';

describe('Load.ButtonComponent', () => {
  let component: Load.ButtonComponent;
  let fixture: ComponentFixture<Load.ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Load.ButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Load.ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
