import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.page.html',
  styleUrls: ['./search-hotel.page.scss'],
})
export class SearchHotelPage implements OnInit {

  searchCondition = {
    startDate: '',
    endDate: '',
    dogId: '',
    type: 'hotel'
  };

  constructor(
    private restApi: RestService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClickSearch() {
    console.log(this.searchCondition);
    this.router.navigate(['tabs/tab1/search-result', { searchCondition: JSON.stringify(this.searchCondition) }]);
  }

}
