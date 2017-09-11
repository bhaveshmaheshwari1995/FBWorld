import { FbworldPage } from './app.po';

describe('fbworld App', function() {
  let page: FbworldPage;

  beforeEach(() => {
    page = new FbworldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
