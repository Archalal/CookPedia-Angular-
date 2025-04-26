import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedRecipieComponentComponent } from './saved-recipie-component.component';

describe('SavedRecipieComponentComponent', () => {
  let component: SavedRecipieComponentComponent;
  let fixture: ComponentFixture<SavedRecipieComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedRecipieComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedRecipieComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
