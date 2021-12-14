import React from "react";
import { Home, CharaEdit } from "./templates/index";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

const Link = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/edit" element={<CharaEdit />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Link;
