import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectGetComponent } from './protect-get.component';

describe('ProtectGetComponent', () => {
  let component: ProtectGetComponent;
  let fixture: ComponentFixture<ProtectGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
