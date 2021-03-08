import React from "react";
import {Card, Elevation} from "@blueprintjs/core";
import {ConfirmDeleteUser} from "./ConfirmDeleteUser";

export const User = ({user}) => (
	<div data-testid={`user-${user.id}`}>
		<Card interactive elevation={Elevation.FOUR}>
			<h2 data-testid="name">{user.name}</h2>
			<h3 data-testid="email">{user.email}</h3>
			<h3 data-testid="phno">{user.phno}</h3>
			<ConfirmDeleteUser userId={user.id} />
		</Card>
	</div>
);
