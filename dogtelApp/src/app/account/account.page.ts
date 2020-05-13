import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Events, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  userData = [];
  userRole: any;
  isApproveRoleReq = false;
  profile: any;
  dogData: any;

  constructor(
    private restApi: RestService,
    private router: Router,
    private storage: Storage,
    private events: Events,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // this.storage.remove('role');
    this.storage.get('user').then((val) => {
      if (val) {
        console.log('user data', val);
        this.userData = val;
        this.profile = val[0];
        this.storage.get('role').then((currentRole) => {
          if (currentRole) {
            this.userRole = currentRole;
          } else {
            this.userRole = 1;
            this.changeRole();
          }
        });
        this.loadDog();
      }
    });


  }

  loadDog() {
    this.storage.get('user').then((user) => {
      const param = {
        userId: this.profile.id,
      };
      this.restApi.getDogByUserId(param).then(res => {
        let result: any;
        result = res;
        this.dogData = result.data.result;
        console.log(this.dogData);
      });
    });
  }

  changeRole() {
    // if (this.userRole.approveFlg === '1') {
    this.storage.remove('role').then(res => {
      if (this.userData[1].approveFlg === '0' && this.userRole === 2) {
        this.userRole = 1;
        this.router.navigateByUrl('/select-hotel-type');
      } else if (this.userData[1].approveFlg === '2' && this.userRole === 2) {
        this.userRole = 1;
        alert('กรุณารอการยืนยันจาก Admin');
      } else {
        this.storage.set('role', this.userRole);
        console.log('current role : ' + this.userRole);
        // this.isApproveRoleReq = false;
        this.events.publish('role:changed', this.userRole);
      }

    });
    // } else {
    //   // this.userRole = 1;
    //   this.isApproveRoleReq = true;
    //   console.log(this.userRole.approveFlg);
    // }

  }

  logout() {
    this.storage.remove('user').then(val => {
      this.router.navigate(['/login']);
    });
  }

  async presentAlertRadio() {
    const alert = await this.alertController.create({
      header: 'บัญชีของฉัน',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'หน้าผู้ใช้ของฉัน',
          value: 1
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'โรงแรมของฉัน',
          value: 2
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok');
            console.log(data);
            this.userRole = data;
            this.changeRole();
          }
        }
      ]
    });

    await alert.present();
  }

  onClickDog(dog) {
    this.router.navigate(['/dog-detail', { dog: JSON.stringify(dog) }]);
  }

}
