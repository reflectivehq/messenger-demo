import React from "react";

import PropTypes from "prop-types";
import tw from "twin.macro";

const SelectContainer = tw.div`relative text-black`;
const SelectInput = tw.select`block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`;

const ChevronContainer = tw.div`pointer-events-none absolute right-0 inset-y-0 top-0 w-4 py-4 pr-2`;

const Select = ({ options, ...props }) => (
  <SelectContainer>
    <SelectInput {...props}>
      <option>Select a value</option>
      {options.map(([value, label]) => (
        <option value={value}>{label}</option>
      ))}
    </SelectInput>
    <ChevronContainer>
      <svg
        className="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </ChevronContainer>
  </SelectContainer>
);

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};

export default Select;
