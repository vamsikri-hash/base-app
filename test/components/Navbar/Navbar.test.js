import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {render} from "@testing-library/react";
import {NavbarComponent} from "../../../src/components/Navbar/Navbar";

const screen = () => render(<Router>
	<NavbarComponent />
</Router>);
console.log(screen);
describe("should test navbar items", () => {
	test("should test navbar title", () => {
		const {getByTestId} = screen();
		expect(getByTestId("title").textContent).toEqual("UserBook");
	});

	test("should have 3 links for other pages", () => {
		const {getAllByRole} = screen();
		console.log(getAllByRole("link")[0]);
		expect(getAllByRole("link").length).toEqual(3);
	});
});
