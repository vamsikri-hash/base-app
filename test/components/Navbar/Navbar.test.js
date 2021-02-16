import React from "react"
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { NavbarComponent } from '../../../src/components/Navbar/Navbar';


test("Navbar Title",()=>{
 render(<NavbarComponent/>)
 expect(screen.getByTestId("title")).toHaveTextContent("UsersBook")
})