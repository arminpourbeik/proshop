import { Menu, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import { Link as ReactRouterDomLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>
}

const StyledLink = styled(Link)`
  text-transform: uppercase;
`

const MenuIcon = ({ name }) => <Icon name={name} />

export function Header() {
  const { pathname } = useLocation()

  return (
    <StyledSegment inverted>
      <Menu size='large' inverted pointing secondary>
        <Menu.Item name='home'>
          <StyledLink to='/'>PROSHOP</StyledLink>
        </Menu.Item>
        <Menu.Item name='cart' position='right' active={pathname === '/cart'}>
          <StyledLink to='/cart' isActive>
            <MenuIcon name='shopping cart' />
            Cart
          </StyledLink>
        </Menu.Item>
        <Menu.Item name='login' active={pathname === '/login'}>
          <StyledLink to='/login' isActive>
            <MenuIcon name='user' />
            Login
          </StyledLink>
        </Menu.Item>
      </Menu>
    </StyledSegment>
  )
}

const StyledSegment = styled(Segment)`
  border-radius: 0 !important;
`
