import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDataChartComponent } from './top-data-chart.component';

describe('TopDataChartComponent', () => {
  let component: TopDataChartComponent;
  let fixture: ComponentFixture<TopDataChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopDataChartComponent]
    });
    fixture = TestBed.createComponent(TopDataChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
