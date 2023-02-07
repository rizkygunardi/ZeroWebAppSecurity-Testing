/// <reference types="cypress" />

describe("Validate Searchbox", () => {
  beforeEach("visit", () => {
    cy.visit("http://zero.webappsecurity.com/index.html");
  });
  it("visit website", () => {
    cy.visit("http://zero.webappsecurity.com/index.html");
    cy.url().should("include", "index.html");
  });

  it("Mencari searchbar zero (personal banking)", () => {
    cy.searchZero();
    cy.get("a")
      .contains("Zero - Personal Banking - Loans - Credit Cards")
      .click();
    cy.get("h4")
      .contains("Online Banking")
      .should("include.text", "Online Banking");
  });

  it("Mencari searchbar zero (contact us)", () => {
    cy.searchZero();
    cy.get("a").contains("Zero - Contact Us").click();
    cy.get("#feedback-title")
      .contains("Feedback")
      .should("include.text", "Feedback");
  });

  it("Mencari searchbar zero (help)", () => {
    cy.searchZero();
    cy.get("a").contains("Zero - Help").click();
    cy.get(".page-header")
      .contains("Help Topics")
      .should("include.text", "Help Topics");
  });
});
