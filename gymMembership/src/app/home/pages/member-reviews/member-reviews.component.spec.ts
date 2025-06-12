import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberReviewsComponent } from './member-reviews.component';

describe('MemberReviewsComponent', () => {
  let component: MemberReviewsComponent;
  let fixture: ComponentFixture<MemberReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemberReviewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
