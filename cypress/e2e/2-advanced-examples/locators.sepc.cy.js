/// <reference types="cypress" />
describe("Locating Elements", function () {
  it("Verify types of locators", function () {
    cy.visit("https://demo.nopcommerce.com/") //Opens the URL

    cy.get("#small-searchterms").type("Apple Macbook Pro 13-inch")

    cy.get("[type = 'submit']").click() //click on search button

    cy.get(".product-box-add-to-cart-button").click()

    cy.get("#add-to-cart-button-4").type('2') //Quantity

    cy.get("#product_enteredQuantity_4").click() //Add to Cart button after providing quantity
    cy.wait(5000)

    cy.get("#topcartlink > a > Span.cart-label").click() //shopping cart link
    cy.wait(3000)

    cy.get(".product-unit-price").contains('$1,800.00') //validation point
  })
})
