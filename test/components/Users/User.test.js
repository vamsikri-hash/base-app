/* eslint-disable no-undef */
import React from "react";
import { fireEvent, getByText, queryByTestId, queryByText, render, waitFor } from "@testing-library/react";
import { User } from "../../../src/components/Users/User";
import { UserContext, UserState } from "../../../src/components/Users/userContext";

const user = {
	name: "v",
	email: "k@k.com",
	phno: "1234567890",
	id: 1,
};


const mockDelete = jest.fn((id) => {
	return {};
});

const userScreen = (user) => render(<UserContext.Provider value={{deleteUser: mockDelete}}>
	<User key={user.id} user={user} />
</UserContext.Provider>
);

describe("<User />", () => {

	test("should have user details ", () => {
		const { getByTestId } = userScreen(user);
		expect(getByTestId("name").textContent).toEqual("v");
		expect(getByTestId("email").textContent).toEqual("k@k.com");
		expect(getByTestId("phno").textContent).toEqual("1234567890");
	});

	test("click on delete should have a popover", () => {
		const { getByTestId } = userScreen(user);
		fireEvent.click(getByTestId("usr-del"));
		expect(getByTestId("cancel")).toBeTruthy();
		expect(getByTestId("confirm")).toBeTruthy();
	});

	test("click on cancel should not delete user", async () => {
		const { getByTestId, queryByTestId } = userScreen(user);
		fireEvent.click(getByTestId("usr-del"));
		fireEvent.click(getByTestId("cancel"));
		await waitFor(() => {
			expect(queryByTestId("popover")).toBeFalsy();
		});
	});

	test("click on confirm should delete the user", async () => {
		const { getByTestId, queryByText,debug,queryByTestId } = userScreen(user);
		debug();
		fireEvent.click(getByTestId("usr-del"));
		fireEvent.click(getByTestId("confirm"));
		expect(mockDelete).toHaveBeenCalledTimes(1);
	});


});


