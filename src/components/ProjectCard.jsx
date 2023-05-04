import Image from "next/image";

import { formatDate } from "@/utils/dateHelpers";

export default function ProjectCard({ repo }) {
	console.log(repo);
	return (
		<>
			<section className="bg-white rounded-lg shadow-lg">
				<div className="px-6 py-4">
					<h3 className="font-bold text-gray-800 text-xl mb-2">
						{repo.repo.name}
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
							<p className="text-gray-700 text-base">
								Demo:{" "}
								<a
									href={repo.repo.homepage}
									target="_blank"
									className="hover:text-cerulean underline font-semibold">
									{repo.repo.name}
								</a>
							</p>

							<p className="text-black">{repo.repo.description}</p>

							<p className="text-gray-700 text-base">
								Created: {formatDate(repo.repo.created_at)}
							</p>
						</>
					) : (
						<>
							<p className="text-gray-700 text-base">
								This website is also one of my projects. But, you can check out
								the rest of my public work{" "}
								<a
									href="https://github.com/ROEL12037?tab=repositories"
									className="hover:text-cerulean underline font-semibold"
									target="_blank">
									here
								</a>
								.
							</p>
						</>
					)}
				</div>
			</section>
		</>
	);
}
