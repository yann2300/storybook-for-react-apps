import { useEffect, useState } from 'react'
import { Story, Meta } from '@storybook/react'

import { cartItems } from '../../stub/cart-items'
import { Button } from '../Button'
import { Body } from '../typography'

import { ShoppingCartMenu } from './ShoppingCartMenu'

export default {
  title: 'Components/ShoppingCartMenu',
  component: ShoppingCartMenu,
  parameters: {
    // This makes it so that the modal is loaded inside of an iframe in docs mode.
    // If it's not rendered in an iframe, the modal is going to open on top of Storybook itself!
    docs: { inlineStories: false, iframeHeight: 600 },
  },
} as Meta

const Template: Story = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openShoppingCartMenu = () => setIsOpen(true)
  const closeShoppingCartMenu = () => setIsOpen(false)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <>
      <Body>Press ESC to close the ShoppingCartMenu or click on the close icon!</Body>
      <Button onClick={openShoppingCartMenu}>Open ShoppingCartMenu</Button>
      <ShoppingCartMenu
        isOpen={isOpen}
        cartItems={cartItems}
        totalPrice={1200}
        onItemChange={() => {}}
        onClose={() => {
          closeShoppingCartMenu()
        }}
      />
    </>
  )
}

export const Desktop = Template.bind({})

export const Mobile = Template.bind({})
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
}
