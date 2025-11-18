// services/githubService.js
const formatEvent = require("../utils/formatEvent");

const token = process.env.GITHUB_TOKEN || null;

async function doFetch(url, options = {}) {
  
  if (typeof fetch === "function") {
    return fetch(url, options);
  } else {
    
    const { default: nodeFetch } = await import("node-fetch");
    return nodeFetch(url, options);
  }
}

exports.fetchEvents = async (username) => {
  const url = `https://api.github.com/users/${username}/events/public`;

  const headers = {
    "User-Agent": "github-activity-cli",
    "Accept": "application/vnd.github+json",
  };
  if (token) headers["Authorization"] = `token ${token}`;

  const res = await doFetch(url, { headers });

  if (res.status === 404) {
    throw new Error("User not found");
  }
  if (res.status === 403) {
    throw new Error("Rate limit reached. Try again later.");
  }
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub API error ${res.status}: ${body}`);
  }

  const data = await res.json();
  return Array.isArray(data) ? data.map(formatEvent) : [];
};
