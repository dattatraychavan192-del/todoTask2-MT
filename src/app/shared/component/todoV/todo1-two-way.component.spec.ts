import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo1TwoWayComponent } from './todo1-two-way.component';

describe('Todo1TwoWayComponent', () => {
  let component: Todo1TwoWayComponent;
  let fixture: ComponentFixture<Todo1TwoWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Todo1TwoWayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todo1TwoWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
