import React, { useCallback } from "react";
import styled from "styled-components";

import tw from "twin.macro";

import Button from "./components/Button";
import Input from "./components/Input";
import Message from "./components/Message";

const HorizontalList = tw.div`flex space-x-2 items-center`;
const VerticalList = tw.div`flex flex-col space-y-2 items-start`;
const Title = tw.h1`text-gray-900 font-bold text-xl`;
const Form = tw.form``;

const AppContainer = styled.div`
  ${tw`p-6 flex flex-col space-y-6 mx-auto max-w-6xl`}
`;
const App = () => {
  const messages = [
    "Lorem modi nemo aut in tenetur Corrupti autem quisquam accusamus cumque cum Minima reiciendis dignissimos consectetur reiciendis nam? Maxime vitae odio fugit molestiae libero Quasi atque officiis ut ea perspiciatis.",
  ];
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log("Submit");
  }, []);
  return (
    <AppContainer>
      <Title>Messenger</Title>
      {messages.map((message) => (
        <Message primary>{message}</Message>
      ))}
      <HorizontalList>
        <Form onSubmit={handleSubmit}>
          <Input type="text" />
          <Button primary label="Submit" type="submit" />
        </Form>
      </HorizontalList>
    </AppContainer>
  );
};

export default App;
