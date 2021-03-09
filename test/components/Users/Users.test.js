import React, { useContext } from "react";
import { act, render, waitFor } from "@testing-library/react";
import { UserContext, UserState } from "../../../src/components/Users/userContext";
import { Users } from "../../../src/components/Users/Users";


const userD = [
	{
		"name": "qeuq",
		"email": "yyy@Y.com",
		"phno": "12345678990",
		"id": 8
	},
	{
		"name": "test2",
		"email": "t@T.com",
		"phno": "12345678900",
		"id": 9
	},
];

const mockGetData = jest.fn(() => {
	console.log("heer");
	return {
		Userdata: userD
	};

});

const mockDeleteUser = jest.fn(() => {

});

const setUpUsersScreen = () => {
	return render(<UserContext.Provider value={{ state: { Userdata: [] }, getData: mockGetData }}>
		<Users />
	</UserContext.Provider>);
};

describe("<Users/>", () => {

	test("should check the number of users", async () => {
		const { getByTestId, debug, findByText, findByTestId ,getByText} = setUpUsersScreen();

		// await findByText("qeuq");
		//await findByTestId("user-9");

		/* await waitFor(()=>{
		}); */
	});
});