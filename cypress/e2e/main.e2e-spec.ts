describe('E2E Test', () => {
  it('should visit', () => {
    cy.visit('/');
    expect(200).equals(200);
  });
});
