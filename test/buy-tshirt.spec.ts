import { browser } from 'protractor';
import {
  MenuContentPage,
  ProductListPage,
  ProductAddedModalPage,
  OrderSummaryPage,
  SignInCardStepPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  BankPaymentPage,
  OrderResultPage
} from '../src/page';

describe('Buy a t-shirt', () => {
  const emailKey: string = 'aperdomobo@gmail.com';
  const passwordKey: string = 'WorkshopProtractor';
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const orderSummary: OrderSummaryPage = new OrderSummaryPage();
  const signInCardStep: SignInCardStepPage = new SignInCardStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderResultPage: OrderResultPage = new OrderResultPage();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await (browser.sleep(10000));
    await menuContentPage.goToTshirtMenu();
    await (browser.sleep(3000));
    await productListPage.addTshirtToCart();
    await (browser.sleep(3000));
    await productAddedModalPage.goToShoppingCartSummary();
    await (browser.sleep(3000));

    await orderSummary.goToLoginStep();
    await (browser.sleep(3000));
    await signInCardStep.sendEmailandPasswKeys(emailKey, passwordKey);
    await signInCardStep.signIn();
    await (browser.sleep(3000));

    await addressStepPage.goToShippingStep();
    await (browser.sleep(3000));

    await shippingStepPage.acceptTermsOfService();
    await (browser.sleep(3000));

    await shippingStepPage.goToPaymentStepPage();
    await (browser.sleep(3000));
    await paymentStepPage.payByCheck();
    await (browser.sleep(3000));
    await bankPaymentPage.confirmOrder();
    await (browser.sleep(3000));

    await expect(orderResultPage.getOrderResult())
    .toBe('Your order on My Store is complete.');

  });
});
