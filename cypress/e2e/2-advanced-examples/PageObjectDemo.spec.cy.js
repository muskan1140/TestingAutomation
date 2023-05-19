/// <reference types='cypress' />

import LoginPage from "../../Page Objects/LoginPage.cy"

describe('Test Suite' , function(){

    it('Valid Login test', function(){
        const login = new LoginPage()
        login.visit()
        login.fillEmail('admin@yourstore.com')
        login.fillPassword('admin')
        login.submit()
        cy.title().should("be.equal", "Dashboard / nopCommerce administration")
    })
})