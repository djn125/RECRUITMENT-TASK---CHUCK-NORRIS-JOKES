import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeWrapperComponent } from './joke-wrapper.component';

describe('JokeWrapperComponent', () => {
  let component: JokeWrapperComponent;
  let fixture: ComponentFixture<JokeWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
