import { VirtualClassWebSaturnPage } from './app.po';

describe('virtual-class-web-saturn App', function() {
  let page: VirtualClassWebSaturnPage;

  beforeEach(() => {
    page = new VirtualClassWebSaturnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
