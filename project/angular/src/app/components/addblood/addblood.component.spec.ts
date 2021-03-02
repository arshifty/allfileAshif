import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbloodComponent } from './addblood.component';

describe('AddbloodComponent', () => {
  let component: AddbloodComponent;
  let fixture: ComponentFixture<AddbloodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbloodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
