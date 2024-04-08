import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVoluteersComponent } from './list-voluteers.component';

describe('ListVoluteersComponent', () => {
  let component: ListVoluteersComponent;
  let fixture: ComponentFixture<ListVoluteersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVoluteersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVoluteersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
