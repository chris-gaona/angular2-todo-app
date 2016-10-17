/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TodoAppComponent } from './todo-app.component';
import { TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';

describe('Component: TodoApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        TodoAppComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(TodoAppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
