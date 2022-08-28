import { useState } from "react";
import s from "./NavMenuMobile.module.css";

export const NavMenuMobile = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const handlerTogleMenu = () => {
		console.log(menuIsOpen);
		setMenuIsOpen((prev) => !prev);
	};
	return (
		<>
			<button
				className={menuIsOpen ? `${s.menuBtn} ${s.close}` : `${s.menuBtn}`}
				type="button"
				onClick={handlerTogleMenu}
			>
				<div></div>
			</button>
		</>
	);
};
