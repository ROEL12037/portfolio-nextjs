import useSWR from "swr";

import Spinner from "@/components/Spinner";
import ProjectCard from "@/components/ProjectCard";

import { fetcher } from "@/lib/octokit";

export default function Projects({ starredRepos }) {
	const { data, error } = useSWR("/api/get-starred-repos", fetcher, {
		initialData: starredRepos,
	});

	// console.log(data);

	if (error)
		return (
			<div className="flex flex-col items-center justify-center w-full min-h-[92vh]">
				<div>{`We are experiencing technical difficulties getting the project data.`}</div>
				<div>some gif</div>
				<div>{error && `More info: ${error.message}`}</div>
			</div>
		);

	if (!data) return <Spinner />;

	return (
		<main className="flex items-center justify-center w-full min-h-[92vh]">
			<section className="flex flex-col items-center mx-4 mb-4">
				<h2 className="mb-4 text-4xl text-cerulean">Recent Projects</h2>

				<section className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
					{data.map((repo) => {
						return (
							<ProjectCard
								repo={repo}
								key={repo.repo.id}
							/>
						);
					})}

					<ProjectCard
						repo={{
							repo: {
								name: "Want to see more?",
							},
						}}
					/>
				</section>
			</section>
		</main>
	);
}
