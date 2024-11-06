import express from "express";
import cors from "cors";
import morgan from "morgan";

import { createServer } from "http";

import { createMySqlConnectionPool } from "@/libs/MySQL";
import { UserRepository } from "@/repositories/Users";
import { UserUsecases } from "@/usecases/Users";
import { UsersController } from "@/controllers/UsersController";
import { AppController } from "@/controllers/AppController";

const PORT = 4000;
const HOST = "0.0.0.0";

const app = express();

const mysqlConnectionPool = createMySqlConnectionPool();

const userRepository = new UserRepository(mysqlConnectionPool);
const userUsecases = new UserUsecases(userRepository);

const appController = new AppController();
const usersController = new UsersController(userUsecases);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.get("/users/:id", usersController.getUserById.bind(usersController));
app.get("/users", usersController.getUsers.bind(usersController))

/** not found's handler */
app.use(appController.handleNotFound);
/** error's handler */
app.use(appController.handleError);

const server = createServer(app);
server.listen(PORT, HOST, () => {
  console.log(`Server is running, Listening on ${PORT}`);
})
