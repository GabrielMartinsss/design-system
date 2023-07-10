import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from "../../styles"

const viewportpadding = '$6'

const slideIn = keyframes({
  from: {
    transform: `translateX(calc(100% + ${viewportpadding}))`
  },
  to: {
    transform: 'translateX(0)',
  }
})

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0
  }
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))'
  },
  to: {
    transform: `translateX(calc(100% + ${viewportpadding}))`
  }
})

export const ToastRoot = styled(Toast.Root,{
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  
  padding: '$3 $5',
  width: 360,
  
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  
  div: {
    display: 'flex',
    
    svg: {
      width: '$5',
      height: '$5',
      color: '$gray200',

      cursor: 'pointer',
    },
  },
  
  '&[data-state="open"]': {
    animation: `${slideIn} 150ms `
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`
  },

  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },

  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  }
})


export const ToastTitle = styled(Toast.Title,{
  flex: 1,
  color: '$white',
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: '$bold',
})

export const ToastDescription = styled(Toast.Description,{
  flex: 1,
  color: '$gray200',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
})

export const ToastViewport = styled(Toast.Viewport,{
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '$6',
  gap: '$2',
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 123,
  outline: 'none',
})
