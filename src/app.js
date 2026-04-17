const express = require("express");

const app = express();

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "devops-ca2-api",
    version: "1.0.0",
    timestamp: new Date().toISOString()
  });
});

module.exports = app;
