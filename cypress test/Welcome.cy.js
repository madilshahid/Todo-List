//general checking all the tests


describe('first test', function()
  {
  it('should visit', function() {

    cy.visit('http://localhost:3000/');

    cy.get('Email').should('have.length', 0);
    cy.get('Password').should('have.length', 0);

    cy.get('#lemail').type('abc1@gmail.com');
    cy.get('#lpassword').type('abc1abc');
    cy.get('#lsignin').click();


    cy.get('#input').type('At');
    cy.get('#tadd').click();
    cy.get('#input').type('Its');
    cy.get('#tadd').click();
    cy.get('#input').type('Over');
    cy.get('#tadd').click();

    cy.get('At').should('exist');
    cy.get('#tdelete').click();
    cy.get('At').should('not.exist');
  })

})
