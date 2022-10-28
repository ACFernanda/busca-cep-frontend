/// <reference types="cypress" />

const URL = "http://localhost:3000"

describe("search CEP", () => {
  it("should show CEP address for correct CEP", () => {
    const cep = "22620061"

    cy.visit(`${URL}/`);
    cy.get("#cep").type(cep)

    cy.intercept("POST", "/address").as("postCEP");
    cy.get("#submit").click();
    cy.wait("@postCEP");

    cy.contains("Barra da Tijuca").should("be.visible");
  });

  it("should clean CEP input", () => {
    const cep = "22620061"

    cy.visit(`${URL}/`);
    cy.get("#cep").type(cep)
    cy.get(".clear").click();

    cy.get("#cep").should("be.empty");
  });

  it("should show alert for invalid CEP", () => {
    const cep = "22222222"

    cy.visit(`${URL}/`);
    cy.get("#cep").type(cep)

    cy.intercept("POST", "/address").as("postCEP");
    cy.get("#submit").click();
    cy.wait("@postCEP");

    cy.on("window:alert", (text) => {
      expect(text).to.contains("Por favor, tente novamente. CEP não encontrado.");
    });
  });
});