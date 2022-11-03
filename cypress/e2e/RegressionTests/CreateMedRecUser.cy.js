const dayjs = require('dayjs')

describe('Herb',()=>{
   

    it('Create Medical Recommendation User',()=>{
        cy.visit('/store')
        cy.get('#ageGateModal div:nth-child(1) > button').click()
        // cy.get('#ship-address').type(`1000 Vin Scully Ave, 90090`)
        // cy.get('div.pac-item:first-child').should("be.visible").click() // Maps tooltip
        cy.get('[class="btn btn-light btn-lg btn-block"]').click({force: true})

        cy.get(':nth-child(3) > .nav-link').click()

        cy.get("li a[href='/store/signup']").click()
        
        const timestamp=dayjs().format('YYYYMMDDHHmmss')

        var firstName = 'Felix'
        cy.get('#spree_user_first_name').type(firstName)
        cy.get('#spree_user_last_name').type(`MedRec${timestamp}`)

        cy.get('#birthdaypicker').type('01/01/1980')
        cy.get('#spree_user_email').type(`felix+medrec${timestamp}@herb.delivery`)
        //cy.get('#spree_user_country_code').click()
        cy.get('#spree_user_country_code').select('+52')
        var phone = Math.floor(1000000000 + Math.random() * 9000);
        console.log(phone);
        cy.get('#spree_user_phone').type(phone)
        
        const timestamp2=dayjs().format('YYYYMMDDHH')
        cy.get('#spree_user_phone').type(`$timestamp2`)
        cy.get('#spree_user_password').type('test_123_TEST')

        cy.get('#spree_user_user_type_medical_card').click()
        //cy.get('#spree_user_card_id_selfie').type('/Users/felixislava/Downloads/example.jpeg', {force:true})
        cy.get('#spree_user_card_id_selfie').attachFile('example.jpeg', { subjectType: 'drag-n-drop'});
        cy.get('#spree_user_card_id_picture').attachFile('example2.jpg', { subjectType: 'drag-n-drop'});
        cy.get('#expirationdatepicker').type('12122026')
        cy.get('#spree_user_medical_card_picture').attachFile('example3.jpg', { subjectType: 'drag-n-drop'});
        
        var MedRecNumber = Math.floor(100000000 + Math.random() * 9000);
        console.log(MedRecNumber);
        cy.get('#spree_user_medical_card_number').type(MedRecNumber)
        cy.get('#medicalcardexpirationdatepicker').type('12122026')
        cy.get('.custom-control-label').click()
        
        cy.get('[type="submit"][value="Sign Up"]').click()

        cy.get('a[data-toggle=dropdown]').should('have.text', `Hello, ${firstName}`)

        //cy.get('.nav-link dropdown-toggle active').should('include', 'Hello, Felix')
            
    
    })
})