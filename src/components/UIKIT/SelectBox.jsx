import React from "react";
import { makeStyles } from "@material-ui/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles({
	formControl: {
		width: "100%",
	},
});

const SelectBox = (props) => {
	const classes = useStyles();
	return (
		<div>
			<InputLabel>{props.label}</InputLabel>
			<FormControl className={classes.formControl}>
				<Select
					required={props.required}
					value={props.value}
					onChange={(event) => props.select(event.target.value)}
				>
					{props.options.mapar((option) => (
						<MenuItem>{option.name}</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};

export default SelectBox;
