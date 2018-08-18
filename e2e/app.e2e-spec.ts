import { FPLHelpmatePage } from './app.po';

describe('fplhelpmate App', function() {
  let page: FPLHelpmatePage;

  beforeEach(() => {
    page = new FPLHelpmatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
