import React from "react";
import {render,fireEvent, getByText, getByTestId, waitFor} from "@testing-library/react";
import { AddUser } from "../../../src/components/Forms/AddUser";
import { UserContext } from "../../../src/components/Users/userContext";

const userScreen = (user) => render(
	<UserContext.Provider value={{
		state: {Userdata: []}, getData: () => {}, AddData: () => {}, deleteUser: () => {},
	}}
	>
		<AddUser />
	</UserContext.Provider>);

describe("should test the user form input values",()=>{

	test("should check the user input values in input box-name",()=>{
		const {getByLabelText} = userScreen({});
		const input = getByLabelText("Name");
		fireEvent.change(input,{target:{value: "vamsi"}});
		expect(input.value).toEqual("vamsi");
	});
	test("should check the user input values in input box-email",()=>{
		const {getByLabelText} = userScreen({});
		const input = getByLabelText("Email");
		fireEvent.change(input,{target:{value: "vamsi@govimana.com"}});
		expect(input.value).toEqual("vamsi@govimana.com");
	});
	test("should check the user input values in input box-phno",()=>{
		const {getByLabelText} = userScreen({});
		const input = getByLabelText("Mobile");
		fireEvent.change(input,{target:{value: "1234567890"}});
		expect(input.value).toEqual("1234567890");
	});

});


describe("should test things regarding the button",()=>{
	test("should have button named submit",()=>{
		const {getByRole} = userScreen({});
		expect(getByRole("button").textContent).toEqual("Submit");
	});

	test("should show helper texts if given empty values",()=>{
		const {getByTestId} = userScreen({});
		fireEvent.click(getByTestId("usr-btn"));
		expect(getByTestId("name-er").textContent).toEqual("Required");
		expect(getByTestId("email-er").textContent).toEqual("Required");
		expect(getByTestId("phno-er").textContent).toEqual("Required");

	});

	test("should show helper texts if given in wrong format",()=>{
		const {getByTestId} = userScreen({});
		fireEvent.change(getByTestId("name"),{target:{value:""}});
		fireEvent.change(getByTestId("email"),{target:{value:"@EHGW.COM"}});
		fireEvent.change(getByTestId("phno"),{target:{value:"13232`"}});
		fireEvent.click(getByTestId("usr-btn"));
		expect(getByTestId("name-er").textContent).toEqual("Required");
		expect(getByTestId("email-er").textContent).toEqual("email shoud be in form text@text.com");
		expect(getByTestId("phno-er").textContent).toEqual("Minimum 10 numbers required");
	});
});


describe("should show helper text for invalid details",()=>{
	test("should not take the empty value in input - name",()=>{
		const {getByLabelText,findByTestId,getByText,getByTestId,queryByText} = userScreen({});
		const element = getByTestId("name");
		fireEvent.change(element,{target:{value:"jsaj"}});
		fireEvent.blur(element);
		expect(queryByText("Required")).toBeFalsy();
		fireEvent.change(element,{target:{value:""}});
		expect(getByText("Required")).toBeTruthy();
	});

	test("should not take the empty value in input - email",()=>{
		const {getByLabelText,findByTestId,getByText,getByTestId,queryByText} = userScreen({});
		const element = getByTestId("email");
		fireEvent.change(element,{target:{value:"jsaj@gmail.com"}});
		fireEvent.blur(element);
		expect(queryByText("Required")).toBeFalsy();
		fireEvent.change(element,{target:{value:""}});
		expect(getByText("Required")).toBeTruthy();
	});

	test("should not take the empty value in input - phno",()=>{
		const {getByLabelText,findByTestId,getByText,getByTestId,queryByText} = userScreen({});
		const element = getByTestId("phno");
		fireEvent.change(element,{target:{value:"1234567"}});
		fireEvent.blur(element);
		expect(queryByText("Required")).toBeFalsy();
		fireEvent.change(element,{target:{value:""}});
		expect(getByText("Required")).toBeTruthy();
	});

	test("should not take phno less than 10 digits",()=>{
		const {getByLabelText,findByTestId,getByText,getByTestId,queryByText} = userScreen({});
		const element = getByTestId("phno");
		fireEvent.change(element,{target:{value:"1234567890"}});
		fireEvent.blur(element);
		expect(queryByText("Minimum 10 numbers required")).toBeTruthy();
	});

	test("should check the format of email",()=>{
		const {getByLabelText,findByTestId,getByText,getByTestId,queryByText} = userScreen({});
		const element = getByTestId("email");
		fireEvent.change(element,{target:{value:"j%J@.com"}});
		fireEvent.blur(element);
		expect(queryByText("email shoud be in form text@text.com")).toBeTruthy();
	});

});


// Reloading on any page taking to home page ( refer app.js routing)

// readFile (code written after it not executed) vs readFileSync(it worked here)




// doubts

// how to test the elements that render after the firing of an event

// Regarding testing the components having context - enzyme ? or any other  way ?

/*  some out of context question ( babel is converting es6 or new features
to old js things for brwoser/node to understand then it's just a transpiler right ? not compiler ? )*/

// mock fn's ???