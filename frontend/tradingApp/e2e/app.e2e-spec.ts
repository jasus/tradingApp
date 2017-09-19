import { TradingAppPage } from './app.po';

describe('trading-app App', () => {
  let page: TradingAppPage;

  beforeEach(() => {
    page = new TradingAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
