import "./instrumentation";

import { Hono } from "hono";
import { logger } from "hono/logger";
import { swaggerUI } from "@hono/swagger-ui";
import { prometheus } from "@hono/prometheus";

const app = new Hono().basePath("/api");

const { printMetrics, registerMetrics } = prometheus({
  collectDefaultMetrics: true,
});

app.use(logger());
app.use("*", registerMetrics);

app.get("/", (c) => {
  return c.json({ status: "ok" });
});

app.get("/metrics", printMetrics);

app.get("/ui", swaggerUI({ url: "/doc" }));

export default {
  port: 8080,
  fetch: app.fetch,
};
