class LoginPage {

    //Elementos
    campoEmail() { return cy.get('#email') }
    campoSenha() { return cy.get('#password') }
    botaoEntrar() { return cy.get('.btn') }

    //Funções ou Métodos

    visitarUrlLogin() {
        cy.visit('login.html')
    }

    preencherLogin(email, senha) {
        this.campoEmail().clear().type(email)
        this.campoSenha().clear().type(senha)
        this.botaoEntrar().click()
    }

    recuperSenha() {
        cy.log('qualquer coisa')
    }

}

export default new LoginPage