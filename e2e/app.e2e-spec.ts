import { GreybytesAppPage } from './app.po';

describe('greybytes-app App', () => {
  let page: GreybytesAppPage;

  beforeEach(() => {
    page = new GreybytesAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
