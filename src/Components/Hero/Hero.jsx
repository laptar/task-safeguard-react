import s from "./Hero.module.css";

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
				<a className={s.more} href="/">
					Learn More
				</a>
			</div>
		</div>
	);
};
