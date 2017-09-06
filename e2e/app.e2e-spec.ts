import { HotWaterSavingsPage } from './app.po';

describe('hot-water-savings App', () => {
  let page: HotWaterSavingsPage;

  beforeEach(() => {
    page = new HotWaterSavingsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
