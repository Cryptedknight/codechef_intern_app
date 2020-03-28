import React, { Component } from 'react'
import CodechefLogin from 'react-codechef-login'
//import './login.css'

const responseCodechef = response => {
  console.log(response)
}

class Login extends Component {
  render() {
    return (
      <div className='Login'>
        <CodechefLogin
          clientId= 'b72bb32332f46d8452d8b71ad032dc00'
          clientSecret='52a4f0b1db1a39f4555352400fcd1cd6'
          redirectUri="http://localhost:3000/"
          state='state-string'
          onSuccess={responseCodechef}
          onFailure={responseCodechef}
        />
      </div>
    )
  }
}

export default Login;