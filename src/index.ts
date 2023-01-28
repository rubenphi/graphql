import "reflect-metadata";
import {startApolloServer} from "./app";
import {appDataSource} from "./config/typeorm";


async function main(){
  appDataSource.initialize();
  const app = await startApolloServer();
  app.listen(3000);
  console.log('server on port 3000')
}

main();
