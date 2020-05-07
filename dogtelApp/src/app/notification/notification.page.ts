import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  notificationList = [];
  constructor(
    private router: Router,
    private restApi: RestService,
    private storage: Storage,
  ) {

  }

  ionViewWillEnter() {
    this.storage.get('user').then((user) => {


      const param = {
        userId: user[0].userId
      };
      this.restApi.getNotification(param).then(notic => {
        let resultNotic: any;
        resultNotic = notic;
        this.notificationList = resultNotic.data.result;
        console.log(this.notificationList);
      });

    });
  }

  ngOnInit() {
  }

}
