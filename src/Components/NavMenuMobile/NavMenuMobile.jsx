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
			{menuIsOpen && (
				<div className={s.menu}>
					<ul className={s.list}>
						<li>
							<a className={s.listElm} href="#home" onClick={handlerTogleMenu}>
								Home
							</a>
						</li>
						<li>
							<a className={s.listElm} href="#home" onClick={handlerTogleMenu}>
								What we do
							</a>
						</li>
						<li>
							<a className={s.listElm} href="#home" onClick={handlerTogleMenu}>
								About us
							</a>
						</li>
						<li>
							<a className={s.listElm} href="#home" onClick={handlerTogleMenu}>
								Our history
							</a>
						</li>
						<li>
							<a
								className={s.listElm}
								href="#contactUs"
								onClick={handlerTogleMenu}
							>
								Contact us
							</a>
						</li>
					</ul>
					<p className={s.listTitle} href="#home" onClick={handlerTogleMenu}>
						Services
					</p>
					<ul className={s.list}>
						<li>
							<a className={s.listElm} href="#home">
								Training and Implementation
							</a>
						</li>
						<li>
							<a className={s.listElm} href="#home">
								Cyber Consultants
							</a>
						</li>
						<li>
							<a className={s.listElm} href="#home" onClick={handlerTogleMenu}>
								Consultancy and brand protection
							</a>
						</li>
						<li>
							<a className={s.listElm} href="#home" onClick={handlerTogleMenu}>
								Software
							</a>
						</li>
					</ul>
				</div>
			)}
		</>
	);
};
