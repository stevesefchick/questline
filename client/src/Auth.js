import auth0 from 'auth0-js';

//TODO: Add API to retrieve properties for domain and client
export default class Auth {
    auth0 = new auth0.WebAuth({
      domain: process.env.AUTHCLIENTDOMAIN,
      clientID: process.env.AUTHCLIENTID,
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid'
    });
  
    login() {
      this.auth0.authorize();
    }
  }