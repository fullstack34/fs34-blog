
describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173');
  });

  it('Mudando cores para o dark theme', () => {
    cy.get('#fa-sun')
      .should('have.length', 1)
      .click();

    cy.get('#fa-moon')
      .should('have.length', 1)
      .click();
  })

  it("Campo de busca", () => {
    cy.get('form input')
      .should('have.length', 1)
      .type("Aprenda {enter}");

  })
})