import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  display: 'flex',
  alignItems: 'baseline',

  minHeight: 80,
  padding: '$3 $4',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  borderRadius: '$sm',
  backgroundColor: '$gray900',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  resize: 'vertical',

  '&:focus': {
    outline: 0,
    borderColor: '$ignite300',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
    resize: 'none',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'
