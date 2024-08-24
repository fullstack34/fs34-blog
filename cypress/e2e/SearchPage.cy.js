
describe('Search page', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173');
  });

  it("Campo de busca", () => {
    cy.get('form input')
      .should('have.length', 1)
      .type("Aprenda {enter}");
  });
})