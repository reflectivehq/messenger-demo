import React, { useState, useCallback } from "react";
import styled from "styled-components";

import PropTypes from "prop-types";
import tw from "twin.macro";

import Button from "./Button";
import Input from "./Input";
import Store from "../store";

const SignInContainer = tw.div`flex flex-col mx-auto max-w-4xl`;
const Form = tw.form`h-screen flex flex-col space-y-6 justify-center`;
const FormGroup = tw.div`flex flex-col`;
const Label = tw.label`text-gray-900 font-bold`;
const Errors = tw.ul`list-none m-0 p-0`;
const Error = tw.li`text-red-600`;
const SubmitButton = styled(Button)`
  ${tw`w-full`}
`;

const SignIn = ({ onSignIn }) => {
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const handleSubmit = useCallback(
    (e) => {
      let err;
      e.preventDefault();
      let [user] = Store.users.where({ name });

      if (!user) {
        [err, user] = Store.users.save({ name });
      }

      if (err) return setErrors(err);

      Store.currentUsers.save({
        userId: user.id,
      });

      setName("");

      return onSignIn(user);
    },
    [name, onSignIn]
  );
  return (
    <SignInContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Enter your name</Label>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name && (
            <Errors>
              {errors.name.map((err) => (
                <Error key={`name-${err}`}>{err}</Error>
              ))}
            </Errors>
          )}
        </FormGroup>
        <SubmitButton primary label="Sign In" />
      </Form>
    </SignInContainer>
  );
};

SignIn.propTypes = { onSignIn: PropTypes.func };

export default SignIn;
