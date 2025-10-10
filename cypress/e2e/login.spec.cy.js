import userData from "../fixtures/users/user-data.json"


describe('orange hrm test', () => {
  const selectorsList = {
    usernameField :'[name="username"]',
    passwordField : '[name="password"]',
    loginButton : '.oxd-button',
    dashboardGrid : '.orangehrm-dashboard-grid',
    wrongCredentialAlert : '.oxd-alert',
    
  }
 
  it('login - sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    /*cy.get(selectorsList.dashboardGrid).should('be.visible')*/
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })
  it('login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
    
  })
})