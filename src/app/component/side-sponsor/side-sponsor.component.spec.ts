import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideSponsorComponent } from './side-sponsor.component';

describe('SideSponsorComponent', () => {
  let component: SideSponsorComponent;
  let fixture: ComponentFixture<SideSponsorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideSponsorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
