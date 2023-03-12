import { Octokit } from "octokit";

export default async function handler(req, res) {
	const octokit = new Octokit({
		auth: process.env.OCTOKIT_ACCESS_TOKEN,
		userAgent: "portfolio-nextjs-v0",
	});

	const response =
		await octokit.rest.activity.listReposStarredByAuthenticatedUser({
			per_page: 5,
			headers: { accept: "application/vnd.github.star+json" },
			sort: "starred",
			direction: "desc",
		});

	res.status(200).json(response.data);
}
