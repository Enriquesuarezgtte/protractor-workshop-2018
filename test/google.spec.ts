import { browser } from "protractor";

describe('Given a SDET learning protractor 2019', () => {
  describe('when open Google page', () => {
    beforeEach(() => {
      browser.get('http://www.google.com');
    });

    it('then should have a title', () => {
      expect(browser.getTitle()).toEqual('Google');
    });
  });

});
