import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImagePostComponent } from './upload-image-post.component';

describe('UploadImagePostComponent', () => {
  let component: UploadImagePostComponent;
  let fixture: ComponentFixture<UploadImagePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadImagePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadImagePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
