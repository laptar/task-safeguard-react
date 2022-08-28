import { ContactForm } from "./Components/ContactForm/ContactForm";
import { Header } from "./Components/Header/Header";
import { Hero } from "./Components/Hero/Hero";
import { NavMenuMobile } from "./Components/NavMenuMobile/NavMenuMobile";

export const App = () => {
	return (
		<>
			<Header>
				<NavMenuMobile></NavMenuMobile>
			</Header>
			<Hero />
			<ContactForm />
		</>
	);
};
