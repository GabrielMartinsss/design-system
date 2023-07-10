import * as TooltipRadix from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'
import { TooltipContent } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipRadix.Root> {}

export function Tooltip() {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>
          <h1 style={{ color: '#fff' }}>Tooltip</h1>
        </TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipContent >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima provident ad, exercitationem consequuntur qui.
            <TooltipRadix.Arrow />
          </TooltipContent>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>

    </TooltipRadix.Provider>
  )
}

Tooltip.displayName = 'Tooltip'