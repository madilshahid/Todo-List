//register new user test

describe('3rd test', function()
 {
    it('register test'), function(){

      cy.visit('http://localhost:3000/');

      cy.get('#lcreate').click();

      cy.get('#remail').type('abc7@gmail.com');
      cy.get('#rcemail').type('abc7@gmail.com');
      cy.get('#rpassword').type('abc7abc');
      cy.get('#rcpassword').type('abc7abc');
      cy.get('#rcreate').click();
    

    }

    

  })
  