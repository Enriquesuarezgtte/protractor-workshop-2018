import { browser } from 'protractor';
import { IFramePage } from '../src/page/';

describe('Given a IFrame page', () => {
  beforeAll(async () => {
    browser.get('http://toolsqa.com/iframe-practice-page/');
  });

  describe('when modify a IFrame properties', () => {
    let iframe1: IFramePage;
    let iframeHeight: number;

    beforeAll(async () => {
      iframe1 = new IFramePage();
      iframeHeight = await iframe1.getFormFrameHeight();
      await iframe1.setFormFrameHeight(50);
    });

    it('then should have IFrame height been modified', async () => {
      expect(await iframe1.getFormFrameHeight()).not.toEqual(iframeHeight);
    });
  });
});
