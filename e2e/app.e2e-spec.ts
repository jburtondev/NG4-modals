import { NG4ModalsPage } from './app.po';

describe('ng4-modals App', () => {
  let page: NG4ModalsPage;

  beforeEach(() => {
    page = new NG4ModalsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
