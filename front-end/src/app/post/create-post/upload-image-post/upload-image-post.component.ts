import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { ImageCropperComponent } from '../image-cropper/component/image-cropper.component';
import { ImageCroppedEvent } from '../image-cropper/interfaces';

@Component({
    selector: 'app-upload-image-post',
    templateUrl: './upload-image-post.component.html',
    styleUrls: ['./upload-image-post.component.css'],
})
export class UploadImagePostComponent {
    @Output() public bodyToSend: EventEmitter<any> = new EventEmitter();

    imageChangedEvent: any = '';
    croppedImage: any = '';
    showCropper = false;

    @ViewChild(ImageCropperComponent, null) imageCropper: ImageCropperComponent;

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
        this.bodyToSend.emit(this.croppedImage);
    }
    imageLoaded() {
        this.showCropper = true;
    }
    cropperReady() {
    }
    loadImageFailed() {
    }
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
