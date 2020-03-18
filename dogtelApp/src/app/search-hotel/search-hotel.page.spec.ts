import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchHotelPage } from './search-hotel.page';

describe('SearchHotelPage', () => {
  let component: SearchHotelPage;
  let fixture: ComponentFixture<SearchHotelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHotelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchHotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
