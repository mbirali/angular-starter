import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitreComponent } from './titre.component';

describe('TitreComponent', () => {
  let component: TitreComponent;
  let fixture: ComponentFixture<TitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
