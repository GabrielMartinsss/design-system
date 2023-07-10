import { styled, keyframes } from "../../styles";
import * as Tooltip from '@radix-ui/react-tooltip'

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  }
})

const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  }
})

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  }
})

const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  }
})

export const TooltipContent = styled(Tooltip.Content,{
  borderRadius: '$sm',
  padding: '$3 $4',
  background: '$gray900',
  color: '$gray100',

  '&[data-state="delayed-open"][[data-side="top"]]': {
    animationName: slideDownAndFade
  },
  '&[data-state="delayed-open"][[data-side="right"]]': {
    animationName: slideLeftAndFade
  },
  '&[data-state="delayed-open"][[data-side="bottom"]]': {
    animationName: slideUpAndFade
  },
  '&[data-state="delayed-open"][[data-side="left"]]': {
    animationName: slideRightAndFade
  },
})