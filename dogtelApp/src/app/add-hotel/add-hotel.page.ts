import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
declare var google;

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.page.html',
  styleUrls: ['./add-hotel.page.scss'],
})
export class AddHotelPage implements OnInit {

  @ViewChild('map', { static: false }) mapContainer: ElementRef;
  map: any;
  base64ImgIdCard1: any;
  base64ImgIdCard2: any;
  base64ImgIdCard3: any;
  base64ImgHotelImg: any;

  currentStep = 1;

  hotel = {
    userId: 0,
    type: 'โรงแรม',
    name: '',
    firstName: '',
    lastName: '',
    registerNo: '',
    province: '',
    district: '',
    subDistrict: '',
    postalCode: '',
    houseNo: '',
    openTime: '',
    closeTime: '',
    imgUrl: '',
    lat: '',
    lng: '',
    idcard1: '',
    idcard2: '',
    idcard3: '',
    idcardNo1: '',
    idcardNo2: '',
    firstNameEng: '',
    lastNameEng: '',
    birthDate: '',
  };

  constructor(
    private router: Router,
    private restApi: RestService,
    private storage: Storage,
    private geolocation: Geolocation,
    private camera: Camera,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // this.loadMap();
  }

  loadMap() {
    console.log('load');
    const that = this;
    // หาที่อยู่ ปัจจุบัน
    this.geolocation.getCurrentPosition().then((resp) => {

      // set lat lng
      const latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      const mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
      // this.addMarkersToMap(resp.coords.latitude, resp.coords.longitude);

      // tslint:disable-next-line:only-arrow-functions
      this.map.addListener('click', function (e) {
        console.log(e);
        console.log(e.latLng.lat() + ' ' + e.latLng.lng());
        that.hotel.lat = e.latLng.lat();
        that.hotel.lng = e.latLng.lng();
        that.addMarkersToMap(e.latLng);
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }

  addMarkersToMap(latLng) {
    // this.removeMarker();
    const marker = new google.maps.Marker({
      position: latLng,
      map: this.map
    });
    marker.setMap(this.map);
  }

  onClickNextStep() {
    this.currentStep++;
    if (this.currentStep === 3) {
      this.loadMap();
    }
    console.log(this.currentStep);
  }

  onClickPreviousStep() {
    this.currentStep--;
    console.log(this.currentStep);
  }

  onClickSave() {
    this.storage.get('user').then((user) => {
      this.hotel.userId = user[0].id;
      this.restApi.saveHotel(this.hotel).then(res => {
        console.log(res);
        this.currentStep++;
      });
    });
  }

  onClickFinish() {
    this.router.navigateByUrl('/tabs/account');
  }

  pickImage(type) {
    // this.completePayment();
    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      if (type === 'idcard1') {
        this.base64ImgIdCard1 = 'data:image/jpeg;base64,' + imageData;
        this.hotel.idcard1 = imageData;
        console.log(this.base64ImgIdCard1);
      } else if (type === 'idcard2') {
        this.base64ImgIdCard2 = 'data:image/jpeg;base64,' + imageData;
        this.hotel.idcard2 = imageData;
        console.log(this.base64ImgIdCard2);
      } else if (type === 'idcard3') {
        this.base64ImgIdCard3 = 'data:image/jpeg;base64,' + imageData;
        this.hotel.idcard3 = imageData;
        console.log(this.base64ImgIdCard3);
      } else if (type === 'hotelImg') {
        this.base64ImgHotelImg = 'data:image/jpeg;base64,' + imageData;
        this.hotel.imgUrl = imageData;
        console.log(this.base64ImgHotelImg);
      }

    }, (err) => {
      // Handle error
    });
  }

}
