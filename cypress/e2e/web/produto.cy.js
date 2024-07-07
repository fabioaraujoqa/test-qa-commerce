/// <reference types='cypress' />

describe('Funcionalidade: Produto', () => {

    beforeEach(() => {
        cy.visit('')
        cy.limparCarrinho()
    });

    it('Deve vsitar a página do produto pelo nome', () => {
        cy.contains('Xícara Const').click()
        cy.url().should('include', 'product.html')
    });

    it('Deve vsitar a página do produto clicando na imagem', () => {
        //cy.get('.card-img-top').eq(3).click()
        //cy.get('.card-img-top').first().click()
        cy.get('.card-img-top').last().click()
        cy.url().should('include', 'product.html')
    });

    it('Deve adicionar ao carrinho pela página do produto', function() {
        cy.get('.card-img-top').last().click()
        cy.get('#product-quantity').clear().type(10)
        cy.get('#add-to-cart').click({force:true})
        cy.get('#cart-count').should('have.text' , '100')
    });
    
});
