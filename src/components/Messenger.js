import React, { useCallback, useState } from "react";
import styled from "styled-components";

import tw from "twin.macro";

import Button from "./Button";
import Input from "./Input";
import Message from "./Message";
import Store from "../store";

const MessengerContainer = tw.div`flex flex-col space-y-6 mt-auto p-4`;
const Messages = styled.div`
  ${tw`flex flex-col space-y-4 items-start`}
`;
const Form = tw.form`flex w-full`;
const MessageInput = styled(Input)`
  ${tw`w-full py-3`}
`;
const StyledMessage = styled(Message)`
  min-width: 100px;
  max-width: 90%;
  ${(p) => p.primary && tw`self-end`}
`;

const Messenger = ({ user }) => {
  const [errors, setErrors] = useState({});
  const [messages = [], setMessages] = useState(Store.messages.all());
  const [body, setBody] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const [err, message] = Store.messages.save({ body, userId: user.id });
      if (err) return setErrors(err);
      setMessages([...messages, message]);
      setBody("");
    },
    [body, user, messages]
  );

  return (
    <MessengerContainer>
      <Messages>
        {messages.map((message) => (
          <StyledMessage key={message.id} primary={message.userId === user.id}>
            {message.body}
          </StyledMessage>
        ))}
      </Messages>
      <Form onSubmit={handleSubmit}>
        <MessageInput
          type="text"
          id="name"
          name="name"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <Button primary label="Submit" type="submit" />
      </Form>
    </MessengerContainer>
  );
};

export default Messenger;
