import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorrorIconsComponent } from './horror-icons.component';

describe('HorrorIconsComponent', () => {
  let component: HorrorIconsComponent;
  let fixture: ComponentFixture<HorrorIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorrorIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorrorIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
