
it("Assesrtions demo", ()=>{
    cy.visit("https://example.cypress.io/");
    cy.contains("get").click();
    cy.get("#query-btn")
        .should("contain","Button")
        .and("have.class","Button")
        .and("br.visible");
    expect(true).to.be.true;
    assert.notEqual(4,5, "not equal")
});