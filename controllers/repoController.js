const { getUserRepos } = require("../services/githubRepos");

exports.repos = async (req, res) => {
  try {
    const username = req.params.user;
    const repos = await getUserRepos(username);

    res.json({
      success: true,
      repos,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
