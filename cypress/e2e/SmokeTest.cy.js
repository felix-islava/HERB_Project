/// <reference types="cypress" />

describe('Smoke Test', () => {

    it('Login', () => {
        cy.visit('/')
        cy.get('[class="btn btn-light btn-lg btn-block"]').click({force: true})
        cy.wait(2)
        cy.get('.login-signup-wrapper > :nth-child(2) > .nav-link').click({force: true})
        cy.wait(2)

        cy.get('[class="form-control"][type="email"]').type('felix@herb.delivery', {force: true})
        cy.get('#spree_user_password').type('test_123_TEST', {force: true})
        cy.get('p > .btn').click()

        cy.wait(2)
        cy.contains('Hello') //Login was successful
    })

    it('Buy items', () => {
        
        cy.get('#heading-shop > .collapsed').click()
        // cy.contains('All Flowers').click()
        cy.get('.row > :nth-child(1) > .btn').then((button) => {
            if (button.find) {
                cy.get('.row > :nth-child(1) > .btn').click({force: true})
            }
            else {
                cy.get('[data-product-thumbnail-product-value="42"] > .product-thumbnail > .product-info > [data-controller="add-to-cart"] > form').click()
            }
        })

        cy.get('#heading-shop > .collapsed').realHover()
        //cy.get('[class="m-0 collapsed"]').realHover()
        //cy.get('[class=" d-block mb-2"]').should('include', 'All Flowers').and('have.attr', 'href').click()
        cy.contains('All Flowers').click()
        //cy.wait(10)
        cy.get('[data-id="41"]').click({force: true})

        cy.get('.info > h1').should('contain', 'Flowers')

        cy.get('[data-product-thumbnail-product-value="42"] > .product-thumbnail > :nth-child(1) > .product-thumbnail-image-wrapper > .card-img-top').click()
    })
})