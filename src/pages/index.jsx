import Link from "next/link";
import Image from "next/image";

export default function Home() {
	return (
		<main className="min-h-[92vh] flex">
			<div className="flex flex-col items-center justify-center mx-auto">
				<section className="w-full flex px-4">
					<section className="max-w-[250px]">
						<Image
							src="/img/headshot.jpg"
							width={570}
							height={777}
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
					<blockquote className="max-w-[775px] font-semibold tracking-wider">
						<p className="mt-2">
							I&apos;m a software developer who crafts visually appealing and
							reliable full-stack web applications.
						</p>

						<p className="mt-2">
							As a firm believer in continuous growth, I challenge myself daily
							with Codewars problems. My current score is:
							{/* eslint-disable-next-line @next/next/no-img-element*/}
							<img
								src={"https://www.codewars.com/users/roel12037/badges/micro"}
								alt="codewars-badge"
								className="inline-block"
							/>
						</p>

						<p className="mt-2">
							If you&apos;re looking to build a robust site or digital solution,
							feel free to{" "}
							<Link
								href={"/contact"}
								className="text-cerulean hover:text-moonstone underline font-semibold">
								reach out
							</Link>
							. I&apos;m proficient in technologies such as: HTML, CSS,
							JavaScript, REST APIs, Node.js, React, and SQL/NoSQL DBs. Explore
							some the projects I&apos;ve worked on{" "}
							<Link
								href={"/projects"}
								className="text-cerulean hover:text-moonstone underline font-semibold">
								here
							</Link>
							.
						</p>
						<p className="mt-2">
							On a more personal note, when I&apos;m not at my desk, I love to
							take advantage of what Austin has to offer. You might find me
							enjoying stand-up comedy, savoring brisket or tacos, or staying
							active with biking, hiking, paddleboarding, co-ed soccer, ultimate
							frisbee, and sand volleyball.
						</p>
					</blockquote>
				</section>
			</div>
		</main>
	);
}
