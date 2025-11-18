module.exports = function (event) {
  return {
    type: event.type,
    repo: event.repo?.name || "Unknown Repo",
    created_at: event.created_at,
    summary: getSummary(event),
  };
};

function getSummary(event) {
  const payload = event.payload || {};

  switch (event.type) {
    case "PushEvent":
      const commits = Array.isArray(payload.commits)
        ? payload.commits.length
        : 0;
      return `Pushed ${commits} commit(s)`;

    case "CreateEvent":
      return `Created ${payload.ref_type || "something"}`;

    case "IssuesEvent":
      return `${payload.action || "performed"} an issue`;

    case "PullRequestEvent":
      return `${payload.action || "performed"} a pull request`;

    default:
      return event.type;
  }
}
