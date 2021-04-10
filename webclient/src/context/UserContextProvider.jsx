import React, { Component } from 'react';

const UserContext = React.createContext();

export class UserContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      token: '',
    };
  }

  setLoginResult = token => {
    this.setState({
      token,
      isLoggedIn: true
    });
    console.log("token="+token);
  };

  logout = () => {
    this.setState({
      message: '',
      isLoggedIn: false
    });
  };

  render() {
    const { children } = this.props;

    return (
      <UserContext.Provider
        value={{
          setLoginResult: this.setLoginResult,
          logout: this.logout,
          isLoggedIn: this.state.isLoggedIn,
          token: this.state.token
        }}
      >
      
        {children}
      </UserContext.Provider>
    );
  }
}

export const UserContextConsumer = UserContext.Consumer;
export default UserContextProvider;