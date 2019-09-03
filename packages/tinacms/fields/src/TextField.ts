import * as React from 'react'
import styled, { css } from 'styled-components'

type a = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
export interface InputProps extends a {
  error?: boolean
  ref?: any
}

export const TextField = styled.input<{ error?: boolean }>`
  border-width: 1px;
  border-style: solid;
  border-color: ${p => (p.error ? 'red' : '#eaeaea')};
  border-radius: 0.3rem;
  height: 2rem;
  width: 100%;
  font-size: 0.9rem;
  padding: 0 0.5rem;
  margin: 0;
  outline: none;
  transition: border 0.2s ease;

  &:focus {
    border-color: #666666;
  }

  &::placeholder {
    font-size: 0.9rem;
    color: #cfd3d7;
  }
  ${props =>
    props.error &&
    css`
      border-color: red;
      &:focus {
        border-color: red;
      }
    `};
`