/// <reference types="cypress" />

describe("Validate Login & Logout", () => {
  beforeEach(() => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.url().should("include", "login.html");
  });

  it("Mengecek Halaman Website", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.url().should("include", "login.html");
  });

  it("Mengecek data login salah (invalid)", () => {
    //Invalid Data
    cy.invalidLogin();

    //Menampilkan pesan error
    cy.get(".alert-error")
      .should("be.visible")
      .and("contain", "Login and/or password are wrong.");
  });

  it("Mengecek data login dan logout yang benar (Valid)", () => {
    cy.fixture("user").then((user) => {
      const username = user.username;
      const password = user.password;

      //Data Login
      cy.login(username, password);
      cy.get('input[name="submit"]').click();
    });

    cy.get("ul.nav-tabs").should("be.visible");
    cy.get(".brand").contains("Zero Bank");

    //Keluar Akun
    cy.contains("username").click();
    cy.get("#logout_link").click();
    cy.get(".nav").should("be.visible");
  });
});
