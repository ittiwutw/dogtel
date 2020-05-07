import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AskingPage } from './asking.page';

describe('AskingPage', () => {
  let component: AskingPage;
  let fixture: ComponentFixture<AskingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AskingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
