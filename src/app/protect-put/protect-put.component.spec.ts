import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectPutComponent } from './protect-put.component';

describe('ProtectPutComponent', () => {
  let component: ProtectPutComponent;
  let fixture: ComponentFixture<ProtectPutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectPutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
