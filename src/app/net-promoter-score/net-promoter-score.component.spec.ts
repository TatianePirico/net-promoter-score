import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetPromoterScoreComponent } from './net-promoter-score.component';

describe('NetPromoterScoreComponent', () => {
  let component: NetPromoterScoreComponent;
  let fixture: ComponentFixture<NetPromoterScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetPromoterScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetPromoterScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
