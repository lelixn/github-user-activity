const express = require("express");
const app = express();
const profileController = require("./controllers/profileController");
const repoController = require("./controllers/repoController");

const githubController = require("./controllers/githubController");

app.get("/activity/:user", githubController.getActivity);

app.get("/profile/:user", profileController.profile);
app.get("/repos/:user", repoController.repos);

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
