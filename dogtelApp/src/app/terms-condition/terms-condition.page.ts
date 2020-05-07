import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.page.html',
  styleUrls: ['./terms-condition.page.scss'],
})
export class TermsConditionPage implements OnInit {
  isChecked = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClickConfirm() {
    this.router.navigate(['/register']);
  }

  onClickCancel() {
    this.router.navigate(['/login']);
  }

}
