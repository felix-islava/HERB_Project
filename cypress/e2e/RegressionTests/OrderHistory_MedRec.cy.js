
describe('Herb', () => {

    it('Review Order History for an Adult User', () => {

        cy.visit('/store')
        cy.get('#ageGateModal div:nth-child(1) > button').click()
        cy.get('[class="btn btn-light btn-lg btn-block"]').click({force: true})

        cy.get(':nth-child(3) > .nav-link').click()

        cy.get("li a[href='/store/login']").click()
        cy.get('#spree_user_email').type('felix+medrecnov242@herb.delivery')
        cy.get('#spree_user_password').type('test_123_TEST')

        cy.get('[class="btn btn-primary btn-block"]').click()

        cy.get('a[data-toggle=dropdown]').click()
        cy.get("a[href='/store/account']").click()

        cy.get('form>button.btn-outline-primary,div.media a.btn-primary').should('exist')

        //Need to figure out how to identify and assert whether "Reorder" of "View Status" buttons exist
    })
})