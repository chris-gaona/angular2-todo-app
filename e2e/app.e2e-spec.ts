import { Angular2TodoAppPage } from './app.po';
import { browser } from "protractor";

describe('angular2-todo-app App', function() {
  let page: Angular2TodoAppPage;

  beforeEach(() => {
    page = new Angular2TodoAppPage();
  });

  it('should have a title', () => {
    page.navigateTo();
    expect(browser.getTitle()).toEqual('Angular2TodoApp');
  });

  // it('should display message saying app works', () => {
  //   page.navigateTo();
  //   expect(page.getParagraphText()).toEqual('app works!');
  // });
});
