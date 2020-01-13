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

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTshirtMenu();
    await productListPage.addTshirtToCart();
    await productAddedModalPage.goToShoppingCartSummary();

    await orderSummary.goToLoginStep();
    await signInCardStep.sendEmailandPasswKeys(emailKey, passwordKey);
    await signInCardStep.signIn();

    await addressStepPage.goToShippingStep();

    await shippingStepPage.acceptTermsOfService();

    await shippingStepPage.goToPaymentStepPage();
    await paymentStepPage.payByCheck();
    await bankPaymentPage.confirmOrder();
    await expect(bankPaymentPage.getOrderResult()).toBe('Your order on My Store is complete.');
  });
});
