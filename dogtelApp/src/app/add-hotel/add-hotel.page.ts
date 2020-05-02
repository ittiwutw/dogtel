import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google;

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.page.html',
  styleUrls: ['./add-hotel.page.scss'],
})
export class AddHotelPage implements OnInit {

  @ViewChild('map', { static: false }) mapContainer: ElementRef;
  map: any;

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
    imgUrl: 'https://metropolisjapan.com/wp-content/uploads/2018/06/Wancott-playing-with-dogs.jpg',
    lat: '',
    lng: ''
  };

  constructor(
    private router: Router,
    private restApi: RestService,
    private storage: Storage,
    private geolocation: Geolocation
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.loadMap();
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
    console.log(this.currentStep);
  }

  onClickPreviousStep() {
    this.currentStep--;
    console.log(this.currentStep);
  }

  onClickSave() {
    this.storage.get('user').then((user) => {
      this.hotel.userId = user.id;
      this.restApi.saveHotel(this.hotel).then(res => {
        console.log(res);
        this.currentStep++;
      });
    });


  }

}
