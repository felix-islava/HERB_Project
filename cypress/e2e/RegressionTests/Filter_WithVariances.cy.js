
describe('Herb', () => {

    it('Hide Products when filtering "With Variances"', () => {

        cy.visit('/store/admin')
        cy.get('#spree_user_email').type('admin@herb.delivery')
        cy.get('#spree_user_password').type('stxnM2GqqYELaEttY')
        cy.get('input:default').click()

        cy.contains('Stock').click()
        cy.get('#with_brand_name_cont').type('Barkley', {force:true})
        cy.get('div>button[type="submit"]').click({force:true})

        cy.get('#with_name').click()
        cy.get('div>button[type="submit"]').click()
        cy.contains(' No variants found. Try changing the search values. ').should('exist')
    })







})