import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;

@Component({
  selector: 'app-my-hotel',
  templateUrl: './my-hotel.page.html',
  styleUrls: ['./my-hotel.page.scss'],
})
export class MyHotelPage implements OnInit {
  @ViewChild('map', { static: false }) mapContainer: ElementRef;
  map: any;

  hotel: any;
  rooms = [];
  constructor(
    private router: Router,
    private restApi: RestService,
    private storage: Storage,
    private geolocation: Geolocation,
  ) {

  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.storage.get('user').then((user) => {
      const param = {
        userId: user[0].id
      };

      this.restApi.getHotelByUserId(param).then(res => {
        let result: any;
        result = res;
        this.hotel = result.data.result[0];
        console.log(this.hotel);
        this.loadMap();
        this.getRooms();
      });
    });
  }

  getRooms() {
    const param = {
      hotelId: this.hotel.id
    };
    this.restApi.getRoomByhotelId(param).then(res => {
      let result: any;
      result = res;
      this.rooms = result.data.result;
      console.log(this.rooms);
    });
  }

  onClickAddRoom() {
    this.router.navigate(['/add-room', { hotelId: this.hotel.id }]);
  }

  loadMap() {

    // หาที่อยู่ ปัจจุบัน
    this.geolocation.getCurrentPosition().then((resp) => {

      // set lat lng
      const latLng = new google.maps.LatLng(this.hotel.lat, this.hotel.lng);
      const mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
      this.addMarkersToMap();

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  addMarkersToMap() {
    const position = { lat: parseFloat(this.hotel.lat), lng: parseFloat(this.hotel.lng) };
    console.log(position);
    // const position = new google.maps.LatLng(this.estate.lat, this.estate.lng);
    const marker = new google.maps.Marker({ position, map: this.map, title: this.hotel.name });
    marker.setMap(this.map);
  }



}
