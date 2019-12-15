import React from "react";

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {//gapi is located on windows scope
      window.gapi.client.init({
        clientId:
          "1005627582842-q7hosdqsn9pvqmtnbvbpaqldd54da1t7.apps.googleusercontent.com",
        scope: "email"
      }).then(()=> {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get()})
      })
    });
  }

  renderAuthButton(){ //helper Method
    if(this.state.isSignedIn === null){
        return <div>I dont know if we are signed in</div>
    }else if(this.state.isSignedIn){
        return <div>I am signed in</div>
    }else {
        return <div>I am not signed in</div>
    }
  }
  render() {
  return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
