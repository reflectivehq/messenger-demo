import React from "react";
import styled from "styled-components";

import PropTypes from "prop-types";
import tw from "twin.macro";

const MessageContainer = styled.div`
  ${tw`p-4 rounded-lg border-0 text-base`}
  ${(p) =>
    p.primary
      ? tw`bg-blue-500 hover:bg-blue-600 text-white`
      : tw`bg-gray-300 hover:bg-gray-400 text-black`}
`;

const Message = ({ primary = false, children, ...props }) => (
  <MessageContainer primary={primary} {...props}>
    {children}
  </MessageContainer>
);

Message.propTypes = {
  primary: PropTypes.bool,
  children: PropTypes.node,
};

export default Message;
