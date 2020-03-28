function getAccessToken(authorizationCode) {
    return fetch(TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        code: authorizationCode,
        client_id: this.props.clientId,
        client_secret: this.props.clientSecret,
        redirect_uri: this.props.redirectUri
      })
    })
      .then(response => response.json())
      .catch(err => this.props.onFailure(err))
};

module.exports = getAccessToken;