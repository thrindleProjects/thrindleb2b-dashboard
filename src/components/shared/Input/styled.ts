/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from 'styled-components';

export const MainInput = styled.input<{
  error?: boolean | string;
  type: string;
  value: string | number | readonly string[] | undefined;
}>`
  border-color: transparent;
  border-radius: 8px;
  background-color: ${(props: { error: any }) =>
    props.error ? 'rgba(252, 165, 165, 0.1)' : '#F9F9F9'};
  box-shadow: none;
  &:focus {
    border-color: white;
    background-color: #f9f9f9;
    box-shadow: none;
    border-radius: 8px;
  }
  ${(props: { type: string }) =>
    props.type === 'date' &&
    css`
      -webkit-appearance: none;
      -moz-appearance: none;
      position: relative;
    `}
  ${(props: { error: any; value: string | any[] }) =>
    (props.error ||
      !props.value ||
      (props.value &&
        typeof props.value === 'string' &&
        !props.value.length)) &&
    css`
      &:not(:focus):before {
        width: 100%;
        height: 100%;
        content: 'Choose date';
      }
    `}
`;

export const PasswordInput = styled.div<{ error?: boolean | string }>`
  &:focus-within {
    border-color: white;
    background-color: #f9f9f9;
    box-shadow: none;
  }
  border-color: transparent;
  background-color: ${(props: { error: any }) =>
    props.error ? 'rgba(252, 165, 165, 0.1)' : '#F9F9F9'};
  box-shadow: none;
  border-radius: 8px;

  input,
  input:focus {
    outline: none;
    border: none;
    box-shadow: none;
  }
`;
