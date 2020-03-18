import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google;
@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.page.html',
  styleUrls: ['./hotel-detail.page.scss'],
})
export class HotelDetailPage implements OnInit {

  @ViewChild('map', { static: false }) mapContainer: ElementRef;
  map: any;

  hotel: any;

  bokkingDetail = {
    startDate: '',
    endDate: '',
    dogId: '',
    type: 'hotel'
  };

  constructor(
    public activatedRoute: ActivatedRoute,
    private geolocation: Geolocation,
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.hotel = JSON.parse(params.hotel);
      console.log(this.hotel);
      this.loadMap();
    });
  }

  ngOnInit() {
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
