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

const PlayerSelect = () => {
	const classes = useStyles();
	const [playerName, setPlayerName] = useState({});

	const playerNames = [
		{ id: "erickwolf", name: "Erick Wolf" },
		{ id: "kuro", name: "クロ" },
		{ id: "sabakan", name: "鯖缶" },
		{ id: "shigurekintoki", name: "時雨金時" },
		{ id: "nyantaro", name: "にゃんたろー" },
		{ id: "Leopold", name: "レオポルド" },
	];
	return (
		<div className="player-select">
			<FormControl className={classes.formControl}>
				<InputLabel>プレイヤー名</InputLabel>

				<Select
					required={true}
					value={playerName}
					onChanege={(event) => setPlayerName(event.target.value)}
				>
					{playerNames.map((option) => (
						<MenuItem key={option.id} value={option.id}>
							{option.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};

export default PlayerSelect;
