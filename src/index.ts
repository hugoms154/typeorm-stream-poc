import "reflect-metadata";
import { createConnection, getManager } from "typeorm";
import { Client } from "./Client.entity";

async function main() {
  await createConnection();
  console.log("connected!");

  const manager = getManager();

  const stream = await manager.createQueryBuilder(Client, "c").stream();

  stream.on("data", (client) => {
    console.log(client);
  });
}

main();
