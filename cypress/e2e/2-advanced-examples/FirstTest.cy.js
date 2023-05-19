describe('My First Test Case', function() {
    it('Verify Title of the Page Positive' , function() {
        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should('eq','nopCommerce demo store')
    })

    it("Verify Title of the Page Negative ", function () {
      cy.visit("https://demo.nopcommerce.com/");
      cy.title().should("eq", "nopCommerce  store");
    })
    
})