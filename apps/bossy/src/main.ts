const config = process.env.NODE_ENV === "test" ? { path: `./.env.test` } : {};
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config(config);

import { getLogger } from "@cloudposse/common";

import { app } from "./app";

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  getLogger("main").info(`bossy app listening at http://localhost/${port}`);
});

server.on("error", console.error);
