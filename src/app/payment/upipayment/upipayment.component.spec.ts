import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpipaymentComponent } from './upipayment.component';

describe('UpipaymentComponent', () => {
  let component: UpipaymentComponent;
  let fixture: ComponentFixture<UpipaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpipaymentComponent]
    });
    fixture = TestBed.createComponent(UpipaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
