import styled, { css } from 'styled-components';

export const MainMultiInput = styled.textarea<{
  error?: boolean | string;
  value: string | number | readonly string[] | undefined;
  variant?: 'primary' | 'secondary';
}>`
  border-color: transparent;
  border-radius: 8px;
  background-color: ${(props) =>
    props.error
      ? 'rgba(252, 165, 165, 0.1)'
      : props.variant === 'secondary'
      ? 'white'
      : '#F9F9F9'};
  box-shadow: none;
  &:focus {
    border-color: white;
    background-color: ${(props) =>
      props.variant === 'secondary' ? 'white' : '#f9f9f9'};
    box-shadow: none;
    border-radius: 8px;
  }
  ${(props) =>
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
