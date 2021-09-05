import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMobilComponent } from './header-mobil.component';

describe('HeaderMobilComponent', () => {
  let component: HeaderMobilComponent;
  let fixture: ComponentFixture<HeaderMobilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMobilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMobilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
