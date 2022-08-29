import svg from "../../img/sprite.svg";
import s from "./ContactForm.module.css";
import { Input } from "../Input/Input";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactForm = () => {
	const [formValues, setFormValues] = useState({
		fullName: "",
		companyName: "",
		phoneNumber: "",
		mail: "",
		message: "",
	});
	const inputs = [
		{
			id: 1,
			name: "fullName",
			type: "text",
			label: "Full Name",
			errorMessage: "Full Name is required",
			pattern:
				"(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})",
			required: true,
		},
		{
			id: 2,
			name: "companyName",
			type: "text",
			label: "Company Name",
			required: true,
		},
		{
			id: 3,
			name: "phoneNumber",
			type: "tel",
			label: "Phone Number",
			errorMessage: "Phone Number is invalid",
			// pattern: "",
			required: true,
		},
		{
			id: 4,
			name: "mail",
			type: "email",
			label: "E-mail",
			errorMessage: "Email is invalid",
			pattern:
				"^([A-Z|a-z|0-9](.|_){0,1})+[A-Z|a-z|0-9]@([A-Z|a-z|0-9])+((.){0,1}[A-Z|a-z|0-9]){2}.[a-z]{2,3}$",
			required: true,
		},
	];
	const onChange = (e) => {
		setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setFormValues({
			fullName: "",
			companyName: "",
			phoneNumber: "",
			mail: "",
			message: "",
		});
		toast.info("Sending is successful !", {
			position: toast.POSITION.TOP_CENTER,
		});
	};
	return (
		<div className={s.formSection}>
			<ToastContainer autoClose={1000} />
			<div className="container">
				<div className={s.titleBox}>
					<h2 className={s.title} id="contactUs">
						<span>CONTACT</span> US
					</h2>
					<a className={s.up} href="#home">
						<svg className={s.arrow} width={23} height={11}>
							<use href={`${svg}#icon-arrow-up`}></use>
						</svg>
					</a>
				</div>
				<form className={s.form} onSubmit={handleSubmit}>
					{inputs.map((el) => (
						<Input
							key={el.id}
							{...el}
							value={formValues[el.name]}
							onChange={onChange}
						/>
					))}
					<label>
						<span className={s.inputName}>Write Us Messages</span>
						<textarea
							name="message"
							value={formValues.message}
							onChange={onChange}
						></textarea>
					</label>
					<button type="submit">Send Message</button>
				</form>
			</div>
		</div>
	);
};
