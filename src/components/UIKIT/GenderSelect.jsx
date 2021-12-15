import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(() => ({
	formControl: {
		width: 120,
	},
}));

const GenderSelect = () => {
	const classes = useStyles();
	const [gender, setGender] = useState("");

	const genders = [
		{ id: "male", name: "男" },
		{ id: "female", name: "女" },
		{ id: "others", name: "その他" },
	];

	return (
		<div className="player-select">
			<FormControl className={classes.formControl}>
				<InputLabel>性別</InputLabel>

				<Select
					required={true}
					value={gender}
					onChanege={(event) => setGender(event.target.value)}
				>
					{genders.map((option) => (
						<MenuItem key={option.id} value={option.id}>
							{option.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};

export default GenderSelect;
