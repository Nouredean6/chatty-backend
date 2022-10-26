import express, {Express} from 'express';
import { ChattyServer } from './setupServer';
import databaseConnection from './setupDatabase';
import { config } from './config';

class Application{
  public initialize() : void{
    this.loadconfig();
    databaseConnection();
    const app : Express = express();
    const server : ChattyServer = new ChattyServer(app);
    server.start();
  }
  private loadconfig() : void{
    config.validateConfig();
  }
};
const application : Application = new Application();
application.initialize();