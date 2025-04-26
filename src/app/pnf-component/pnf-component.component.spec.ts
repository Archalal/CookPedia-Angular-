import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnfComponentComponent } from './pnf-component.component';

describe('PnfComponentComponent', () => {
  let component: PnfComponentComponent;
  let fixture: ComponentFixture<PnfComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PnfComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PnfComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
