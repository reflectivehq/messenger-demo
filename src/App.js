import React, { useCallback, useState } from "react";

import tw from "twin.macro";

import Button from "./components/Button";
import Input from "./components/Input";
import Message from "./components/Message";
import Store from "./store";

const AppContainer = tw.div`p-6 flex flex-col space-y-6 mx-auto max-w-6xl`;
const HorizontalList = tw.div`flex space-x-2 items-center`;
const VerticalList = tw.div`flex flex-col space-y-2 items-start`;
const Title = tw.h1`text-gray-900 font-bold text-xl`;
const Form = tw.form``;

const App = () => {
  const [messages = [], setMessages] = useState(Store.messages.all());

  const getMessages = useCallback(() => {
    setMessages(Store.messages.all());
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const [err, message] = Store.messages.save({ body: "Blah", userId: "1" });
    setMessages([...messages, message]);
  }, []);

  return (
    <AppContainer>
      <Title>Messenger</Title>
      {messages.map((message) => (
        <Message primary>{message.body}</Message>
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
