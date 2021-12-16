import React, { useState, useCallback } from "react";
import {
	TextInput,
	PlayerSelect,
	TRPGSelect,
	GenderSelect,
} from "../components/UIKIT/index";

const CharaEdit = () => {
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
	return (
		<div>
			<h2>キャラクターシートの登録・編集</h2>
			<div>
				{/* divをImageAreaにする */}
				<div>
					<PlayerSelect />
					<TRPGSelect label={"TRPG"} />
					<GenderSelect />
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
