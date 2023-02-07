/// <reference types="cypress" />

describe("Fill out the pay bill page", () => {
  it("Mengecek website", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.url().should("include", "login.html");
  });

  it("Pay Bill", () => {
    cy.fixture("user").then((user) => {
      cy.visit("http://zero.webappsecurity.com/login.html");
      const username = user.username;
      const password = user.password;

      cy.login(username, password);

      cy.get("#user_remember_me").click();
      cy.get(".form-actions").click();

      //Masuk kehalaman pay bills
      cy.get("#pay_bills_tab").click().should("include.text", "Pay Bills");

      // //mengisi form
      cy.form();

      // //klik pay
      cy.get("#pay_saved_payees").click();
      cy.get("#alert_container").should(
        "include.text",
        "The payment was successfully submitted."
      );
    });
  });
  //it("Masuk ke halaman pay bills", () => {});
  //it("Mengisi form", () => {});
  //it("klik pay", () => {})
});
