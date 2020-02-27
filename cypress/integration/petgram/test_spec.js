/* global cy, describe, it */

describe('Petgram', () => {
  it('está funcionando', () => {
    cy.visit('/')
  })

  it('permite navegar a una categoría y ver fotografías', () => {
    cy.visit('/pet/1')
    cy.wait(25)
    cy.get('article')
  })

  it('permite navegar mediante navbar hasta la "home" de la app', () => {
    cy.visit('/pet/1')
    cy.wait(25)
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })

  it('muestra el formulario de registro e inicio de sesión a los usuarios no autenticados cuando navegan a "favs"', () => {
    cy.visit('/favs')
    cy.get('form', { time: 100 }).should('have.length', 2)
  })
})
