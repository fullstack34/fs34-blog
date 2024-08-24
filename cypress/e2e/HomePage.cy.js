
function tagsMock() {
    return [
        {
            id: 1,
            name: "Python",
            prefix: "Backend"
        },
        {
            id: 2,
            name: "HTML",
            prefix: "Frontend"
        }
    ]
}


describe('Home page', () => {

    beforeEach(() => {
        cy.intercept('/tags', tagsMock());
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

    it("Verificando lista de posts", () => {

        let postTitleMock = [
            "Aprenda a centralizar uma div",
            "Como fazer uma lista com CSS Grid",
            "Como fazer um formulário com HTML5",
            "Como fazer um slideshow com JavaScript",
            "Como usar SVG com CSS",
            "Como fazer um chat com WebSocket",
            "Como fazer um CRUD com PHP",
            "Como fazer um gerador de PDF com PHP"
        ];

        cy.get('[data-cy="post-title"]')
            .should('have.length', 8)
            .each((item, index) => {
                cy.wrap(item).should('have.text', postTitleMock[index]);
            })

    });

    it("Verificando lista de tags", () => {

        cy.get('[data-cy="tag-title"]')
            .should('have.length', 2)
            .each((item, index) => {
                cy.wrap(item).should('have.text', tagsMock()[index].name)
            })

    })
})