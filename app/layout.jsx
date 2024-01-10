import {Providers} from "./providers";
import "./global.css";
import {Anybody, Aleo, Poppins} from "next/font/google";

const anybody = Anybody({
	weight: ["300", "400", "500"],
	style: ["normal"],
	subsets: ["latin"],
});

const aleo = Aleo({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	style: ["normal"],
});

const poppins = Poppins({
	weight: ["200", "300"],
	style: ["normal"],
	subsets: ["latin"],
});

export const metadata = {
	title: "Sergio Correa | Portfolio",
	description: "Sergio Correa's web portfolio",
};

const RootLayout = ({children}) => (
	<html lang="en" className="dark">
		{/* <Navbar/> */}
		<body className="">
			<Providers>{children}</Providers>
		</body>
	</html>
);

export default RootLayout;
