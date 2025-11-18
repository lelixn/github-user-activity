const fetchGitHub = require("../utils/fetchGitHub");

exports.getUserProfile = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  const data = await fetchGitHub(url);

  return {
    login: data.login,
    name: data.name,
    avatar: data.avatar_url,
    bio: data.bio,
    publicRepos: data.public_repos,
    followers: data.followers,
    following: data.following,
    location: data.location,
    created_at: data.created_at,
    profile_url: data.html_url,
  };
};
