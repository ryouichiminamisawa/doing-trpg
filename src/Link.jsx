import React from "react";
import { Home, CharaEdit } from "./templates/index";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

const Link = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/edit" element={<CharaEdit />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Link;
