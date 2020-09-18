import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateRecordPage } from './create-record.page';

describe('CreateRecordPage', () => {
  let component: CreateRecordPage;
  let fixture: ComponentFixture<CreateRecordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRecordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateRecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
