const githubService = require("./services/githubService");

(async () => {
  const username = process.argv[2];
  if (!username) return console.log("Usage: node cli.js <username>");

  try {
    const events = await githubService.fetchEvents(username);
    console.log("Recent events for:", username);
    events.forEach(e =>
      console.log(`[${e.created_at}] ${e.repo} — ${e.summary}`)
    );
  } catch (err) {
    console.log("Error:", err.message);
  }
})();
