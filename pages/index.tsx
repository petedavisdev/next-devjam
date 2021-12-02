import { Header } from "../components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <h1>Hello</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
    </main>
  );
}
