import React from "react";
import "./App.scss";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import styled from "styled-components";
import {NavbarComponent} from "./components/Navbar/Navbar";
import {UserState} from "./components/Users/userContext";
import {Users} from "./components/Users/Users";
import {AddUser} from "./components/Forms/AddUser";
import {Home} from "./components/Home/Home";

const AppContainer = styled.div`
`;
const App = () => (
	<AppContainer>
		<Router>
			<NavbarComponent />
			{/* <Redirect from="/" to="/home" /> */}
			{/* tried exact from */}
			<Route exact path="/">
				<Home />
			</Route>
			<UserState>
				<Route exact path="/users">
					<Users />
				</Route>
				<Route exact path="/adduser">
					<AddUser />
				</Route>
			</UserState>
		</Router>
	</AppContainer>
);

export default App;
