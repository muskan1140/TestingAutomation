/// <reference types="cypress"/>

describe('MyTestSuite', function(){
    it('Table Test',  function(){
        cy.visit('https://testautomationpractice.blogspot.com/')

        //(1) Check Value Presence anywhere in the table

        cy.get('table[name=BookTable]').contains('td','Learn Selenium').should('be.visible')

        //(2) Check Value Presence in Specific Row and Column

        cy.get(
          "table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)").contains("Selenium").should("be.visible");





    })
})