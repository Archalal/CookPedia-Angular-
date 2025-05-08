import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipieeditComponent } from './recipieedit.component';

describe('RecipieeditComponent', () => {
  let component: RecipieeditComponent;
  let fixture: ComponentFixture<RecipieeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipieeditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipieeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
