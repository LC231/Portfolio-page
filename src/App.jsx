import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useGitHubRepos from './hooks/useGitHubRepos';
import './App.css';

// Replace 'yourusername' with your actual GitHub username
const GITHUB_USERNAME = 'LC231';

function App() {
  const { repos, languages, loading, error } = useGitHubRepos(GITHUB_USERNAME, {
    perPage: 6,
    sort: 'updated',
    excludeForks: true,
  });

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills languages={languages} />
        <Projects repos={repos} loading={loading} error={error} />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
