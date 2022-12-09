describe('Bstack Demo', () => {
  it('Filtering for apple devices', () => {
    cy.visit('https://www.bstackdemo.com/')
    cy.contains('Apple').click()
    cy.contains('Add to cart').click()
  })
})