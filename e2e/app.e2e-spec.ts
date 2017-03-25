import { AVOCAChartsPage } from './app.po';

describe('avoca-charts App', () => {
  let page: AVOCAChartsPage;

  beforeEach(() => {
    page = new AVOCAChartsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('avo works!');
  });
});
