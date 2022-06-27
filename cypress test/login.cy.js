//login to your account

describe('2nd test', function()
 {
    it('login test'), function(){

      cy.visit('http://localhost:3000/');

      cy.get('#lemail').type('abc1@gmail.com');
      cy.get('#lpassword').type('abc1abc');
      cy.get('#lsignin').click();
     
    }

  })
  