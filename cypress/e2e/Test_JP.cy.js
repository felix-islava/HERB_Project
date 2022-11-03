describe('Herb',()=>{
    it('4Felix',()=>{
        cy.visit('/store')
        cy.get('#ageGateModal div:nth-child(1) > button').click()
        // cy.get('#ship-address').type(`1000 Vin Scully Ave, 90090`)
        // cy.get('div.pac-item:first-child').should("be.visible").click() // Maps tooltip

        cy.get('[class="btn btn-light btn-lg btn-block"]').click({force: true})
        
        cy.get('.login-signup-wrapper > :nth-child(2) > .nav-link').click({force: true})
        

        cy.get('[class="form-control"][type="email"]').type('felix@herb.delivery', {force: true})
        cy.get('#spree_user_password').type('test_123_TEST', {force: true})
        cy.get('p > .btn').click()

        cy.wait(2)
        cy.contains('Hello') //Login was successful
        cy.get("h4[data-target='#collapse-shop']").click()
        cy.get("li a[href='/store/t/types/flowers']").click()
        cy.get('article.col:first-child div.product-info').should("be.visible")
        cy.get('article.col:first-child div.product-info').trigger('mouseover')
        cy.get('article.col:first-child button[data-button=increase]').should('be.visible')
        cy.get('article.col:first-child button[data-button=increase]').click({force:true})
    })
})