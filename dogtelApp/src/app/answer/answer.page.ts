import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.page.html',
  styleUrls: ['./answer.page.scss'],
})
export class AnswerPage implements OnInit {
  msg: any;
  answer = {
    userId: 0,
    hotelId: 0,
    askingId: 0,
    title: '',
    detail: ''
  };
  isHotel = false;
  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private restApi: RestService,
    private storage: Storage,
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.msg = JSON.parse(params.msg);
      console.log(this.msg);
    });

    this.storage.get('role').then((role) => {
      if (role === 2) {
        this.isHotel = true;
      }
    });
  }

  ngOnInit() {
  }

  onClickSave() {
    if (this.validate()) {
      this.storage.get('user').then((user) => {
        this.answer.userId = this.msg.userId;
        this.answer.hotelId = this.msg.hotelId;
        this.answer.askingId = this.msg.askingId;
        this.restApi.saveAnswer(this.answer).then(res => {
          console.log(res);
          alert('ส่งข้อความสำเร็จแล้ว');
          this.router.navigateByUrl('/tabs/account');
        });
      });
    }
  }

  validate() {
    let isValidate = false;
    if (this.answer.title === '' || this.answer.detail === '') {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    } else {
      isValidate = true;
    }
    return isValidate;
  }

}
