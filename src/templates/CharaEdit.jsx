import React from "react";
import { TextInput } from "../components/UIKIT/index";

const CharaEdit = () => {
	return (
		<div>
			<h2>キャラクターシートの登録・編集</h2>
			<div>
				{/* divをImageAreaにする */}
				<div>
					<TextInput label={"名前"}></TextInput>
					<TextInput label={"職業"}></TextInput>
					<TextInput label={"スキル"}></TextInput>
					<TextInput label={"性別"}></TextInput>
				</div>
			</div>
		</div>
	);
};

export default CharaEdit;
