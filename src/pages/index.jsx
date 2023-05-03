import Link from "next/link";
import Image from "next/image";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className="min-h-[92vh] flex">
			<div className="flex flex-col items-center justify-center mx-auto">
				<section className="w-full flex px-4">
					<section>
						<Image
							src="/img/headshot.jpg"
							width={250}
							height={250}
							alt="me"
							className="rounded-lg"
							priority
						/>
					</section>

					<section className="self-end ml-4">
						<h1 className="text-5xl text-cyan-700">Roel Moreno</h1>
						<h3 className="text-2xl font-bold tracking-wider">
							Full-Stack Software Developer
						</h3>
					</section>
				</section>

				<section className="w-full px-4">
					<h2 className="text-4xl mt-4 text-cerulean">About Me</h2>
					<blockquote className="max-w-[775px] pl-4 font-medium tracking-widest">
						<p className="mt-2">
							I am a software developer who designs and deploys full-stack web
							applications.
						</p>
						<p className="mt-2">
							If you&apos;re looking to build a site or solution, feel free to{" "}
							<Link
								href={"/contact"}
								className="hover:text-cerulean underline font-semibold">
								reach out
							</Link>
							. I am well versed in technologies such as: HTML, CSS, JavaScript,
							REST APIs, Node.js, React, and SQL/NoSQL. You can find some of my
							favorite projects I&apos;ve worked on{" "}
							<Link
								href={"/projects"}
								className="hover:text-cerulean underline font-semibold">
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
