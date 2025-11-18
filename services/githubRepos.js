const fetchGitHub = require("../utils/fetchGitHub");

exports.getUserRepos = async (username) => {
  const url = `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`;
  const data = await fetchGitHub(url);

  return data.map(repo => ({
    name: repo.name,
    full_name: repo.full_name,
    description: repo.description,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    language: repo.language,
    updated_at: repo.updated_at,
    repo_url: repo.html_url,
  }));
};
