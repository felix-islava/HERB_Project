describe('Herb', () => {
    
    it('Dispatcher Role', () => {

        cy.visit('/store/admin')
        cy.get('#spree_user_email').type('valerycastillo082403@outlook.com')
        cy.get('#spree_user_password').type('123456')
        cy.get('input:default').click()

        cy.contains('Orders').should('exist')
        cy.contains('Products').should('exist')
        cy.contains('Promotions').should('exist')
        cy.contains('Stock').should('exist')
        cy.contains('Users').should('exist')

        

        cy.contains('Orders').click()
        cy.xpath("//tr[contains(.,'Balance due')][1]/td[3]").click()

    })

})