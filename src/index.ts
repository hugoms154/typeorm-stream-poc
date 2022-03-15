import "reflect-metadata";
import { createConnection, getManager, getRepository } from "typeorm";
import { Client } from "./Client.entity";

async function main() {
  await createConnection();
  console.log("connected!");

  const manager = getManager();
  const clientRepository = getRepository(Client);

  const count = await clientRepository.count();
  if (count === 0) {
    console.log("creating clients");
    const clients = Array(1000)
      .fill(null)
      .map((_, index) =>
        clientRepository.create({
          name: `Client ${index}`,
          email: `Email ${index}`,
        })
      );
    console.log("saving new clients");
    await clientRepository.save(clients);
  }

  console.log("getting clients from stream");
  const stream = await manager.createQueryBuilder(Client, "c").stream();

  stream.on("data", (client) => {
    console.log(client);
  });
}

main();
