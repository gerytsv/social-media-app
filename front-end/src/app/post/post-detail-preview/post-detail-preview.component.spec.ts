import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailPreviewComponent } from './post-detail-preview.component';

describe('PostDetailPreviewComponent', () => {
  let component: PostDetailPreviewComponent;
  let fixture: ComponentFixture<PostDetailPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostDetailPreviewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
