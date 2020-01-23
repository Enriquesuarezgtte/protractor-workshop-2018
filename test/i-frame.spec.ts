import { browser } from 'protractor';
import { IFramePage, PersonalInformationPage } from '../src/page/';

describe('Given a IFrame page', () => {
  const iframe1: IFramePage = new IFramePage();

  beforeAll(async () => {
    browser.get('http://toolsqa.com/iframe-practice-page/');
  });

  it('then should have a title', async () => {
    await expect(iframe1.getPageTitle()).toBe('Sample Iframe page');
  });

  describe('when modify a IFrame properties', () => {
    let iframeHeight: number;

    beforeAll(async () => {
      iframeHeight = await iframe1.getFormFrameHeight();
      await iframe1.setFormFrameHeight(500);
    });

    it('then should have IFrame height been modified', async () => {
      expect(await iframe1.getFormFrameHeight()).not.toEqual(iframeHeight);
    });

    describe('and focus to iframe1', () => {
      const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
      beforeAll(async () => {
        await iframe1.switchToFrame();
      });

      it('then should have a iframe1 title', () => {
        expect(personalInformationPage.getPageTitle()).toBe('Automation Tools Tutorial');
      });

      describe('and focus to principal context', () => {
        beforeAll(async () => {
          await iframe1.switchToMainPage();
        });
        it('then should have a principal context title', async () => {
          await expect(iframe1.getPageTitle()).toBe('Sample Iframe page');
        });
      });
    });
  });
});
