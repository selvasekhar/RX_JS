import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewobservableComponent } from './newobservable.component';

describe('NewobservableComponent', () => {
  let component: NewobservableComponent;
  let fixture: ComponentFixture<NewobservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewobservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewobservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
