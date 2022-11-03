describe('Herb', () => {

    //NOTE: Before running this script, ensure there is enough stock of the following product in Solidys: 1:1 THC:CBD Transdermal
    
    
    beforeEach(()=>{
    })
    
    it('Create Order for Pending User', () => {

        cy.visit('/store/admin')
        cy.get('#spree_user_email').type('felix@herb.delivery')
        cy.get('#spree_user_password').type('test_123_TEST')
        cy.get('input:default').click()

        cy.contains('Users').click()

        cy.xpath("//tr[contains(.,'approved')][1]/td[2]").click()
        cy.get("a[href*='/profile']").click()

        cy.get('#user_state').select('pending')
        cy.get('div[data-hook=admin_user_edit_form_button] button[type="submit"]').click()

        //cy.xpath("//tr[contains(.,'pending')][1]/td[2]").click()
        cy.contains('Create order for this user').click()
        cy.wait(3)

        cy.contains('Update').click({force : true})
        cy.get('#select2-chosen-2').click({force: true})
        cy.get('#s2id_autogen2_search').type('trans')
        cy.get('#select2-result-label-3').click()
        cy.get('[class="save-line-item fa fa-ok no-text with-tip"]').click()
        cy.get("a[href*='/confirm']").click()
        cy.get('div[data-hook=complete-order-button] button[type="submit"]').click()
        cy.contains('Confirm Order').should('not.exist')
    })

})