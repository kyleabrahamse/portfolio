import "./globals.css";
import Hero from "./components/hero";
import Projects from "./components/projects";
import About from "./components/about";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
    </main>
  );
}
