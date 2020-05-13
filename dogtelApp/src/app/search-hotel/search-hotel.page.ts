import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.page.html',
  styleUrls: ['./search-hotel.page.scss'],
})
export class SearchHotelPage implements OnInit {
  minDate = new Date().toISOString();
  searchCondition = {
    hotelId: 0,
    userId: 0,
    startDate: '',
    endDate: '',
    dogId: 0,
    type: 'hotel',
    startTime: '',
    endTime: '',
    status: 'รอการยืนยัน',
    paymentStatus: 'ยังไม่ได้ชำระเงิน',
    roomId: 0,
    userHotelId: 0,
    searchDistrict: '',
    dogData: null,
    dogSize: ''
  };

  dogData = [];
  userData: any;

  constructor(
    private restApi: RestService,
    private router: Router,
    private storage: Storage,
  ) { }

  ngOnInit() {
    this.loadDog();
  }

  onClickSearch() {
    if (this.validate()) {
      this.searchCondition.userId = this.userData.id;
      console.log(this.searchCondition);
      this.router.navigate(['tabs/tab1/search-result', { searchCondition: JSON.stringify(this.searchCondition) }]);
    }
  }

  validate() {
    let isValidate = false;
    if (!this.searchCondition.dogData) {
      alert('กรุณาเลือกสุนัขที่ต้องการ');
    } else {
      isValidate = true;
    }
    return isValidate;
  }

  loadDog() {
    this.storage.get('user').then((user) => {
      this.userData = user[0];
      const param = {
        userId: user[0].id,
      };
      this.restApi.getDogByUserId(param).then(res => {
        let result: any;
        result = res;
        this.dogData = result.data.result;
        console.log(this.dogData);
      });
    });
  }

  changeDog() {
    console.log(this.searchCondition.dogData);
    const selectedDog = this.searchCondition.dogData;
    this.searchCondition.dogId = selectedDog.id;
    this.searchCondition.dogSize = selectedDog.dogSize;
    console.log(this.searchCondition);
  }

}
