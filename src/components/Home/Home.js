import React from 'react'
import styled from "styled-components"
import { Card, Elevation, Intent } from "@blueprintjs/core"
const HomeContainer=styled.div`
 margin-top: 100px;
 margin-left: 30%;
 width: 400px;
 h5{
  font-size: 20px;
 }
 p {
  font-size: 16px;
 }
`;
export const Home = () => {
 return (
  <HomeContainer>
       
       <Card interactive={true} elevation={Elevation.TWO}>
         <h5>About UserBook</h5>
         <p>
           This is simple user app to create and view users !
         </p>
      </Card>
  </HomeContainer>
 )
}
