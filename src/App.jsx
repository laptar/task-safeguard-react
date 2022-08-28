import { useMediaQuery } from "react-responsive";

import { ContactForm } from "./Components/ContactForm/ContactForm";
import { Header } from "./Components/Header/Header";
import { Hero } from "./Components/Hero/Hero";
import { NavMenu } from "./Components/NavMenu/NavMenu";
import { NavMenuMobile } from "./Components/NavMenuMobile/NavMenuMobile";

export const App = () => {
	const isMobile = useMediaQuery({ maxWidth: 768 });

	return (
		<>
			<Header>{isMobile ? <NavMenuMobile /> : <NavMenu />}</Header>
			<Hero />
			<ContactForm />
		</>
	);
};
