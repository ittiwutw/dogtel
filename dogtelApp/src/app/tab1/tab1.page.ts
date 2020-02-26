import { Component } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  slideOpts = {
    slidesPerView: 1.5,
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

  hotels: any;

  constructor(
    private restApi: RestService,
    private router: Router
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
        this.hotels = getResults.result;
        // const userInfo = userData.result[0];

      } else {
        // alert(data.response_description);
      }
    });
  }

  onClickHotel(hotel) {
    this.router.navigate(['/hotel-detail', { hotel: JSON.stringify(hotel) }]);
  }

}
