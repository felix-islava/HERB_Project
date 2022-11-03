

describe('Herb', () => {

    beforeEach(()=>{
        cy.viewport(1980, 1080)
    })
    
    it('Approve User', () => {

        cy.visit('/store/admin')
        cy.get('#spree_user_email').type('felix@herb.delivery')
        cy.get('#spree_user_password').type('test_123_TEST')
        cy.get('input:default').click()

        cy.contains('Users').click()

        cy.xpath("//tr[contains(.,'pending')][1]/td[2]").click()
        cy.get("a[href*='/profile']").click()

        cy.get('#user_state').select('approved')
        cy.get('div[data-hook=admin_user_edit_form_button] button[type="submit"]').click()
        cy.get('[class="flash success"]').should('have.text', 'Account updated')
        cy.get("a[href*='/profile']").click()
        cy.get('#user_state').should('have.value', 'approved')
    })





})