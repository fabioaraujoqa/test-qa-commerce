// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('limparCarrinho', () => { 
    cy.get(':nth-child(1) > .card > .card-body > .btn').click()
    cy.visit('cart.html')
    cy.wait(1000)
    cy.contains('Remover').each(($btn) =>{
        cy.wrap($btn).click()
        cy.wait(1000)
    })
    cy.get('.text-center > .btn').click()
 })