const users = require("./models/users");

const request = require("supertest");
const app = require("./app");

describe("GET /users", () => {
  let user1 = "testing@gmail.com";
  test("user matches whats in users array", () => {
    return request(app)
      .get(`/users/${user1}`)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(users[1]);
      });
  });
});
