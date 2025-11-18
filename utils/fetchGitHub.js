const token = process.env.GITHUB_TOKEN || null;

async function fetchGitHub(url) {
  const headers = {
    "User-Agent": "github-api-backend",
    "Accept": "application/vnd.github+json",
  };

  if (token) headers["Authorization"] = `token ${token}`;

  const res = await fetch(url, { headers });

  if (res.status === 404) throw new Error("User not found");
  if (res.status === 403) throw new Error("Rate limit reached. Provide a token.");

  const data = await res.json();
  return data;
}

module.exports = fetchGitHub;
