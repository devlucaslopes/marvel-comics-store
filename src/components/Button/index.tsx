import { ButtonHTMLAttributes } from 'react'

import { Btn } from './styles'

export type ButtonVariant = 'filled' | 'outline'

type ButtonProps = {
  variant?: ButtonVariant
  children: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  variant = 'outline',
  children,
  ...props
}: ButtonProps) => {
  return (
    <Btn variant={variant} {...props}>
      <span>{children}</span>
    </Btn>
  )
}
