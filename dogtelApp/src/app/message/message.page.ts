import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  msgList = [];
  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private restApi: RestService,
    private storage: Storage,
  ) {
    this.storage.get('user').then((user) => {

      this.storage.get('role').then((role) => {
        if (role === 2) {
          const param = {
            userId: user[0].id
          };
          this.restApi.getHotelByUserId(param).then(res => {
            let result: any;
            result = res;
            const paramAsking = {
              hotelId: result.data.result[0].id
            };
            this.restApi.getAskingByHotelId(paramAsking).then(reviews => {
              let resultReviews: any;
              resultReviews = reviews;
              this.msgList = resultReviews.data.result;
              console.log(this.msgList);
            });
          });
        } else if (role === 1) {
          const param = {
            userId: user[0].id
          };
          this.restApi.getHotelByUserId(param).then(res => {
            let result: any;
            result = res;
            const paramAsking = {
              userId: user[0].id
            };
            this.restApi.getAnswerByUserId(paramAsking).then(reviews => {
              let resultReviews: any;
              resultReviews = reviews;
              this.msgList = resultReviews.data.result;
              console.log(this.msgList);
            });
          });
        }
      });


    });
  }


  ngOnInit() {
  }

  onClickMsg(msg) {
    this.router.navigate(['/answer', { msg: JSON.stringify(msg) }]);
  }

}
