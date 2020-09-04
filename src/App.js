import { createGlobalStyle } from "styled-components";
import React, { useState, useCallback, useEffect } from "react";

import tw from "twin.macro";

import Button from "./components/Button";
import Messenger from "./components/Messenger";
import SignIn from "./components/SignIn";
import Store from "./store";

const AppContainer = tw.div`flex flex-col mx-auto  h-screen box-border bg-white`;
const Title = tw.h1`font-bold text-xl`;
const Header = tw.div`flex justify-between items-center bg-blue-600 py-2 px-4 text-white`;
const SignOutButton = tw(Button)`flex justify-between items-center`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  }
`;

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const [session] = Store.currentUsers.all();
    if (session) {
      const currentUser = Store.users.find(session.userId);
      if (currentUser) setUser(currentUser);
    }
  }, []);

  const handleSignOut = useCallback(() => {
    Store.currentUsers
      .all()
      .forEach((session) => Store.currentUsers.destroy(session.id));
    setUser(null);
  }, []);

  return (
    <AppContainer>
      <Header>
        <Title>Messenger</Title>
        {user && (
          <>
            <span>{user.name}</span>
            <SignOutButton
              label="Sign Out"
              type="button"
              size="small"
              onClick={handleSignOut}
            />
          </>
        )}
      </Header>
      {user ? <Messenger user={user} /> : <SignIn onSignIn={setUser} />}
      <GlobalStyle />
    </AppContainer>
  );
};

export default App;
