import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyHotelPage } from './my-hotel.page';

describe('MyHotelPage', () => {
  let component: MyHotelPage;
  let fixture: ComponentFixture<MyHotelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHotelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyHotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
