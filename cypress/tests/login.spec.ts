/// <reference types="cypress" />

import { LoginDetailPage } from '../page-objects/pages/login';
import { InventoryPage } from '../page-objects/pages/inventory';

describe('Login details page tests', () => {
  beforeEach(() => {
    LoginDetailPage.navigate();

  });

  it('should be able to login into account details with valid credentials', () => {
    LoginDetailPage.setUsername('standard_user');
    LoginDetailPage.setPassword('secret_sauce');
    LoginDetailPage.clickLoginBtn();
    LoginDetailPage.getURL().should('eq', 'https://www.saucedemo.com/inventory.html');
  });

  it('should not be able to login into account details with invalid credentials', () => {
    LoginDetailPage.setUsername('test');
    LoginDetailPage.setPassword('test');
    LoginDetailPage.clickLoginBtn();
    LoginDetailPage.elements.getErrorBanner()
    .should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('should not be able to log out from the application', () => {
    LoginDetailPage.setUsername('standard_user');
    LoginDetailPage.setPassword('secret_sauce');
    LoginDetailPage.clickLoginBtn();
    InventoryPage.sideBarOption('Logout');
    LoginDetailPage.getURL().should('eq', 'https://www.saucedemo.com/');
  });

});
