import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideNewUserComponent } from './right-side-new-user.component';

describe('RightSideNewUserComponent', () => {
  let component: RightSideNewUserComponent;
  let fixture: ComponentFixture<RightSideNewUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightSideNewUserComponent]
    });
    fixture = TestBed.createComponent(RightSideNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
