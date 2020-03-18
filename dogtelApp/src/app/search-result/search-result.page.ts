import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage implements OnInit {
  results: any;
  constructor(
    private restApi: RestService,
    public activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(params => {
      const searchCondition = JSON.parse(params.searchCondition);
      this.getResultlList(searchCondition);
    });
  }

  ngOnInit() {
  }

  getResultlList(searchCondition) {
    this.restApi.searchHotel(searchCondition).then(res => {
      console.log(res);
      let data: any;
      data = res;

      const getResults = data.data;
      if (getResults) {
        console.log(getResults.result);
        this.results = getResults.result;
        // const userInfo = userData.result[0];

      } else {
        // alert(data.response_description);
      }
    });
  }

  onClickHotel(hotel) {
    this.router.navigate(['tabs/tab1/hotel-detail', { hotel: JSON.stringify(hotel) }]);
  }

}
