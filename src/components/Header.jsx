import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
	const router = useRouter();

	// styles
	const activeStyles = "my-auto px-2 py-1 bg-cyan-800 text-white";
	const inactiveStyles = "my-auto px-2 py-1 hover:text-cyan-800";

	return (
		<header>
			<nav className="h-[8vh] flex justify-between">
				<ul className="flex y	-auto">
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

				<ul className="flex y-auto">
					<li className="mx-2 my-auto hover:text-cyan-800">
						<a
							href="https://www.linkedin.com/in/roel12037/"
							target="_blank"
							className="y-auto fab fa-linkedin-in text-2xl"></a>
					</li>
					<li className="mx-2 my-auto hover:text-cyan-800">
						<a
							href="https://github.com/ROEL12037"
							target="_blank"
							className="fab fa-github text-2xl"></a>
					</li>
					<li className="mx-2 my-auto hover:text-cyan-800">
						<a
							href="https://twitter.com/ROELv12037"
							target="_blank"
							className="fab fa-twitter text-2xl"></a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
