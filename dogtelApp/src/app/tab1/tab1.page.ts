import { Component } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  slideOpts = {
    slidesPerView: 1.2,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    speed: 400,
    autoplay: true
  };

  hotels = [];

  constructor(
    private restApi: RestService,
    private router: Router,
    private iab: InAppBrowser
  ) {
    this.getHotelList();
  }

  getHotelList() {
    this.restApi.getHotelList().then(res => {
      console.log(res);
      let data: any;
      data = res;

      const getResults = data.data;
      if (getResults) {
        console.log(getResults.result);

        let i = 0;
        getResults.result.forEach(hotel => {
          if (i < 5) {
            this.hotels.push(hotel);
          }
          i++;
        });
        // this.hotels = getResults.result;
        // const userInfo = userData.result[0];

      } else {
        // alert(data.response_description);
      }
    });
  }

  onClickHotel(hotel) {
    this.router.navigate(['tabs/tab1/hotel-detail', { hotel: JSON.stringify(hotel) }]);
  }

  onClickSearch() {
    this.router.navigate(['tabs/tab1/search-hotel']);
  }

  openLink(link) {
    this.iab.create(link, '_system');
  }

}
