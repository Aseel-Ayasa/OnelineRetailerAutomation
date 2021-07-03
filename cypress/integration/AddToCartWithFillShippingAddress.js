/// <reference types="cypress" />

/*

This spec contains test cases related to:
 1. searching and selecting a device 
 2. Add the selected device to the Shipping Cart
 3. Open the Cart and choose to checkout as guest
 4. Open Address form and validate error message
 5. Fill Data in the Adddrss shipping form 

*/

describe('Actions', () => {
  before(() => {
    saveCookies()
  })
  beforeEach(() => {
    cy.VisitSite()
  })

  it('Configure and Add a Device to cart', () => {

    cy.Search("samsung galaxy s10")
    cy.AddToCart(1)
    cy.ContinueShopping()
  })


  it('Validate Shipping Address Error messages', () => {

    cy.GoToCart()
    cy.SecureCheckOut()
    cy.AddAdress()
    cy.SaveShippingAddressForm()
    cy.ValidateShippingAddressErrorMessages()

  })

  it('Fill Shipping Address Information', () => {

    cy.GoToCart()
    cy.SecureCheckOut()
    cy.AddAdress()
    cy.FillShippingAddressData()
    cy.SaveShippingAddressForm()
    cy.UseAddressAsEntered()
    cy.CheckContinueToDeleviry()

  })

})

/*

This listeners to prevent cypress from crashing due to the UI errors [ In console ] 
*/

Cypress.on('uncaught:exception', (err, runnable) => {

  return false
})

/*

This funstion saves cookies so test cases can continue with same credentails 
*/

export const saveCookies = () => {
  Cypress.Cookies.defaults({
    preserve: (cookie) => {
      return true
    },
  })
}