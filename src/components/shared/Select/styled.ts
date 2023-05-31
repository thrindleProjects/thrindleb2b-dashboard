/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';

export const SelectInput = styled.select<{ error?: boolean | string }>`
  border-color: transparent;
  /* background-color: ${(props: { error: any }) =>
    props.error ? 'rgba(252, 165, 165, 0.1)' : '#ffffff20'}; */
  box-shadow: none;
  &:focus,
  &:focus-within {
    border-color: #ffffff;
    background-color: #ffffff20;
    box-shadow: none;
  }
  background: url('https://api.iconify.design/ic/outline-arrow-drop-down-circle.svg')
      no-repeat center right 1rem / 1.5rem auto,
    ${(props: { error: any }) =>
      props.error ? 'rgba(252, 165, 165, 0.1)' : '#ffffff20'};
  content: url('https://api.iconify.design/ic/outline-arrow-drop-down-circle.svg');
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
`;

export const SelectWrapper = styled.div<{
  error?: boolean | string;
}>`
  /* &:focus-within {
    border-color: #ffffff;
    background-color: #ffffff20;
    box-shadow: none;
  }
  box-shadow: none; */

  .react-select {
    border-color: #1b1c1e10;
    background-color: ${(props: { error: any }) =>
      props.error ? 'rgba(252, 165, 165, 0.1)' : '#ffffff20'};
    box-shadow: none;
    &:focus {
      border-color: #ffffff;
      background-color: #ffffff20;
      box-shadow: none;
    }
  }

  input,
  input:focus {
    outline: none;
    border: none;
    box-shadow: none;
  }
`;
