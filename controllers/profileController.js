const { getUserProfile } = require("../services/githubProfile");

exports.profile = async (req, res) => {
  try {
    const username = req.params.user;
    const profile = await getUserProfile(username);

    res.json({
      success: true,
      profile,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
