import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetownersComponent } from './petowners.component';

describe('PetownersComponent', () => {
  let component: PetownersComponent;
  let fixture: ComponentFixture<PetownersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PetownersComponent]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PetownersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
