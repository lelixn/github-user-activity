const express = require("express");
const app = express();

const githubController = require("./controllers/githubController");

app.get("/activity/:user", githubController.getActivity);

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
