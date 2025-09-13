describe('testar sistema de saude', () => {
 it('Entrar no link cadastro', () => {
  cy.visit('http://localhost:3000/')
  cy.get('[href="/cadastro"]') .click()
  })
});
it("Preencher Nome", () => {
  cy.visit("http://localhost:3000/");
  cy.get('[href="/cadastro"]').click();
  cy.get('[data-test="inputNome"]').type("Carlos Vinicius");
});
it("Preencher o CNPJ", () => {
  cy.visit("http://localhost:3000/");
  cy.get('[href="/cadastro"]').click();
  cy.get('[data-test="inputCNPJ"]').type("548.762.565.5555-60");
});
it("Preencher o Email", () => {
  cy.visit("http://localhost:3000/");
  cy.get('[href="/cadastro"]').click();
  cy.get('[data-test="inputEmail"]').type("carlosvini@gmail.com");
});
it("Preencher a Senha", () => {
  cy.visit("http://localhost:3000/");
  cy.get('[href="/cadastro"]').click();
  cy.get('[data-test="inputSenha"]').type("12345678");
});
it("Preencher para Confimar a Senha", () => {
  cy.visit("http://localhost:3000/");
  cy.get('[href="/cadastro"]').click();
  cy.get('[data-test="inputSenhaVerificada"]').type("12345678");
});
