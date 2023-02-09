describe('Demoblaze page', () => {
  let user;

  beforeEach(() => {
    cy.visit('/')
    cy.task('generateUser').then(generateUser => {
      user = generateUser;
    });
  });

  it('Should sucsessfully sign in', () => {
    cy.get('#signin2')
      .click();
    cy.wait(500)
      .get('#sign-username')
      .type(user.username);
    cy.get('#sign-password')
      .type(user.password);
    cy.contains('[type="button"]', 'Sign up')
      .click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Sign up successful.');
    });
  });
  
  it('Should sucsessfully log in', () => {
    cy.get('#login2')
      .click();
    
    cy.wait(500).get('#loginusername')
      .type('mamkintester17');
    
    cy.get('#loginpassword')
      .type(user.password);
    
    cy.contains('[type="button"]', 'Log in')
      .click();
    
    cy.wait(3000).get('#nameofuser')
      .should('contain.text', 'Welcome mamkintester17');
  });

  it('should add Samsung galaxy s6 to cart', () => {
    cy.contains('.hrefch', 'Samsung galaxy s6')
      .click();
    cy.contains('.btn-success', 'Add to cart')
      .click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added.');
    });
  });
});