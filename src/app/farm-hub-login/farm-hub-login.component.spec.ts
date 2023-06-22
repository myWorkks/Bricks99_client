import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmHubLoginComponent } from './farm-hub-login.component';

describe('FarmHubLoginComponent', () => {
  let component: FarmHubLoginComponent;
  let fixture: ComponentFixture<FarmHubLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmHubLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmHubLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
