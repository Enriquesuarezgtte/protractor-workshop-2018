import { browser } from 'protractor';
import {
  MenuContentPage,
  ProductListPage,
  ProductDetailPage,
  OrderSummaryPage,
  SignInCardStepPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  BankPaymentPage,
} from '../src/page';

describe('Given a web clothes store', () => {

  beforeAll(async () => {
    await browser.get('http://automationpractice.com/');
  });

  describe('when buy a t-Shirt', () => {

    beforeAll(async () => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const productListPage: ProductListPage = new ProductListPage();
      const productDetailPage: ProductDetailPage = new ProductDetailPage();
      const orderSummary: OrderSummaryPage = new OrderSummaryPage();
      const productoABuscar : string = 'Faded Short Sleeve T-shirts';
      await menuContentPage.goToTshirtMenu();
      await productListPage.selectProduct(productoABuscar);
      await productDetailPage.addTShirtToCart();
      await productDetailPage.goToShoppingCartSummary();
      await orderSummary.goToLoginStep();
    });

    describe('and login into application', () => {

      beforeAll(async () => {
        const emailKey: string = 'aperdomobo@gmail.com';
        const passwordKey: string = 'WorkshopProtractor';
        const signInCardStep: SignInCardStepPage = new SignInCardStepPage();

        await signInCardStep.sendEmailandPasswKeys(emailKey, passwordKey);
        await signInCardStep.signIn();
      });

      describe('and continuing process with default address', () => {

        beforeAll(async () => {
          const addressStepPage: AddressStepPage = new AddressStepPage();
          await addressStepPage.goToShippingStep();
        });

        describe('and pay on bank', () => {
          let bankPaymentPage: BankPaymentPage;

          beforeAll(async () => {
            bankPaymentPage = new BankPaymentPage();
            const paymentStepPage: PaymentStepPage = new PaymentStepPage();
            const shippingStepPage: ShippingStepPage = new ShippingStepPage();

            await shippingStepPage.acceptTermsOfService();
            await shippingStepPage.goToPaymentStepPage();
            await paymentStepPage.payByCheck();
            await bankPaymentPage.confirmOrder();
          });

          it('then should be bought a t-shirt', async () => {
            await expect(bankPaymentPage.getOrderResult())
             .toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
