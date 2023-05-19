
/// <reference types="cypress" />

describe('CustomSuite' , function() {
    it('LoginTest', function() {
        cy.login('','')
        cy.title().should("be.equal", "Dashboard / nopCommerce administration");
    }) 

    it("Add customer", function () {
        cy.login('','')

      //Script for Adding new customer
      cy.log('Adding customer...............')
    })

    it("Edit customer", function () {
      cy.login('','')

      //Script for Editing Customer
      cy.log('Editing customer.........')
    })
})