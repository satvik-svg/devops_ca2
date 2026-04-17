const request = require("supertest");
const app = require("../src/app");

describe("GET /health", () => {
  it("returns server status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("ok");
    expect(response.body.service).toBe("devops-ca2-api");
    expect(response.body.timestamp).toBeDefined();
  });
});
