const express = require("express");
const rateLimit = require("express-rate-limit");
const { ServerConfig } = require("./config");

const app = express();

const limiter = rateLimit({
  windowMs: 2 * 60 * 1000, // 2 minutes
  max: 3, // Limit each IP to 3 requests per `window` (here, per 15 minutes)
});

const apiRoutes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(limiter);

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Server Running on port ${ServerConfig.PORT}`);
});
