
/*

  This file contains helper commannds 

*/

import * as Helper from './Helpers.js'

/*

    Command for searching a keyword in the seachbox 

*/
Cypress.Commands.add('Search', (keyword) => {
    cy.get(Helper.SELECTORS.searchBox).type(keyword+"{enter}")
  })

/*

   Command for Adding a selected device to the Shoppnig Cart 

*/


  Cypress.Commands.add('AddToCart', (element) => {

        cy.get(Helper.SELECTORS.ItemNthCell+'('+element +')').contains(Helper.KeyWords.AddToCart).click()
  
})

  Cypress.Commands.add('ContinueShopping', () => {
    cy.get(Helper.SELECTORS.ContinueShopping).click()
  })

  Cypress.Commands.add('VisitSite', () => {
    cy.visit(Helper.URL.BaseURL)

  })

  Cypress.Commands.add('CheckCartValue', (value) => {
     cy.get(Helper.SELECTORS.ShoppingCart).should('have.text',value)

  })

  Cypress.Commands.add('GoToCart', (value) => {
    cy.get(Helper.SELECTORS.ShoppingCart).click()

  })

  Cypress.Commands.add('SecureCheckOut', () => {
    cy.get(Helper.SELECTORS.Btn).contains(Helper.KeyWords.SecureCheckOut).click()
    cy.wait(12000)
    cy.get(Helper.SELECTORS.FormCell).contains(Helper.KeyWords.GuestCheckOut).click({timeout:5000})
    cy.wait(5000)

  })

  Cypress.Commands.add('AddAdress', (value) => {
     cy.get(Helper.SELECTORS.ShippingItem).scrollTo('center', { ensureScrollable: false })
     cy.get(Helper.SELECTORS.AddIcon).click({ timeout: 10000 })

  })

  Cypress.Commands.add('SaveShippingAddressForm', (value) => {
    cy.get(Helper.SELECTORS. FirstNameInput).scrollTo('bottom', { ensureScrollable: false })
    cy.get(Helper.SELECTORS.Save).contains(Helper.KeyWords.Save).click()
    cy.wait(5000)

 })

 Cypress.Commands.add('ValidateShippingAddressErrorMessages', () => {
   
    cy.get(Helper.SELECTORS.FirstName).should('have.text', Helper.ERRORMESSAGES.FirtNameErr) 

    cy.get(Helper.SELECTORS.LastName).should('have.text', Helper.ERRORMESSAGES.LastNameErr) 

    cy.get(Helper.SELECTORS.Address).should('have.text', Helper.ERRORMESSAGES.AddressErr) 

    cy.get(Helper.SELECTORS.City).should('have.text', Helper.ERRORMESSAGES.CityErr) 

    cy.get(Helper.SELECTORS.ZIPCode).should('have.text', Helper.ERRORMESSAGES.ZipCodeErr) 

    cy.get(Helper.SELECTORS.Phone).should('have.text', Helper.ERRORMESSAGES.PhoneErr) 

    cy.get(Helper.SELECTORS.Email).should('have.text', Helper.ERRORMESSAGES.EmailErr) 
  
   
    })
 Cypress.Commands.add('FillShippingAddressData', () => {

    cy.get(Helper.SELECTORS.FirstNameInput).type(Helper.ShippingAddressData.FirstName)
    cy.get(Helper.SELECTORS.LastNameInput).type(Helper.ShippingAddressData.LastName)
    cy.get(Helper.SELECTORS.AddressInput).type(Helper.ShippingAddressData.Address)
    cy.get(Helper.SELECTORS.CityInput).type(Helper.ShippingAddressData.City)
    cy.get(Helper.SELECTORS.ZIPCodeInput).type(Helper.ShippingAddressData.ZipCode)
    cy.get(Helper.SELECTORS.PhoneInput).type(Helper.ShippingAddressData.Phone)
    cy.get(Helper.SELECTORS.EmailInput).type(Helper.ShippingAddressData.Email)


 })
 Cypress.Commands.add('CheckContinueToDeleviry', () => {
    cy.contains(Helper.KeyWords.ContinueToDelivery).should('be.visible')

 })

 Cypress.Commands.add('UseAddressAsEntered', () => {
    cy.contains(Helper.KeyWords.UseAddressAsEntered).click()
 })


