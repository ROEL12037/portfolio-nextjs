import { Octokit } from "octokit";
import useSWR from "swr";

import Image from "next/image";

const octokit = new Octokit({
	auth: `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`,
	userAgent: "portfolio-nextjs-v0",
});

async function fetcher() {
	const response =
		await octokit.rest.activity.listReposStarredByAuthenticatedUser({
			per_page: 3,
			headers: { accept: "application/vnd.github.star+json" },
			sort: "starred",
			direction: "desc",
		});

	return response.data;
}

export default function Projects() {
	const { data: starredRepos, error } = useSWR("starredRepos", fetcher);

	console.log(starredRepos);

	if (error) return <div>Error loading starred repositories</div>;
	if (!starredRepos) return <div>Loading...</div>;

	return (
		<main className="flex items-center justify-center w-full min-h-[92vh]">
			<section className="flex flex-col items-center">
				<h2 className="mb-4 text-4xl text-cerulean">Recent Projects</h2>

				<section className="flex flex-wrap w-full sm:flex-row flex-col">
					{starredRepos.map((repo) => {
						return (
							<section
								className="w-full sm:w-1/2 h-1/2 p-2"
								key={repo.id}>
								<div className="bg-white rounded-lg shadow-lg min-h-[150px]">
									{/* <Image
										className="h-48 w-full object-cover"
										src="https://via.placeholder.com/500x300"
										alt="Card Image"
										width={500}
										height={300}
									/> */}
									<div className="px-6 py-4">
										<h3 className="font-bold text-gray-800 text-xl mb-2">
											{repo.repo.name}
										</h3>
										<p className="text-gray-700 text-base">
											Demo:{" "}
											<a
												href={repo.repo.homepage}
												target="_blank"
												className="hover:text-cerulean underline font-semibold">
												{repo.repo.homepage}
											</a>
										</p>
										<p className="text-gray-700 text-base">
											Created: {repo.repo.created_at}
										</p>
									</div>
								</div>
							</section>
						);
					})}
					<section className="w-full sm:w-1/2 h-1/2 p-2">
						<div className="bg-white rounded-lg shadow-lg min-h-[150px]">
							{/* <Image
								className="h-48 w-full object-cover"
								src="https://via.placeholder.com/500x300"
								alt="Card Image"
								width={500}
								height={300}
							/> */}
							<div className="px-6 py-4">
								<h3 className="font-bold text-gray-800 text-xl mb-2">
									Want to see more?
								</h3>
								<p className="text-gray-700 text-base">
									Check out the rest of my public repositories{" "}
									<a
										href="https://github.com/ROEL12037?tab=repositories"
										className="hover:text-cerulean underline font-semibold"
										target="_blank">
										here
									</a>
									.
								</p>
							</div>
						</div>
					</section>
				</section>
			</section>
		</main>
	);
}

/* 
possible
c5fffd \ celeste
D6FFF6 / ming green

*/
