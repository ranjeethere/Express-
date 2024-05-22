const cors = require("cors");
const express = require("express");

// importing routes
const activityRoutes = require("./routes/activityRoutes");

const app = new express(); // creating app and using moddleware

app.use(cors());
app.use(express, json());
//using routes
const routePrefix = "/api/v1";
app.use(routePrefix, activityRoutes);

// export App
module.exports = app;
