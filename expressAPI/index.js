const express = require("express");
const cors = require("cors");
const usersRoutes = require("./routes/usersRoutes");
const quizzesRoutes = require("./routes/quizzesRoutes");
const port = 3000;
const app = express();
const swaggerUi = require("swagger-ui-express");

swaggerDocument = require("./swagger.json");

app.use("/quizmi", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/", quizzesRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
