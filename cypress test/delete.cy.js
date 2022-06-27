//delete from list


describe('5th test', function()
  {
  it('delete test', function() {

    cy.visit('http://localhost:3000/');

    cy.get('#lemail').type('abc1@gmail.com');
    cy.get('#lpassword').type('abc1abc');
    cy.get('#lsignin').click();

    cy.get('At').should('exist');
    cy.get('#tdelete').click();
    cy.get('At').should('not.exist');
  })

})
