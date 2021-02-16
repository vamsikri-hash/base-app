import React from "react"
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {Navbar,NavbarDivider,NavbarGroup,NavbarHeading,Alignment,Classes,Button,Icon} from "@blueprintjs/core"
import {IconNames} from "@blueprintjs/icons"

const StyledNavbar = styled(Navbar)`
  height: 100px;
  display: flex;
  align-items: center;
`
const StyledNavbarHeading=styled(NavbarHeading)`
 font-weight: bold;
 font-size: 30px;
`;
const NavLinksContainer =styled.div`
display: flex;
justify-content: space-evenly;
width: 400px;
a{
  display: flex;
  align-items : center;
  font-size: 20px;
  text-decoration: none;
}

span{
  padding-right: 10px;
}
`;
export const NavbarComponent = () => {
  return (
    <StyledNavbar>
      <NavbarGroup>
        <StyledNavbarHeading data-test-id="title">UserBook</StyledNavbarHeading>
        <NavbarDivider />
          <NavLinksContainer>
            <NavLink exact to='/home' activeClassName='selected' >
            <Icon icon={IconNames.HOME} iconSize={20}/>
             Home
          </NavLink>
          <NavLink to='/users' activeClassName='selected'>
          <Icon icon={IconNames.USER} iconSize={20}/>
            Users
          </NavLink>
           <NavLink to='/adduser' activeClassName='selected'>
            <Icon icon={IconNames.ADD} iconSize={20}/>
            Add-Users
          </NavLink>
          </NavLinksContainer>
        </NavbarGroup>
    </StyledNavbar>
  )
}
// diff b/w Link and a tag
