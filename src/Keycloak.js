import Keycloak from 'keycloak-js'
const keycloak = new Keycloak({
  url: 'http://localhost:8080/',
  realm: 'Assessment',
  clientId: 'Testroomclient',
})
export default keycloak
