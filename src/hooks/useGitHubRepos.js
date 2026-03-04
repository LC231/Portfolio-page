import { useState, useEffect } from 'react';

const useGitHubRepos = (username, options = {}) => {
  const { 
    sort = 'updated',
    excludeForks = true 
  } = options;

  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) {
      setLoading(false);
      return;
    }

    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=${sort}&per_page=100`
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();

        let filteredRepos = data;
        if (excludeForks) {
          filteredRepos = data.filter(repo => !repo.fork);
        }

        const formattedRepos = filteredRepos.map(repo => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
          homepage: repo.homepage,
          language: repo.language,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          topics: repo.topics || [],
          updatedAt: repo.updated_at,
        }));

        setRepos(formattedRepos);

        const langSet = new Set(
          filteredRepos
            .map(repo => repo.language)
            .filter(Boolean)
        );
        setLanguages([...langSet]);

      } catch (err) {
        setError(err.message);
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username, sort, excludeForks]);

  return { repos, languages, loading, error };
};

export default useGitHubRepos;
