import { useEffect, useState } from "react";
import s from "./Input.module.css";

export const Input = (props) => {
	const [focused, setFocused] = useState(false);
	const { id, label, onChange, errorMessage, ...inputProps } = props;
	useEffect(() => {
		console.log(props.value);
		if (!props.value) {
			setFocused(false);
		}
	}, [props.value]);

	const handleFocused = (e) => {
		console.log(e.target.value);
		if (e.target.value) {
			setFocused(true);
		}
	};
	return (
		<label className={s.lableItem}>
			<span className={s.inputName}>{label}</span>
			<input
				className={s.input}
				{...inputProps}
				onChange={onChange}
				onBlur={handleFocused}
				focused={focused.toString()}
			/>
			<span className={s.errMsg}>{errorMessage}</span>
		</label>
	);
};
