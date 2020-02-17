import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: '';
  password: '';
  constructor(
    private restApi: RestService,
    private router: Router,
    private storage: Storage,
    private events: Events
  ) {
    this.storage.get('user').then((val) => {
      console.log(val);
      if (val) {
        this.router.navigate(['/tabs']);
      }
    });
  }

  ngOnInit() {
    this.storage.get('user').then((val) => {
      console.log(val);
      if (val) {
        this.router.navigate(['/tabs']);
      }
    });
  }

  login() {
    const param = {
      username: this.username,
      password: this.password
    };

    this.restApi.login(param).then(res => {
      console.log(res);
      let data: any;
      data = res;

      const userData = data.data;
      if (userData) {
        console.log(userData.result[0]);
        // const userInfo = userData.result[0];

        this.storage.set('user', userData.result).then((val) => {
          this.events.publish('user:login');
          this.router.navigate(['/tabs']);
        });

      } else {
        alert(data.response_description);
      }
    });
  }

  register() {
    this.router.navigate(['/register']);
  }

}
