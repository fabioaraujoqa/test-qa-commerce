/// <reference types='cypress' />

describe('Funcionalidade: Produto', () => {

    beforeEach(() => {
        cy.visit('')
        cy.intercept('GET', '/api/carrinho/1', {
            statusCode: 200,
            body: []
          }).as('getCartEmpty');
          
          // Visita a página do carrinho para simular o carrinho vazio
          //cy.visit('/cart.html');
    });

    it('Deve vsitar a página do produto pelo nome', () => {
        cy.contains('Produto 6').click()
        cy.url().should('include', 'product.html')
    });

    it('Deve vsitar a página do produto clicando na imagem', () => {
        //cy.get('.card-img-top').eq(3).click()
        //cy.get('.card-img-top').first().click()
        cy.get('.card-img-top').last().click()
        cy.url().should('include', 'product.html')
    });

    it('limpar carrinho via intercept', () => {
        cy.get('#quantity-1').type(10)
        cy.get(':nth-child(1) > .card > .card-body > .btn').click()
        cy.wait(5000)
        cy.intercept('GET', '/api/cart', {
            statusCode: 200,
            body: [] 
          }).as('getCart');
          cy.reload()
    });

    it('Deve adicionar ao carrinho pela página do produto', function() {
        cy.get('.card-img-top').last().click()
        cy.get('#product-quantity').clear().type(10)
        cy.get('#add-to-cart').click({force:true})
        cy.get('#cart-count').should('have.text' , '10')
    });
    
});
