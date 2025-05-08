import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrecipieComponent } from './addrecipie.component';

describe('AddrecipieComponent', () => {
  let component: AddrecipieComponent;
  let fixture: ComponentFixture<AddrecipieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddrecipieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddrecipieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
