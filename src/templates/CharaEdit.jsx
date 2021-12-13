import React from "react";
//TextInput.jsxをつくったら消してください。
import TextInput from "@material-ui/core";

const CharaEdit = () => {
	return (
		<div>
			<h2>キャラクターシートの登録・編集</h2>
			<div>
				{/* divをImageAreaにする */}
				<div>
					{/* TextInput.jsxを作ります */}
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
