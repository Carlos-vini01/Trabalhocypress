describe('testar sistema de saude', () => {
  it('Entrar no link cadastro', () => {
    cy.visit('http://localhost:300/')
    cy.get('[href="/cadastro"]') .click()
  })
})