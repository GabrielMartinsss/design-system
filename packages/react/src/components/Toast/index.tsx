import * as ToastRadix from '@radix-ui/react-toast'
import { ToastDescription, ToastRoot, ToastTitle } from './styles'
import { ComponentProps, useState } from 'react'
import { X } from 'phosphor-react'
import { Button } from '../Button'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string
  description: string
}
export function Toast({title, description}: ToastProps, props: ToastProps) {
  const [open, setOpen] = useState(false)

  function handleClick() {
    setOpen(!false)
  }

  return (
    <ToastRadix.Provider swipeDirection='right' >
      <Button onClick={() => handleClick()}>Add to calendar</Button>

      <ToastRoot {...props} open={open} onOpenChange={setOpen}>
        <div>
          <ToastTitle>{title}</ToastTitle>
          <ToastRadix.Close asChild>
            <X />
          </ToastRadix.Close>

        </div>
        <ToastDescription>{description}</ToastDescription>
      </ToastRoot>

      <ToastRadix.Viewport />
    </ToastRadix.Provider>
  )
}

Toast.displayName = 'Toast'