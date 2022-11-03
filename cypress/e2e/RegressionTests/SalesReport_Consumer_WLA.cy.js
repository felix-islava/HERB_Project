const dayjs = require('dayjs')

describe('Herb', () => {

    // beforeEach(()=>{
    //     cy.viewport(1980, 1080)
    // })
    
    it('Approve User', () => {

        cy.visit('/store/admin')
        cy.get('#spree_user_email').type('felix@herb.delivery')
        cy.get('#spree_user_password').type('test_123_TEST')
        cy.get('input:default').click()

        cy.contains('Metrc Report').click()

        cy.get('#admin-filter-toggle').click()
        let fechaDesde = dayjs().subtract(30, 'days')   
        cy.get('#_q_created_at_gt').clear()
        cy.get('#_q_created_at_gt').type(fechaDesde.format('YYYY-MM-DD'))
        cy.get('#_q_created_at_lt').clear({force: true})
        cy.get('#_q_created_at_lt').type(dayjs().format('YYYY-MM-DD')).type('{esc}')

        cy.get('#stock_location_id').select('WLA')
        //cy.get('table thead tr:first-child th:first-child').click()
        cy.get('div>button[type="submit"]').click()

        cy.xpath("//table[@id='metrics_report']/tbody/tr/td[text()='Consumer']/following-sibling::td[1]").should('be.empty')
        cy.xpath("//table[@id='metrics_report']/tbody/tr/td[text()='Consumer']/following-sibling::td[2]").should('be.empty')


        

        // const date = new Date()
        // cy.get('#_q_created_at_lt').type(date)     NOT SURE THIS STEP IS REALLY NECESSARY, AS THE APP SETS THE END DATE TO THE CURRENT DATE

        //cy.get('div[data-hook="admin_orders_index_search_buttons"] button[type="submit"]').click()



        // cy.xpath("//tr[contains(.,'pending')][1]/td[2]").click()
        // cy.get("a[href*='/profile']").click()

        // cy.get('#user_state').select('approved')
        // cy.get('div[data-hook=admin_user_edit_form_button] button[type="submit"]').click()
        // cy.get('[class="flash success"]').should('have.text', 'Account updated')
        // cy.get('#user_state').should('have.value', 'approved')
    })





})