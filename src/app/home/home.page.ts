import { Component, ViewChild } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImageCroppedEvent, ImageCropperComponent } from 'ngx-image-cropper';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	myImage = null;
	croppedImage = null;
	@ViewChild(ImageCropperComponent, { static: false })
	angularCropper: ImageCropperComponent;

	constructor(private camera: Camera) {}

	captureImage() {
		this.convertFileToDataURLviaFileReader(`assets/Ramen.jpg`).subscribe(
			(base64) => {
				// this.convertFileToDataURLviaFileReader(`http://localhost:4200/home/assets/Ramen.gif`).subscribe(base64 => {
				this.myImage = base64;
			}
		);

		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE,
			sourceType: this.camera.PictureSourceType.CAMERA,
		};

		this.camera.getPicture(options).then((imageData) => {
			(this.myImage = 'data:image/jpeg;base64,'), +ImageData;
		});
	}

	// function to convert to base64 file
	convertFileToDataURLviaFileReader(url: string) {
		return new Observable((observer: Observer<any>) => {
			let xhr: XMLHttpRequest = new XMLHttpRequest();
			xhr.onload = function () {
				let reader: FileReader = new FileReader();
				reader.onloadend = function () {
					observer.next(reader.result);
					observer.complete();
				};
				reader.readAsDataURL(xhr.response);
			};
			xhr.open('GET', url);
			xhr.responseType = 'blob';
			xhr.send();
		});
	}

	clear() {
		this.angularCropper.imageBase64 = null;
		this.myImage = null;
		this.croppedImage = null;
	}

	save() {
		this.angularCropper.crop();
	}

	imageCropped(event: ImageCroppedEvent) {
		this.croppedImage = event.base64;
	}

	rotateLeft() {
		this.angularCropper.transform.rotate.toFixed(-90);
	}

	rotateRight() {
		this.angularCropper.transform.rotate.toFixed(90);
	}

	flipHorizontal() {
		this.angularCropper.transform.flipH;
	}

	flipVertical() {
		this.angularCropper.transform.flipV;
	}

	move(x, y) {
		this.angularCropper.cropper.x1 += x;
		this.angularCropper.cropper.x2 += x;
		this.angularCropper.cropper.y1 += y;
		this.angularCropper.cropper.y2 += y;
	}
}
