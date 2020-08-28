import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyLibComponent } from './third-party-lib.component';

describe('ThirdPartyLibComponent', () => {
  let component: ThirdPartyLibComponent;
  let fixture: ComponentFixture<ThirdPartyLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdPartyLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPartyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
