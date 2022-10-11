/// <reference types="cypress" />

context("Conditional form items", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("By objectType", () => {
    it("Website", () => {
      cy.get("a").contains("Advanced").click();
      cy.get(".form-group")
        .find("label")
        .should(($label) => {
          expect($label).to.have.length(3);
        })
        .then(($label) => {
          expect($label).to.not.include.text("Published time");
          expect($label).to.not.include.text("Profile gender");
        });
    });

    it("Article", () => {
      cy.get("label").contains("Object type").next().select("Article");
      cy.get("a").contains("Advanced").click();
      cy.get(".form-group")
        .find("label")
        .should(($label) => {
          expect($label).to.have.length(6);
        })
        .then(($label) => {
          expect($label).to.include.text("Published time");
          expect($label).to.not.include.text("Profile gender");
        });
    });

    it("Profile", () => {
      cy.get("label").contains("Object type").next().select("Profile");
      cy.get("a").contains("Advanced").click();
      cy.get(".form-group")
        .find("label")
        .should(($label) => {
          expect($label).to.have.length(7);
        })
        .then(($label) => {
          expect($label).to.not.include.text("Published time");
          expect($label).to.include.text("Profile gender");
        });
    });
  });
});
