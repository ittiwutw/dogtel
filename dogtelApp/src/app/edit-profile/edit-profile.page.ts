import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  username: '';
  email: '';
  userId: 0;

  constructor(
    private router: Router,
    private restApi: RestService,
    private storage: Storage,
  ) {
    this.storage.get('user').then((user) => {
      console.log(user);
      this.username = user[0].username;
      this.email = user[0].email;
      this.userId = user[0].id;
    });

  }

  ngOnInit() {
  }

  onClickSave() {
    const param = {
      userId: this.userId,
      email: this.email
    };

    this.restApi.register(param).then(data => {
      let res: any;
      res = data;
      if (res.response_code === '0001') {

        alert(res.response_description);

      } else {
        alert('แก้ไขข้อมูลสำเร็จแล้ว');
        this.router.navigate(['/tabs/account']);
      }
    });
  }

}
