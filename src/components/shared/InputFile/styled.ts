/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';

export const FileInput = styled.div<{ error?: boolean | string }>`
  border-color: #065da7;
  background-color: ${(props) =>
    props.error ? 'rgba(252, 165, 165, 0.1)' : '#fff'};
  box-shadow: none;

  &:focus,
  &:focus-within {
    border-color: #065da7;
    background-color: #065da720;
    box-shadow: none;
  }
`;
