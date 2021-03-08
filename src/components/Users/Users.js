import React from "react";
import {useEffect, useContext} from "react";
import styled from "styled-components";
import {User} from "./User.js";
import {UserContext} from "./userContext";

const UsersContainer = styled.div`
  margin-top: 50px;
  margin-left: 100px;
  margin-right: 100px;
  display: grid;
  grid-area: users;
  width: calc(100vh-300px);
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
`;

export const Users = () => {
	// const [Userdata, setUserdata] = useState([])
	const {state, getData} = useContext(UserContext);
	console.log(state);
	useEffect(() => {
		getData();
	}, []);

	return (
		<UsersContainer data-testid="users">
			{state.Userdata.map((user) => <User key={user.id} user={user} />)}
		</UsersContainer>
	);
};

// what is clean up in useEffect hook any example
