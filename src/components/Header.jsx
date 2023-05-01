import Link from "next/link";

export default function Header() {
	return (
		<header className="">
			<nav className="flex flex-row justify-between">
				<ul className="flex">
					<li className="my-2 px-1 py-1 bg-cyan-800">
						<Link href={"/"}>Roel Codes</Link>
					</li>
					<li className="mx-1 my-auto hover:text-cyan-800">
						<Link href={"/projects"}>Projects</Link>
					</li>
					<li className="mx-1 my-auto hover:text-cyan-800">
						<Link href={"/contact"}>Contact</Link>
					</li>
				</ul>

				<ul className="flex">
					<li className="mx-1 my-auto hover:text-cyan-800">
						<a
							href="https://www.linkedin.com/in/roel12037/"
							target="_blank">
							LinkedIn
						</a>
					</li>
					<li className="mx-1 my-auto hover:text-cyan-800">
						<a
							href="https://github.com/ROEL12037"
							target="_blank">
							Github
						</a>{" "}
					</li>
					<li className="mx-1 my-auto hover:text-cyan-800">
						<a
							href="https://twitter.com/ROELv12037"
							target="_blank">
							Twitter
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
