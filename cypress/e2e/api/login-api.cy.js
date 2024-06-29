/// <reference types='cypress' />

describe("Teste de API - Funcionalidade Login", () => {

  it("Deve fazer login sucesso", () => {
    cy.api({
      method: "POST",
      url: "http://localhost:3000/api/login",
      body: {
        email: "admin@admin.com",
        password: "admin",
      },
    }).then((response) =>{
        expect(response.status).equal(200)
        expect(response.body).to.have.property('token')
        expect(response.duration).lessThan(100)
    })
  });
});

