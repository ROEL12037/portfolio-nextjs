import Image from "next/image";

import { formatDate } from "@/utils/dateHelpers";

export default function ProjectCard({ repo }) {
	console.log(repo);
	return (
		<>
			<section className="bg-white rounded-lg shadow-lg relative">
				<div className="px-6 py-4">
					<h3 className="font-bold text-black text-xl mb-2">
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
							<p className="text-black text-base mt-2">
								Demo:{" "}
								<a
									href={repo.repo.homepage}
									target="_blank"
									className="hover:text-cerulean underline font-semibold">
									{repo.repo.name}
								</a>
							</p>

							<p className="text-black mt-2 mb-8">{repo.repo.description}</p>

							<p className="text-black text-base absolute bottom-0 left-0 right-0 px-6 py-4">
								Created: {formatDate(repo.repo.created_at)}
							</p>
						</>
					) : (
						<>
							<p className="text-black text-base mt-2">
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
