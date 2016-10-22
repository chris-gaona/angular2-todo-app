import {browser, element, by, protractor} from "protractor";

describe('angular2-todo-app App', function() {
  it('should have a title', () => {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Angular2TodoApp');
  });

  it('should initially have 0 todos', () => {
    let elementItem = element(by.css('.todo-text')).isPresent();
    expect(elementItem).toBe(false);
    expect(element(by.css('.emphasis')).getText()).toEqual('0');
  });

  it('should add a new todo item', () => {
    // first todo
    element(by.css('.add-input')).sendKeys('Walk the Dog');
    element(by.css('.add-btn')).click();

    expect(element(by.css('.todo-text')).getText()).toEqual('Walk the Dog');
    expect(element(by.css('.emphasis')).getText()).toEqual('1');
  });

  it('should add another todo with count of todos increasing accordingly', () => {
    let todos = element.all(by.css('.todo-text'));

    // second todo
    element(by.css('.add-input')).sendKeys('Do some Crossfit');
    element(by.css('.add-btn')).click();

    expect(todos.get(0).getText()).toBe('Walk the Dog');
    expect(todos.get(1).getText()).toBe('Do some Crossfit');
    expect(element(by.css('.emphasis')).getText()).toEqual('2');
  });

  it('should mark a todo as complete when checkbox is clicked', () => {
    let checkboxes = element.all(by.css('.checkbox-custom'));
    let todos = element.all(by.css('.todo-text'));

    expect(todos.get(0).isSelected()).toBeFalsy();

    checkboxes.get(0).click();

    expect(todos.get(0).isSelected).toBeTruthy();
    expect(todos.get(0).getAttribute('class')).toEqual('todo-text done-true');
  });

  it('should add an input field when the todo text is clicked on', () => {
    let todos = element.all(by.css('.todo-text'));
    let input = element(by.css('.editing-input'));
    expect(todos.get(1).isDisplayed()).toBeTruthy();

    todos.get(1).click();

    expect(todos.get(1).isPresent()).toBe(false);
    expect(input.isDisplayed()).toBeTruthy();
  });

  it('should let user edit the todo & click save to keep changes', () => {
    let todos = element.all(by.css('.todo-text'));
    let input = element(by.css('.editing-input'));
    let button = element(by.css('.editing-button'));

    input.clear();
    input.sendKeys('Edited this todo');

    button.click();

    expect(todos.get(1).isDisplayed()).toBeTruthy();
    expect(todos.get(1).getText()).toEqual('Edited this todo');
  });

  it('should add an input field when the todo text is clicked on', () => {
    let todos = element.all(by.css('.todo-text'));
    let input = element(by.css('.editing-input'));
    expect(todos.get(1).isDisplayed()).toBeTruthy();

    todos.get(1).click();

    expect(todos.get(1).isPresent()).toBe(false);
    expect(input.isDisplayed()).toBeTruthy();
  });

  it('should let user edit the todo & hit enter to keep changes', () => {
    let todos = element.all(by.css('.todo-text'));
    let input = element(by.css('.editing-input'));

    input.clear();
    input.sendKeys('Do some Crossfit');

    input.sendKeys(protractor.Key.ENTER);

    expect(todos.get(1).isDisplayed()).toBeTruthy();
    expect(todos.get(1).getText()).toEqual('Do some Crossfit');
  });

  it('should delete a todo when the delete button is clicked on a particular todo', () => {
    let todos = element.all(by.css('.todo-text'));
    let deleteButton = element.all(by.css('.delete-btn'));

    deleteButton.get(0).click();

    expect(todos.get(0).getText()).toBe('Do some Crossfit');
    expect(element(by.css('.emphasis')).getText()).toEqual('1');
  });

  // it('should add focus to the input element that is in editing mode');
});
