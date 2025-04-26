import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipieComponentComponent } from './recipie-component.component';

describe('RecipieComponentComponent', () => {
  let component: RecipieComponentComponent;
  let fixture: ComponentFixture<RecipieComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipieComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipieComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
