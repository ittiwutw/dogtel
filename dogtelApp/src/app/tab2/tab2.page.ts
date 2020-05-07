import { Component } from '@angular/core';
import { RestService } from '../services/rest.service';
import * as moment from 'moment';
import { Storage } from '@ionic/storage';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  role: any;
  bookingList = [];
  cancelList = [];
  finishList = [];
  currentSeg = '';

  hotelBookingList = [];
  hotelProcessingList = [];
  hotelCancelList = [];
  hotelFinishList = [];
  userData: any;

  constructor(
    private storage: Storage,
    private restApi: RestService,
    private router: Router,
  ) {

  }

  ionViewWillEnter() {
    this.bookingList = [];

    // this.storage.remove('role');
    this.storage.get('role').then((val) => {
      if (val) {
        if (val === 1) {
          this.role = 'CUSTOMER';
          this.getBookingList();
          this.currentSeg = 'booking';
        } else if (val === 2) {
          this.role = 'HOTEL';
          this.getHotelBookingList();
          this.currentSeg = 'hotelBooking';
        }
      }
    });

    this.storage.get('user').then((val) => {
      this.userData = val[0];
    });
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    this.currentSeg = ev.detail.value;

    if (this.currentSeg === 'booking') {
      this.getBookingList();
    } else if (this.currentSeg === 'finished') {
      this.getFinishList();
    } else if (this.currentSeg === 'cancel') {
      this.getCancelList();
    } else if (this.currentSeg === 'hotelBooking') {
      this.getHotelBookingList();
    } else if (this.currentSeg === 'hotelProcessing') {
      this.getHotelProcessingList();
    } else if (this.currentSeg === 'hotelFinish') {
      this.getHotelFinishList();
    } else if (this.currentSeg === 'hotelCancel') {
      this.getHotelCancelList();
    }
  }

  getBookingList() {
    this.storage.get('user').then((val) => {
      this.userData = val[0];
      console.log(val);
      if (val) {
        const param = {
          userId: val[0].userId,
          status: 'รอการยืนยัน'
        };

        this.restApi.getBookingHotelByUserId(param).then(res => {
          console.log(res);
          let data: any;
          data = res;

          this.bookingList = data.data.result;
          console.log(this.bookingList);
        });
      }
    });
  }

  getFinishList() {
    this.storage.get('user').then((val) => {

      console.log(val);
      if (val) {
        const param = {
          userId: val[0].userId,
          status: 'สำเร็จ'
        };

        this.restApi.getBookingHotelByUserId(param).then(res => {
          console.log(res);
          let data: any;
          data = res;

          this.finishList = data.data.result;
          console.log(this.finishList);

        });
      }
    });
  }

  getCancelList() {
    this.storage.get('user').then((val) => {

      console.log(val);
      if (val) {
        const param = {
          userId: val[0].userId,
          status: 'ยกเลิก'
        };

        this.restApi.getBookingHotelByUserId(param).then(res => {
          console.log(res);
          let data: any;
          data = res;

          this.cancelList = data.data.result;
          console.log(this.cancelList);

        });
      }
    });
  }

  cancelBooking(booking) {
    const param = {
      bookingId: booking.bookingId,
      status: 'ยกเลิก',
      paymentStatus: 'ยังไม่ได้ชำระเงิน',
      userId: booking.userId
    };

    this.restApi.updateBookingStatus(param).then(res => {
      console.log(res);
      let data: any;
      data = res;
      alert('ยกเลิกเรียบร้อย');
      this.getBookingList();

    });
  }

  payBooking(booking) {
    const param = {
      bookingId: booking.bookingId,
      status: 'กำลังดำเนินการ',
      paymentStatus: 'ชำระเงินแล้ว',
      userId: booking.userId
    };

    this.restApi.updateBookingStatus(param).then(res => {
      console.log(res);
      let data: any;
      data = res;
      alert('กำลังดำเนินการ');
      this.getBookingList();

    });
  }


  getHotelBookingList() {
    this.storage.get('user').then((val) => {

      console.log(val);
      if (val) {
        const param = {
          userId: val[0].userId,
          status: 'รอการยืนยัน'
        };

        this.restApi.getHotelBookingByHotelOwnerId(param).then(res => {
          console.log(res);
          let data: any;
          data = res;

          this.hotelBookingList = data.data.result;
          console.log(this.bookingList);
        });
      }
    });
  }

  getHotelProcessingList() {
    this.storage.get('user').then((val) => {

      console.log(val);
      if (val) {
        const param = {
          userId: val[0].userId,
          status: 'กำลังดำเนินการ'
        };

        this.restApi.getHotelBookingByHotelOwnerId(param).then(res => {
          console.log(res);
          let data: any;
          data = res;

          this.hotelProcessingList = data.data.result;
          console.log(this.bookingList);
        });
      }
    });
  }

  getHotelFinishList() {
    this.storage.get('user').then((val) => {

      console.log(val);
      if (val) {
        const param = {
          userId: val[0].userId,
          status: 'สำเร็จ'
        };

        this.restApi.getHotelBookingByHotelOwnerId(param).then(res => {
          console.log(res);
          let data: any;
          data = res;

          this.hotelFinishList = data.data.result;
          console.log(this.bookingList);
        });
      }
    });
  }

  getHotelCancelList() {
    this.storage.get('user').then((val) => {

      console.log(val);
      if (val) {
        const param = {
          userId: val[0].userId,
          status: 'ยกเลิก'
        };

        this.restApi.getHotelBookingByHotelOwnerId(param).then(res => {
          console.log(res);
          let data: any;
          data = res;

          this.hotelCancelList = data.data.result;
          console.log(this.bookingList);
        });
      }
    });
  }

  hotelConfirm(booking) {
    const param = {
      bookingId: booking.bookingId,
      status: 'รอการชำระเงิน',
      paymentStatus: 'ยังไม่ได้ชำระเงิน',
      userId: booking.bookingUserId
    };

    this.restApi.updateBookingStatus(param).then(res => {
      console.log(res);
      let data: any;
      data = res;
      alert('รอผู้จองชำระเงิน');
      this.getHotelBookingList();

    });
  }

  hotelFinish(booking) {
    const param = {
      bookingId: booking.bookingId,
      status: 'สำเร็จ',
      paymentStatus: 'ชำระเงินแล้ว',
      userId: booking.bookingUserId
    };

    this.restApi.updateBookingStatus(param).then(res => {
      console.log(res);
      let data: any;
      data = res;
      alert('การจองเสร็จสิ้นแล้ว');
      this.getHotelProcessingList();

    });
  }

  hotelCancel(booking) {
    const param = {
      bookingId: booking.bookingId,
      status: 'ยกเลิก',
      paymentStatus: 'ยังไม่ได้ชำระเงิน',
      userId: booking.bookingUserId
    };

    this.restApi.updateBookingStatus(param).then(res => {
      console.log(res);
      let data: any;
      data = res;
      alert('ยกเลิกการจองแล้ว');
      this.getHotelBookingList();
      this.getHotelProcessingList();
    });
  }

  onClickReview(booking) {
    this.router.navigate(['/review', { hotel: JSON.stringify(booking) }]);
  }

  onClickAsking(booking) {
    this.router.navigate(['/asking', { hotel: JSON.stringify(booking) }]);
  }

}
