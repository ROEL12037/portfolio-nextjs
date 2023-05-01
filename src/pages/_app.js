import "@/styles/globals.css";
import Header from "@/components/Header";
import Head from "next/head";

export default function App({ Component, pageProps }) {
	return (
		<>
			<div className="container mx-auto max-w-[1024px]">
				<Header />
				<Component {...pageProps} />
			</div>
		</>
	);
}
