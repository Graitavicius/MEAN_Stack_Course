const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "flksndflsd1231fsd",
      title: "First server-side post",
      content: "This is comming from the server",
    },
    {
      id: "agslndf321a3s5dasdas",
      title: "Second server-side post",
      content: "This is comming from the server",
    },
    {
      id: "65asd5asdas3da",
      title: "Third server-side post",
      content: "This is comming from the server",
    },
  ];
  res.status(200).json({
    message: "Posts fetched successfully",
    posts: posts,
  });
});

module.exports = app;
