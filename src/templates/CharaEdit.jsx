import React, { useState, useCallback } from "react";
import { TextInput, PlayerSelect, TRPGSelect } from "../components/UIKIT/index";

const CharaEdit = () => {
	const [playerName, setPlayerName] = useState({});

	const playerNames = [
		{ id: "erickwolf", name: "Erick Wolf" },
		{ id: "kuro", name: "クロ" },
		{ id: "sabakan", name: "鯖缶" },
		{ id: "shigurekintoki", name: "時雨金時" },
		{ id: "nyantaro", name: "にゃんたろー" },
		{ id: "Leopold", name: "レオポルド" },
	];

	// const TRPGs = [
	// 	{ id: "callofchuluhu", name: "クトゥルフ" },
	// 	{ id: "konosuba", name: "このすば！" },
	// 	{ id: "arianrhod", name: "アリアンロッド2E" },
	// ];

	// 	[TRPG, setTRPG] = useState(""),
	// 	[name, setName] = useState(""),
	// 	[occupation, setOccupation] = useState(""),
	// 	[skill, setSkill] = useState(""),
	// 	[gender, setGender] = useState(""),
	// 	[url, setUrl] = useState("");

	// const inputName = useCallback(
	// 	(event) => {
	// 		setName(event.target.value);
	// 	},
	// 	[setName]
	// );

	// const inputOccupation = useCallback(
	// 	(event) => {
	// 		setOccupation(event.target.value);
	// 	},
	// 	[setOccupation]
	// );

	// const inputSkill = useCallback(
	// 	(event) => {
	// 		setSkill(event.target.value);
	// 	},
	// 	[setSkill]
	// );

	// const inputGender = useCallback(
	// 	(event) => {
	// 		setGender(event.target.value);
	// 	},
	// 	[setGender]
	// );
	// const inputUrl = useCallback(
	// 	(event) => {
	// 		setUrl(event.target.value);
	// 	},
	// 	[setUrl]
	// );
	console.log({ playerNames });
	return (
		<div>
			<h2>キャラクターシートの登録・編集</h2>
			<div>
				{/* divをImageAreaにする */}
				<div>
					<PlayerSelect />
					<TRPGSelect label={"TRPG"} />
					<TextInput label={"名前"}></TextInput>
					<TextInput label={"職業"}></TextInput>
					<TextInput label={"スキル"}></TextInput>
					<TextInput label={"性別"}></TextInput>
					<TextInput label={"url"}></TextInput>
				</div>
			</div>
		</div>
	);
};

export default CharaEdit;
