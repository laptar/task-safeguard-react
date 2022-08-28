import svg from "../../img/sprite.svg";
import s from "./ContactForm.module.css";

export const ContactForm = () => {
	return (
		<div className={s.formSection}>
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
				<form className={s.form}>
					<label>
						<span className={s.inputName}> Full Name</span>
						<input className={s.input} name="fullName" />
					</label>
					<label>
						<span className={s.inputName}> Company Name</span>
						<input className={s.input} name="companyName" />
					</label>
					<label>
						<span className={s.inputName}> Phone Number</span>
						<input className={s.input} name="phoneNumber" />
					</label>
					<label>
						<span className={s.inputName}>E-mail</span>
						<input className={s.input} name="mail" />
					</label>
					<label>
						<span className={s.inputName}>Write Us Messages</span>
						<textarea name="message"></textarea>
					</label>
					<button type="submit">Send Message</button>
				</form>
			</div>
		</div>
	);
};
