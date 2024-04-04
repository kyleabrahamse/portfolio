import "./globals.css"
import Navbar from "./Navigation/page";
import Hero from "./components/hero";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}
