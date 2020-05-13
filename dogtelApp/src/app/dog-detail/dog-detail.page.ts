import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.page.html',
  styleUrls: ['./dog-detail.page.scss'],
})
export class DogDetailPage implements OnInit {

  dogData: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    private restApi: RestService,
    private router: Router,
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.dogData = JSON.parse(params.dog);

      console.log(this.dogData);
    });
  }

  ngOnInit() {
  }

  onClickDeleteDog() {
    const param = {
      id: this.dogData.id
    };
    this.restApi.deleteDog(param).then(data => {
      alert('ลบข้อมูลแล้ว');
      this.router.navigate(['/tabs/account']);
    });
  }

}
