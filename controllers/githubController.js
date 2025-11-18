const githubService = require("../services/githubService");

exports.getActivity = async (req, res) => {
  const username = req.params.user;

  try {
    const events = await githubService.fetchEvents(username);
    res.json({
      success: true,
      user: username,
      events,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
