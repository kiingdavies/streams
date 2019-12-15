import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {//gapi is located on windows scope
      window.gapi.client
        .init({
          clientId:
            "1005627582842-q7hosdqsn9pvqmtnbvbpaqldd54da1t7.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = () => {//AuthChange helper method
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {//SignIn helper method
    this.auth.signIn();
  };

  onSignOut = () => {//SignOut helper method
    this.auth.signOut();
  };

  renderAuthButton() {//helper Method
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignIn} className="ui red google button">
          <i className="google icon" />
          Sign In With Google
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
