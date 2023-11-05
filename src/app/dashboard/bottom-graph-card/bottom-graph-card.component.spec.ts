import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomGraphCardComponent } from './bottom-graph-card.component';

describe('BottomGraphCardComponent', () => {
  let component: BottomGraphCardComponent;
  let fixture: ComponentFixture<BottomGraphCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomGraphCardComponent]
    });
    fixture = TestBed.createComponent(BottomGraphCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
