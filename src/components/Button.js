import React from "react";
import styled from "styled-components";

import PropTypes from "prop-types";
import tw from "twin.macro";

const ButtonContainer = styled.button`
  ${tw`font-bold py-2 px-4 rounded border-0 cursor-pointer text-base`}
  ${(p) =>
    p.primary
      ? tw`bg-blue-500 hover:bg-blue-700 text-white`
      : tw`bg-white hover:bg-gray-300 text-blue-500`}
  ${(p) => p.size === "small" && tw`text-xs`}
  ${(p) => p.size === "large" && tw`text-2xl`}
`;

const Button = ({
  primary = false,
  backgroundColor,
  size = "medium",
  label,
  ...props
}) => (
  <ButtonContainer primary={primary} size={size} {...props}>
    {label}
  </ButtonContainer>
);

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
