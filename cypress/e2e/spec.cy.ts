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

context("Meta tag generation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");

    cy.get(".form-group")
      .find("label")
      .contains("Title")
      .next()
      .type("{selectall}{backspace}My website title");

    cy.get(".form-group")
      .find("label")
      .contains("Description")
      .next()
      .type("{selectall}{backspace}My website description");

    cy.get(".form-group")
      .find("label")
      .contains("Website URL")
      .next()
      .type("{selectall}{backspace}http://localhost:3000");

    cy.get(".form-group")
      .find("label")
      .contains("Image URL")
      .next()
      .type("{selectall}{backspace}http://localhost:3000/mypicture.jpg");

    cy.get("a").contains("Advanced").click();

    cy.get(".form-group")
      .find("label")
      .contains("Site name")
      .next()
      .type("{selectall}{backspace}My website site name");

    cy.get(".form-group")
      .find("label")
      .contains("Theme color")
      .next()
      .invoke("val", "#000000")
      .trigger("change");

    cy.get(".form-group")
      .find("label")
      .contains("Locale")
      .next()
      .select("eu_ES");
  });

  describe("Complete the form", () => {
    it("Website", () => {
      cy.get("a").contains("Generate").click();

      cy.get("code")
        .children()
        .should(($code) => {
          expect($code).to.have.text(
            '<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#3b82f6"><title>My website title</title><meta name="title" content="My website title"><meta name="robots" content="index, follow"><meta name="description" content="My website description"><meta property="og:type" content="website"><meta property="og:url" content="http://localhost:3000"><meta property="og:title" content="My website title"><meta property="og:description" content="My website description"><meta property="og:image" content="http://localhost:3000/mypicture.jpg"><meta property="og:locale" content="eu_es"><meta property="og:site_name" content="My website site name"><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url" content="http://localhost:3000"><meta property="twitter:title" content="My website title"><meta property="twitter:description" content="My website description"><meta property="twitter:image" content="http://localhost:3000/mypicture.jpg">'
          );
        });
    });

    it("Article", () => {
      cy.get("a").contains("Basic").click();

      cy.get(".form-group")
        .find("label")
        .contains("Object type")
        .next()
        .select("Article");

      cy.get("a").contains("Advanced").click();

      cy.get(".form-group")
        .find("label")
        .contains("Published time")
        .next()
        .type("2022-01-01")
        .trigger("change");

      cy.get(".form-group")
        .find("label")
        .contains("Modified time")
        .next()
        .type("2022-01-02")
        .trigger("change");

      cy.get(".form-group")
        .find("label")
        .contains("Expiration time")
        .next()
        .type("2022-01-03")
        .trigger("change");

      cy.get("a").contains("Generate").click();

      cy.get("code")
        .children()
        .should(($code) => {
          expect($code).to.have.text(
            '<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#3b82f6"><title>My website title</title><meta name="title" content="My website title"><meta name="robots" content="index, follow"><meta name="description" content="My website description"><meta property="og:type" content="article"><meta property="article:published_time" content="2022-01-01"><meta property="article:modified_time" content="2022-01-02"><meta property="article:expiration_time" content="2022-01-03"><meta property="og:url" content="http://localhost:3000"><meta property="og:title" content="My website title"><meta property="og:description" content="My website description"><meta property="og:image" content="http://localhost:3000/mypicture.jpg"><meta property="og:locale" content="eu_es"><meta property="og:site_name" content="My website site name"><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url" content="http://localhost:3000"><meta property="twitter:title" content="My website title"><meta property="twitter:description" content="My website description"><meta property="twitter:image" content="http://localhost:3000/mypicture.jpg">'
          );
        });
    });

    it("Profile", () => {
      cy.get("a").contains("Basic").click();

      cy.get(".form-group")
        .find("label")
        .contains("Object type")
        .next()
        .select("Profile");

      cy.get("a").contains("Advanced").click();

      cy.get(".form-group")
        .find("label")
        .contains("Profile first name")
        .next()
        .type("My first name");

      cy.get(".form-group")
        .find("label")
        .contains("Profile last name")
        .next()
        .type("My last name");

      cy.get(".form-group")
        .find("label")
        .contains("Profile username")
        .next()
        .type("My username");

      cy.get(".form-group")
        .find("label")
        .contains("Profile gender")
        .next()
        .select("Female");

      cy.get("a").contains("Generate").click();

      cy.get("code")
        .children()
        .should(($code) => {
          expect($code).to.have.text(
            '<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#3b82f6"><title>My website title</title><meta name="title" content="My website title"><meta name="robots" content="index, follow"><meta name="description" content="My website description"><meta property="og:type" content="profile"><meta property="profile:first_name" content="My first name"><meta property="profile:last_name" content="My last name"><meta property="profile:username" content="My username"><meta property="profile:gender" content="female"><meta property="og:url" content="http://localhost:3000"><meta property="og:title" content="My website title"><meta property="og:description" content="My website description"><meta property="og:image" content="http://localhost:3000/mypicture.jpg"><meta property="og:locale" content="eu_es"><meta property="og:site_name" content="My website site name"><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url" content="http://localhost:3000"><meta property="twitter:title" content="My website title"><meta property="twitter:description" content="My website description"><meta property="twitter:image" content="http://localhost:3000/mypicture.jpg">'
          );
        });
    });
  });
});
