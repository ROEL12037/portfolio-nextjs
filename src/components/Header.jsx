import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
	const router = useRouter();

	// styles
	const activeStyles = "my-auto px-1 py-1 bg-cyan-800";
	const inactiveStyles = "my-auto px-1 py-1 hover:text-cyan-800";

	return (
		<header className="h-8 border-b-2">
			<nav className="flex flex-row justify-between">
				<ul className="flex">
					<li
						className={
							router.pathname == "/" ? `${activeStyles}` : `${inactiveStyles}`
						}>
						<Link href={"/"}>Roel Codes</Link>
					</li>
					<li
						className={
							router.pathname == "/projects"
								? `${activeStyles}`
								: `${inactiveStyles}`
						}>
						<Link href={"/projects"}>Projects</Link>
					</li>
					<li
						className={
							router.pathname == "/contact"
								? `${activeStyles}`
								: `${inactiveStyles}`
						}>
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
