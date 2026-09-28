Cypress.Commands.add('setupUsuarioAPI', (usuario) => {
  cy.env(['apiUrl']).then(({ apiUrl }) => {
    cy.request({
      method: 'POST',
      url: `${apiUrl}/usuarios`,
      body: usuario,
      failOnStatusCode: false
    });
  });
});