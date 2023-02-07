/// <reference types="cypress" />

describe('Tugas Navbar', () => {
	beforeEach(() => {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.url().should('include', 'index.html')
	})

	it('Menampilkan online banking content', () => {
		cy.contains('Online Banking').click()
		cy.url().should('include', 'online-banking.html')
		cy.get('h1').should('be.visible')
	})

	it('Menampilkan halaman feedback content', () => {
		cy.contains('Feedback').click()
		cy.url().should('include', 'feedback.html')
		cy.get('.page-header').should('contain', 'Feedback')
	})

	it('Menampilkan halaman display content', () => {
		cy.contains('Zero Bank').click()
		cy.url().should('include', 'index.html')
		cy.get('.nav').should('be.visible')
		cy.get('h4').should('contain', 'Online Banking')
	})
})
