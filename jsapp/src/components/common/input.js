import { useState } from "react";
export default function InputField(props) {
	let initialfocus = props.value ? true : false;
	const [focus, setFocus] = useState(initialfocus);
	const handlefocus = () => {
		setFocus(true);
	};
	const handleblur = (e) => {
		if (!e.target.value) {
			setFocus(false);
		}
	};
	return (
		<label className={`inputlable ${props.labelclass || ""}`}>
			<input
				type={props.type || "text"}
				value={props.value}
				name={props.name || ""}
				onChange={props.onChange}
				onFocus={handlefocus}
				onBlur={handleblur}
			/>
			<span
				className={`placeholderspan ${props.placeholderclass || ""} ${
					focus ? "active" : ""
				}`}
			>
				{props.placeholder}
			</span>
		</label>
	);
}
