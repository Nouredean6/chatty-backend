import mongoose from 'mongoose';
import { isPropertyAccessChain } from 'typescript';
import { config } from './config';
import bunyan from 'bunyan';
import Logger from 'bunyan';
const log : Logger = config.createLogger('setDatabase');

export default ()=>{
  const connect = ()=>{
    mongoose.connect(`${config.DATABASE_URL}`)
    .then(()=>{
      log.info('succefuly connected to DB');
    })
    .catch((error)=>{
      log.error('error connecting to DB', error);
      return process.exit(1);
    });
  };
  connect();
  mongoose.connection.on('disconnected', connect);

};
