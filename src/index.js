const express = require("express");
const rateLimit = require("express-rate-limit");
const { ServerConfig } = require("./config");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

const limiter = rateLimit({
  windowMs: 2 * 60 * 1000, // 2 minutes
  max: 30, // Limit each IP to 3 requests per `window` (here, per 15 minutes)
});

const apiRoutes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(limiter);

app.use(
  "/flightsService",
  createProxyMiddleware({
    target: ServerConfig.FLIGHT_SERVICE,
    changeOrigin: true,
    pathRewrite: { "^/flightsService": "/" },
  })
);
app.use(
  "/bookingService",
  createProxyMiddleware({
    target: ServerConfig.BOOKING_SERVICE,
    changeOrigin: true,
    pathRewrite: { "^/bookingService": "/" },
  })
);

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Server Running on port ${ServerConfig.PORT}`);
});
