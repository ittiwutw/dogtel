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

  constructor(
    private restApi: RestService,
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  logout() {
    this.storage.remove('user').then(val => {
      this.router.navigate(['/login']);
    });
  }

}
