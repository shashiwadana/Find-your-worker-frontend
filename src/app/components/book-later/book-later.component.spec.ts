import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLaterComponent } from './book-later.component';

describe('BookLaterComponent', () => {
  let component: BookLaterComponent;
  let fixture: ComponentFixture<BookLaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
