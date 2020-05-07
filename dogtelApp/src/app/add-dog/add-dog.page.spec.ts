import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddDogPage } from './add-dog.page';

describe('AddDogPage', () => {
  let component: AddDogPage;
  let fixture: ComponentFixture<AddDogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddDogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
