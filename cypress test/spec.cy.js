//Add data to list


describe('4th test', function()
 {
    it('add data test'), function(){

      cy.visit('http://localhost:3000/');

      cy.get('#lemail').type('abc1@gmail.com');
      cy.get('#lpassword').type('abc1abc');
      cy.get('#lsignin').click();
      
      cy.get('#input').type('At');
      cy.get('#tadd').click();
      cy.get('#input').type('last');
      cy.get('#tadd').click();
      cy.get('#input').type('its done');
      cy.get('#tadd').click();

      
    }
  })    