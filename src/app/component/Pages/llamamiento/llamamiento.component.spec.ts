import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlamamientoComponent } from './llamamiento.component';

describe('LlamamientoComponent', () => {
  let component: LlamamientoComponent;
  let fixture: ComponentFixture<LlamamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlamamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlamamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
