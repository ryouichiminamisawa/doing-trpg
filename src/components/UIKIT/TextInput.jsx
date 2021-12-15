import React from "react";
import TextField from "@material-ui/core/TextField";

const TextInput = (props) => {
	return (
		<TextField
			fullwidth={props.fullwidth}
			label={props.label}
			onChange={props.onChange}
		></TextField>
	);
};

export default TextInput;
