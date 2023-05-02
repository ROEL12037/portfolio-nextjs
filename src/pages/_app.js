import "@/styles/globals.css";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
	return (
		<>
			<div className="container mx-auto min-w-[364px] max-w-[1024px]">
				<Header />
				<Component {...pageProps} />
			</div>
		</>
	);
}
