import { TestAngularCssAnimationsPage } from './app.po';

describe('test-angular-css-animations App', () => {
    let page: TestAngularCssAnimationsPage;

    beforeEach(() => {
        page = new TestAngularCssAnimationsPage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
