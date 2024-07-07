/// <reference types='cypress' />

describe('Teste API - Funcionalidade: Usuário', () => {

    let token
    before(() => {
        cy.token('admin@admin.com', 'admin').then((tokenGerado) =>{
            token = tokenGerado
        })
    });
    
    it('GET - Deve listar usuários com sucesso e validar contrato', () => {
        cy.api({
            method: 'GET', 
            url: 'api/users'
        }).then((response) =>{
            expect(response.status).to.equal(200)
            expect(response.body[0]).to.have.property('id').that.is.a('number')
            expect(response.body[0]).to.have.property('name').that.is.a('string')
            expect(response.body[0]).to.have.property('email').that.is.a('string')
            //expect(response.body[0]).to.have.property('isAdmin').that.is.a('number')
        })
    });

    it('POST - Deve validar cadastro de um usuário com sucesso', () => {
        let email = Date.now() + '@teste.com'
        cy.api({
            method: 'POST', 
            url: 'api/users', 
            body: {
                "name": "Teste Automatizado",
                "email": email,
                "password": "Teste@123",
                "isAdmin": false
              }
        }).then((response) =>{
            expect(response.status).to.equal(201)
            expect(response.body.message).to.contain('Usuário criado com sucesso.')
        })  
    });

    it('PUT - Deve atualizar um usuário com sucesso', () => {
        let email = `${Date.now()}@teste.com`
        cy.cadastrarUsuarioApi('nome para alterar' , email, 'Teste@123', false).then((id) =>{
            let emailPut = `${Date.now()}@teste_alterado.com`
            cy.api({
                method: 'PUT', 
                url : `api/users/${id}` ,  
                headers: {
                    Authorization: token
                },
                body: {
                    "name": "nome alterado",
                    "email": emailPut,
                    "password": "Teste@123",
                    "isAdmin": true
                  }
            }).then((response) =>{
                expect(response.status).to.equal(200)
                expect(response.body.message).to.contain('Usuário atualizado com sucesso.')
            })
        })
    });

    it('DELETE - Deve deletar um usuário com sucesso', () => {
        cy.cadastrarUsuarioApi('Para deletar' , 'email@delete.com', 'Teste@123', false).then((id) =>{
            cy.api({
                method: 'DELETE', 
                url: 'api/users/' + id,
                headers: {
                    Authorization: token
                }
            }).then((response) =>{
                expect(response.status).to.equal(200)
                expect(response.body.message).to.contain('Usuário deletado com sucesso.')
            })
        })
    });
});