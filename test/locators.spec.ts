import { browser } from 'protractor';
import { PersonalInformationPage, DownloadService } from '../src/page';

describe('Given a web page to practice form', () => {
  beforeAll(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');
  });

  describe('when fill personal information form', () => {
    let personalInformationPage: PersonalInformationPage;
    beforeAll(async () => {
      personalInformationPage = new PersonalInformationPage();
      await personalInformationPage.hideAdsAndCookies();
      await personalInformationPage.fillForm({
        firstName: 'Alejandro',
        lastName: 'Perdomo',
        sex: 'Male',
        experience: 7,
        file: './resources/psl.jpg',
        downloadfile : true,
        profession: ['Automation Tester'],
        tools: ['Selenium Webdriver'],
        continent: 'South America',
        commands: [
          'Browser Commands',
          'Navigation Commands',
          'Switch Commands',
          'Wait Commands',
          'WebElement Commands']});
    });

    it('then filename should have been loaded', async () => {
      await expect(personalInformationPage.getFileName()).toBe('psl.jpg');
    });

    it('then file should have been downloaded', async () => {
      const service = new DownloadService();
      const file = await service.readFileFromTemp('excel-file.xlsx');
      await expect(file.byteLength).toBeGreaterThanOrEqual(8764);
    });

    it('then should have been filled the form', async () => {
      await personalInformationPage.submitForm();
      await expect(personalInformationPage.getPageTitle()).toBe('Practice Automation Form');
    });
  });
});
