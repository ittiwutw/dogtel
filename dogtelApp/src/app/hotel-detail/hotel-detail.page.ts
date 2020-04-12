import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { RestService } from '../services/rest.service';
import * as moment from 'moment';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
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

  bookingDetail = {
    hotelId: 0,
    userId: 0,
    startDate: '',
    endDate: '',
    dogId: 0,
    type: 'hotel',
    startTime: '',
    endTime: '',
    status: 'รอการยืนยัน',
    paymentStatus: 'ยังไม่ได้ชำระเงิน'
  };

  constructor(
    private storage: Storage,
    private restApi: RestService,
    public activatedRoute: ActivatedRoute,
    private geolocation: Geolocation,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.hotel = JSON.parse(params.hotel);

      if (params.bookingDetail) {
        this.bookingDetail = JSON.parse(params.bookingDetail);
      }
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

  onClickBook() {
    console.log(this.bookingDetail.startDate);
    const startDate = moment(this.bookingDetail.startDate, 'YYYY-MM-DD').toDate();
    console.log(startDate.getFullYear() + '-' + startDate.getMonth() + '-' + startDate.getDate());
    const startDateStr = startDate.getFullYear() + '-' + startDate.getMonth() + '-' + startDate.getDate();
    this.bookingDetail.startDate = startDateStr;

    const endDate = moment(this.bookingDetail.endDate, 'YYYY-MM-DD').toDate();
    console.log(endDate.getFullYear() + '-' + endDate.getMonth() + '-' + endDate.getDate());
    const endDateStr = endDate.getFullYear() + '-' + endDate.getMonth() + '-' + endDate.getDate();
    this.bookingDetail.endDate = endDateStr;

    const selectStartTime = new Date(this.bookingDetail.startTime);
    console.log(selectStartTime.getHours());
    console.log(selectStartTime.getMinutes());
    this.bookingDetail.startTime = selectStartTime.getHours() + ':' + selectStartTime.getMinutes();

    const selectEndTime = new Date(this.bookingDetail.endTime);
    console.log(selectEndTime.getHours());
    console.log(selectEndTime.getMinutes());
    this.bookingDetail.endTime = selectEndTime.getHours() + ':' + selectEndTime.getMinutes();

    console.log(this.bookingDetail);

    this.bookingDetail.hotelId = this.hotel.id;

    this.storage.get('user').then((val) => {
      console.log(val);
      if (val) {
        this.bookingDetail.userId = val[0].userId;

        this.restApi.bookHotel(this.bookingDetail).then(res => {
          console.log(res);
          let data: any;
          data = res;
          alert('ทำการจองสำเร็จแล้ว');
          this.router.navigate(['tabs/tab2']);
        });
      }
    });


  }



}
