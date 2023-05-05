export function formatTitle(str) {
	return str.split("-").slice(0, 2).join(" ").toUpperCase();
}
