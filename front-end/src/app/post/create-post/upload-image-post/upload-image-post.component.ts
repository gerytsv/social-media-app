import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { ImageCropperComponent } from '../image-cropper/component/image-cropper.component';
import { ImageCroppedEvent } from '../image-cropper/interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificatorService } from '../../../core/services/notificator.service';

@Component({
  selector: 'app-upload-image-post',
  templateUrl: './upload-image-post.component.html',
  styleUrls: ['./upload-image-post.component.css'],
})
export class UploadImagePostComponent {
  @Output() public bodyToSend: EventEmitter<any> = new EventEmitter();

  public imageChangedEvent: any = '';
  public croppedImage: any = '';
  public showCropper = false;

  @ViewChild(ImageCropperComponent) imageCropper: ImageCropperComponent;

  constructor(private readonly notificator: NotificatorService) {}

  fileChangeEvent(event: any): void {
    const file = event.target.files[0];

    if (file.size > 10000000) {
      this.notificator.error('File size is over the limit (maximum size 10MB)');
      this.imageChangedEvent = '';
      return;
    }

    if (!file || !/image\/(gif|jpg|jpeg|png)$/i.test(file.type)) {
      this.notificator.error('Invalid file format');
      this.imageChangedEvent = '';
      return;
    }

    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.bodyToSend.emit(this.croppedImage);
  }
  imageLoaded() {
    this.showCropper = true;
  }

  cropperReady() {}

  loadImageFailed() {}

  rotateLeft() {
    this.imageCropper.rotateLeft();
  }
  rotateRight() {
    this.imageCropper.rotateRight();
  }
  flipHorizontal() {
    this.imageCropper.flipHorizontal();
  }
  flipVertical() {
    this.imageCropper.flipVertical();
  }
}
