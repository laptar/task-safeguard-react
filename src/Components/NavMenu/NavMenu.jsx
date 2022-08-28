import s from "./NavMenu.module.css";
export const NavMenu = () => {
	return (
		<div className={s.menu}>
			<ul className={s.menuList}>
				<li className={s.menuItem}>
					<a className={s.navLink} href="#home">
						Home
					</a>
				</li>
				<li className={s.menuItem}>
					<a className={s.navLink} href="#home">
						About Us
					</a>
				</li>
				<li className={s.menuItem}>
					<a className={s.navLink} href="#home">
						What We Do
					</a>
				</li>
			</ul>

			<a className={s.navBtn} href="#contactUs">
				Contact Us
			</a>
		</div>
	);
};
