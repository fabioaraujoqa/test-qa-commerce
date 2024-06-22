/// <reference types='cypress' />
import CheckoutPage from "../../support/pages/checkout-page";
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Checkout', () => {
    beforeEach(() => {
        CheckoutPage.visitarUrlCheckout()        
    });

    it('Deve fazer checkout com sucesso com usuário comum', () => {
        CheckoutPage.preencherCheckout('Fabio', 'Araujo', 'Av. Paulista', '1000', '12345678', '111234567890', 'fabio@tes.com')
        cy.get('h4').should('contain', 'Obrigado pelo seu pedido Fabio.')
    });

    it('Deve fazer checkout com sucesso com usuário Logado com email dinamico', () => {
        var email = Date.now() + '@teste.com'
        CheckoutPage.preencherCheckoutCriarConta('Marcia', 'Marrocos', 'Av. Paulista', '1000', '12345678', '111234567890', email, 'Teste@123', 'Teste@123')
        cy.get('h4').should('contain', 'Obrigado pelo seu pedido Marcia.')
    });

    it('Deve fazer checkout com sucesso com usuário Logado com email Faker', () => {
        var nome = faker.person.firstName()
        var sobrenome = faker.person.lastName()
        CheckoutPage.preencherCheckoutCriarConta(nome, sobrenome , 'Av. Paulista', '1000', '12345678', '111234567890', faker.internet.email(), 'Teste@123', 'Teste@123')
        cy.get('h4').should('contain', 'Obrigado pelo seu pedido ' + nome )
    });

});