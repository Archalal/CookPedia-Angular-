import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecipieComponentComponent } from './view-recipie-component.component';

describe('ViewRecipieComponentComponent', () => {
  let component: ViewRecipieComponentComponent;
  let fixture: ComponentFixture<ViewRecipieComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewRecipieComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRecipieComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
