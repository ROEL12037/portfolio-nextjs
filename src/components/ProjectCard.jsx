import Image from "next/image";

import { formatDate } from "@/utils/dateHelpers";
import { formatTitle } from "@/utils/stringHelpers";

export default function ProjectCard({ repo }) {
	return (
		<section className="bg-alice rounded-lg shadow-lg relative">
			<div className="px-6 py-4">
				<h3 className="text-cerulean text-xl mb-2 font-medium">
					{formatTitle(repo.repo.name)}
				</h3>

				<Image
					src="https://via.placeholder.com/440x248"
					alt="card image"
					width={440}
					height={248}
					className="mx-auto"
				/>

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
							This website is also one of my projects. But, you can check out
							the rest of my public work{" "}
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
