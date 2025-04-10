describe(`Blog list page e2e test`, () => {
  it("display a list of blog posts", () => {
    cy.visit("/");
    cy.get('[data-cy="blog-item"]').should("have.length.greaterThan", 0);
  });
  it("navifate to detail blog", () => {
    cy.visit("/");
    cy.get('[data-cy="blog-item"]').first().find("a").click();
    cy.url().should("include", "/blog/");
  });
});
