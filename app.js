require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const connectDB = require("./config/db");
const graphqlSchema = require("./graphql/schema");
const graphqlResolvers = require("./graphql/resolvers");
const urlRoutes = require("./routes/url.routes");
const { notFound, errorHandler } = require("./middleware/error.middleware");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

connectDB();

// Routes
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
);
app.use(urlRoutes);

// middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
