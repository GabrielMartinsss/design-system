import type { StoryObj, Meta } from '@storybook/react'
import { Box, Toast, ToastProps } from '@gabrielmartinsss-ignite-ui/react'

export default {
  title: 'Overlay/Toast',
  component: Toast,
  args: {
    title: 'appointment made',
    description: 'Wednesday, October 23rd at 4pm'
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'transparent',
            gap: '$2',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
