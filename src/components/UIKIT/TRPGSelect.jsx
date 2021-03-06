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

const TRPGSelect = () => {
	const classes = useStyles();
	const [TRPG, setTRPG] = useState("");

	const TRPGs = [
		{ id: "callofchuluhu", name: "クトゥルフ" },
		{ id: "konosuba", name: "このすば！" },
		{ id: "arianrhod", name: "アリアンロッド2E" },
	];

	return (
		<div className="player-select">
			<FormControl className={classes.formControl}>
				<InputLabel>TRPG</InputLabel>

				<Select
					required={true}
					value={TRPG}
					onChanege={(event) => setTRPG(event.target.value)}
				>
					{TRPGs.map((option) => (
						<MenuItem key={option.id} value={option.id}>
							{option.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};

export default TRPGSelect;
