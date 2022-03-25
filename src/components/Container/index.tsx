import { ReactNode } from 'react'

import { Wrapper } from './styles'

type ContainerProps = {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => (
  <Wrapper>{children}</Wrapper>
)
