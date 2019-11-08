# Ionic Angular Image Crop

App created using the [Ionic 5 framework](https://ionicframework.com/docs) to crop photos using an [Angular Image Cropper module](https://github.com/Mawi137/ngx-image-cropper). Another great tutorial from Simon Grimm at the [Ionic Academy](https://ionicacademy.com).

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* Uses the Cordova camera plugin, improved with the Ionic-native camera plugin. For developement, a jpg image is used instead of the camera image. 

## Screenshots

![image](./img/cropper.png)

## Technologies

* [Ionic v5.0.0](https://ionicframework.com/)

* [Angular v8.1.2](https://angular.io/)

* [Ionic/angular v4.7.1](https://www.npmjs.com/package/@ionic/angular)

* [Angular RxJS Library v6.5.1](https://angular.io/guide/rx-library)

* [ngx Image Cropper v2.0.2](https://github.com/Mawi137/ngx-image-cropper)

## Setup

* To start the server on _localhost://8100_ type: 'ionic serve -o'

## Code Examples

* Two of the image cropper methods, accessed using _@ViewChild_

```typescript
rotateLeft() {
    this.angularCropper.rotateLeft();
}

rotateRight() {
    this.angularCropper.rotateRight();
}
```

## Features

* Crops and manipulates images using image cropper methods.

## Status & To-do list

* Status: Not working. Image not found in assets directory which prevents the image cropper from working.

* To-do: Fix issue with image path. Look at Ionic @ionic-native/crop/ngx to see the difference in how it crops images.

## Inspiration

* [Simon Grimm´s Youtube video: How to Crop Images in Ionic 4 with CropperJS](https://www.youtube.com/watch?v=UnqVkzWg2W0)

* [Nappd: How to add Image Cropper in ionic 4 app](https://enappd.com/blog/how-to-add-image-cropper-in-ionic-4-app/68/)

* [Adding Image Cropper in Ionic 4 Apps](https://medium.com/enappd/image-cropper-in-ionic-4-7b76f1153ad9)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
