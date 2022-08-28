import svg from "../../img/sprite.svg";
import s from "./Header.module.css";
export const Header = ({ children }) => {
	return (
		<header className={s.header}>
			<div className="container">
				<svg className={s.logo} width={162} height={35}>
					<use href={`${svg}#icon-logo-name`}></use>
				</svg>
				<nav>{children}</nav>
			</div>
		</header>
	);
};
