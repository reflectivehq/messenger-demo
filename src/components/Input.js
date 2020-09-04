import React from "react";
import styled from "styled-components";

import PropTypes from "prop-types";
import tw from "twin.macro";

const InputContainer = styled.input`
  ${tw`shadow appearance-none border rounded px-4 py-2 leading-tight focus:outline-none focus:shadow-outline text-base`}
`;

const Input = ({ ...props }) => <InputContainer {...props} />;

Input.propTypes = {
  primary: PropTypes.bool,
  children: PropTypes.node,
};

export default Input;
