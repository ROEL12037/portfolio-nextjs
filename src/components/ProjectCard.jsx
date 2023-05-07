import Image from "next/image";

import { formatDate } from "@/utils/dateHelpers";
import { formatTitle } from "@/utils/stringHelpers";

export default function ProjectCard({ repo }) {
	console.log(repo.repo.name);

	let imageURL;

	switch (repo.repo.name) {
		case "cienhoras":
			imageURL =
				"https://res.cloudinary.com/di2ps252x/image/upload/v1683319805/events_fbgn3a.png";
			break;
		case "reminders-app-local-auth":
			imageURL =
				"https://res.cloudinary.com/di2ps252x/image/upload/v1683319805/reminders_wzpxkk.png";
			break;
		case "tea-shop-webisite-demo":
			imageURL =
				"https://res.cloudinary.com/di2ps252x/image/upload/v1683319805/tea_prglsd.png";
			break;
		default:
			imageURL =
				"https://res.cloudinary.com/di2ps252x/image/upload/v1683320553/more_sriu4b.jpg";
	}

	return (
		<section className="bg-alice rounded-lg shadow-lg relative">
			<div className="px-6 py-4">
				<h3 className="text-cerulean text-xl mb-2 font-medium">
					{formatTitle(repo.repo.name)}
				</h3>

				<div className="min-h-[200px] max-h-[200px] mx-auto overflow-hidden border-cerulean border-2 rounded flex">
					<Image
						src={imageURL}
						alt="card image"
						width={300}
						height={300}
						className="mx-auto my-auto"
					/>
				</div>

				{repo.repo.description ? (
					<>
						<p className="text-black text-base mt-2">
							Demo:{" "}
							<a
								href={repo.repo.homepage}
								target="_blank"
								className="text-cerulean hover:opacity-60 underline font-semibold">
								{repo.repo.name}
								<span className="text-xs ml-1 fas fa-arrow-up-right-from-square"></span>
							</a>
						</p>

						<p className="text-black mt-2 mb-8 text-justify">
							{repo.repo.description}
						</p>

						<p className="text-black text-base absolute bottom-0 left-0 right-0 px-6 py-4">
							Created:{" "}
							<span className="font-medium text-cerulean">
								{formatDate(repo.repo.created_at)}
							</span>
						</p>
					</>
				) : (
					<>
						<p className="text-black text-base bold mt-2">
							The site you are currently on is also one of my projects. Built
							with Nextjs, utilizes Github API, styled with TailwindCSS, and
							deployed on Vercel. You can check out the rest of my public work{" "}
							<a
								href="https://github.com/ROEL12037?tab=repositories"
								className="hover:text-cerulean underline font-semibold"
								target="_blank">
								here
								<span className="text-xs ml-1 fas fa-arrow-up-right-from-square"></span>
							</a>
							.
						</p>
					</>
				)}
			</div>
		</section>
	);
}
