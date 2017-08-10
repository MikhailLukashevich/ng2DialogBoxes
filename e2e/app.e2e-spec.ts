import { TestDialogBoxPage } from './app.po';

describe('test-dialog-box App', function() {
  let page: TestDialogBoxPage;

  beforeEach(() => {
    page = new TestDialogBoxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
