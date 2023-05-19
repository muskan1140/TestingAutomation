/// <reference types="Cypress"/>

describe("UI Elements", function () {
  it("Verify Inputbox & Radio Buttons", function () {
    cy.visit("https://demo.guru99.com/test/newtours/index.php/")  //Visit URL
    cy.url().should('include', 'newtours') //verify URL should include 'newtours'

    cy.get("input[name=userName]").should("be.visible").should("be.enabled").type("mercury")

    cy.get("input[name=password").should("be.visible").should("be.enabled").type("mercury")

    cy.get("input[name=submit").should("be.visible").click() //Sign-in

    //Title verification
    cy.title().should('eq', 'Find a Flight: Mercury Tours:') //Title verification

    //Radio Buttons
    cy.get('input[value=roundtrip]').should("be.visible").should("be.checked") //visibility checked status

    cy.get('input[value=oneway]').should("be.visible").should("not.be.checked").click()

    cy.get('[name=findFlights').should("be.visible").click() //Continue button

    cy.title().should('eq', 'Select a Flight: Mercury Tours') //Title verification
  })
})
