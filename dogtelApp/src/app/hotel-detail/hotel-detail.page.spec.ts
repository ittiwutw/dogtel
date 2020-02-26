import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelDetailPage } from './hotel-detail.page';

describe('HotelDetailPage', () => {
  let component: HotelDetailPage;
  let fixture: ComponentFixture<HotelDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
