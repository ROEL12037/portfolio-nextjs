import "@/styles/globals.css";
import "../../public/css/styles.css";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
	return (
		<section className="container mx-auto min-w-[373px] max-w-[1024px] h-screen">
			<Header />
			<Component {...pageProps} />
		</section>
	);
}
