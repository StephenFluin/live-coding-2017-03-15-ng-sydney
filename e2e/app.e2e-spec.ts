import { NgSydneyPage } from './app.po';

describe('ng-sydney App', () => {
  let page: NgSydneyPage;

  beforeEach(() => {
    page = new NgSydneyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
