import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

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

  constructor(
    private restApi: RestService,
    private router: Router,
    private storage: Storage
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
      }
    });
  }

  changeRole() {
    // if (this.userRole.approveFlg === '1') {
    this.storage.remove('role').then(res => {
      this.storage.set('role', this.userRole);
      console.log('current role : ' + this.userRole.userTypeId);
      // this.isApproveRoleReq = false;
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

}
