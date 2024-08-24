
describe('Login page', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/login');
  });

  it("Verifiar se campos existem", () => {
    
    cy.get('[data-cy="email"]')
      .should('have.length', 1)
      .and("have.attr", 'name')

    cy.get('[data-cy="password"]')
      .should('have.length', 1);

    cy.get('[data-cy="submit"]')
      .should('have.length', 1);

  });

  it("Validando inputs", () => {

    cy.get('[data-cy="submit"]').click();
    cy.contains("Email é um campo obrigatorio")

  })
})