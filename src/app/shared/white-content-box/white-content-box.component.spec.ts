import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteContentBoxComponent } from './white-content-box.component';

describe('WhiteContentBoxComponent', () => {
  let component: WhiteContentBoxComponent;
  let fixture: ComponentFixture<WhiteContentBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteContentBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteContentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
