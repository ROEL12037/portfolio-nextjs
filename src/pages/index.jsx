import Link from "next/link";
import Image from "next/image";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className="h-[92vh] flex">
			<div className="flex flex-col items-center justify-center">
				<section className="w-full flex">
					<section>
						<Image
							src="/headshot.jpg"
							width={250}
							height={250}
							alt="me"
							className="rounded-lg"
						/>
					</section>

					<section className="self-end ml-2">
						<h1 className="text-5xl">Roel Moreno</h1>
						<h3 className="text-2xl">Full-Stack Software Developer</h3>
					</section>
				</section>

				<section className="w-full">
					<h2 className="text-4xl mt-4">About Me</h2>
					<blockquote className="ml-4">
						<p className="mt-2">
							I am a software developer who designs and deploys full-stack web
							applications.
						</p>
						<p className="mt-2">
							If you&apos;re looking to build a site or solution, feel free to{" "}
							<Link
								href={"/contact"}
								className="hover:text-cyan-800 underline">
								reach out
							</Link>
							. I am well versed in technologies such as: HTML, CSS, JavaScript,
							REST APIs, Node.js, React, and SQL/NoSQL. Take a look at some of
							my favorite or most recent projects I&apos;ve worked on{" "}
							<Link
								href={"/projects"}
								className="hover:text-cyan-800 underline">
								here
							</Link>
							.
						</p>
						<p className="mt-2">
							On a more personal note, when not at my desk, I love to take
							advantage of what Austin has to offer. Which really just means
							I&apos;m either watching stand-up comedy, eating brisket or tacos,
							riding my bicycle, going on a hike, or paddleboarding.
						</p>
					</blockquote>
				</section>
			</div>
		</main>
	);
}
