import s from "./Hero.module.css";
import svg from "../../img/sprite.svg";

export const Hero = () => {
	return (
		<div className={s.hero}>
			<div className="container">
				<h1 className={s.title}>
					Never Caught
					<br /> Off-Guard Again
				</h1>
				<p className={s.info}>
					We are specialist in protecting your assets and reputation to make
					sure you operate risk-free and focus on your core business.
				</p>
				<a className={s.more} href="#home">
					Learn More
				</a>
				<div className={s.arrCont}>
					<svg className={s.arrow} width={30} height={16}>
						<use href={`${svg}#icon-arrow`}></use>
					</svg>
					<p className={s.scroll}>Scroll</p>
				</div>
			</div>
		</div>
	);
};
