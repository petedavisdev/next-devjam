import Link from "next/link";

export default function Home() {
	return (
		<main>
			<h1>Have your say</h1>
			<Link href="/choose">
				<a>Which milk chocolate is yummiest?</a>
			</Link>
		</main>
	);
}
