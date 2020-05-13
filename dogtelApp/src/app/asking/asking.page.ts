import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-asking',
  templateUrl: './asking.page.html',
  styleUrls: ['./asking.page.scss'],
})
export class AskingPage implements OnInit {

  asking = {
    userId: 0,
    hotelId: 0,
    title: '',
    detail: ''
  };

  hotelName = '';
  hotel: any;
  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private restApi: RestService,
    private storage: Storage,
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.hotel = JSON.parse(params.hotel);
      this.hotelName = this.hotel.name;
      console.log(this.hotel);
    });
  }

  ngOnInit() {
  }

  onClickSave() {
    if (this.validate()) {
      this.storage.get('user').then((user) => {
        this.asking.userId = user[0].id;
        this.asking.hotelId = this.hotel.id;
        this.restApi.saveAsking(this.asking).then(res => {
          console.log(res);
          alert('ส่งข้อความสำเร็จแล้ว กรุณารอการตอบกลับ');
          this.router.navigateByUrl('/tabs/tab2');
        });
      });
    }
  }

  validate() {
    let isValidate = false;
    if (this.asking.title === '' || this.asking.detail === '') {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    } else {
      isValidate = true;
    }
    return isValidate;
  }

}
