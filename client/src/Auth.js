import auth0 from 'auth0-js';

//TODO: Add API to retrieve properties for domain and client
export default class Auth {



  /*
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {clientresponse:''};
  }

  componentDidMount() {
      this.callAuthClient()
      .then(res => this.setState({ clientresponse: res.express }))
      .catch(err => console.log(err));
  }



  callAuthClient = async () => {
    const response = await fetch('/authprops/client');
    const body = await response.json();
    console.log('success');

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
*/


callAuthClient = async () => {
  const response = await fetch('/authprops/client');
  const body = await response.json();
  console.log('success');

  if (response.status !== 200) throw Error(body.message);

  return body;
};

  login(){
    this.auth0.authorize();
  }

  auth0 = new auth0.WebAuth({
    domain: 'questline.auth0.com',
    clientID: 'cEM2b5H7QarjhJnJabYstUiuJIE3dVo7',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });



  



  }