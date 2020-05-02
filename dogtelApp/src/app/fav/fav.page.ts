import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.page.html',
  styleUrls: ['./fav.page.scss'],
})
export class FavPage implements OnInit {

  favs = [];

  constructor(
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // this.storage.remove('favs');
    this.storage.get('favs').then(favs => {
      console.log(favs);
      this.favs = favs;
    });
  }

  onClickHotel(hotel) {
    this.router.navigate(['tabs/tab1/hotel-detail', { hotel: JSON.stringify(hotel) }]);
  }

  remove(index) {
    this.favs.splice(index, 1);
    this.storage.remove('favs').then(removed => {
      this.storage.set('favs', this.favs);
    });
  }
}
