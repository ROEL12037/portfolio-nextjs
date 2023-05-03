import { Octokit } from "octokit";
import useSWR from "swr";

const octokit = new Octokit({
	auth: `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`,
	userAgent: "portfolio-nextjs-v0",
});

async function fetcher() {
	const response =
		await octokit.rest.activity.listReposStarredByAuthenticatedUser({
			per_page: 3,
		});

	return response.data;
}

export default function Projects() {
	const { data: starredRepos, error } = useSWR("starredRepos", fetcher);

	if (error) return <div>Error loading starred repositories</div>;
	if (!starredRepos) return <div>Loading...</div>;

	return (
		<main className="flex items-center justify-center w-full h-[92vh]">
			<section className="flex flex-col items-center">
				<h2 className="mb-4 text-4xl text-cerulean">Recent Projects</h2>

				<section className="flex flex-wrap w-full sm:flex-row flex-col">
					{starredRepos.map((repo) => {
						return (
							<section
								key={repo.id}
								className="w-full sm:w-1/2 h-1/2 p-2">
								<section className="bg-white h-full text-cerulean">
									{repo.name}
								</section>
							</section>
						);
					})}
					<section className="w-full sm:w-1/2 h-1/2 p-2">
						<section className="bg-white h-full text-cerulean">
							all projects
						</section>
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
