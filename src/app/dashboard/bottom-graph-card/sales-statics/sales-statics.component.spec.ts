import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesStaticsComponent } from './sales-statics.component';

describe('SalesStaticsComponent', () => {
  let component: SalesStaticsComponent;
  let fixture: ComponentFixture<SalesStaticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesStaticsComponent]
    });
    fixture = TestBed.createComponent(SalesStaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
