import Link from "next/link";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main>
			<section>
				<h1 className="text-5xl">Roel Moreno</h1>
				<h3 className="text-2xl">Full-Stack Software Developer</h3>
			</section>
			<section>
				<h2 className="text-4xl">About Me</h2>
				<p>
					I am a software developer who designs and deploys full-stack web
					applications.
				</p>
				<p>
					If you&apos;re looking to build a site or solution, feel free to reach
					out{" "}
					<Link
						href={"/contact"}
						className="hover:text-cyan-800">
						here
					</Link>
					.
				</p>
				<p>
					I am well versed in technologies such as: HTML, CSS, JavaScript, REST
					APIs, Node.js, React, MongoDB/PostgreSQL. Take a look{" "}
					<Link
						href={"/projects"}
						className="hover:text-cyan-800">
						here
					</Link>{" "}
					for some of the projects I&apos;ve worked on.
				</p>
				<p>
					When not at my desk, I like to take advantage of what Austin has to
					offer. For example, soccer, stand-up comedy, live music, brisket,
					tacos, pizza, ramem, sushi, bicycle, hike trails, paddleboard, swim,
					zilker.
				</p>
			</section>
		</main>
	);
}
