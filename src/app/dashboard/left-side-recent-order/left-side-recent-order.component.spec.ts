import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideRecentOrderComponent } from './left-side-recent-order.component';

describe('LeftSideRecentOrderComponent', () => {
  let component: LeftSideRecentOrderComponent;
  let fixture: ComponentFixture<LeftSideRecentOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftSideRecentOrderComponent]
    });
    fixture = TestBed.createComponent(LeftSideRecentOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
