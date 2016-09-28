import {EnvConfig} from './env-config.interface';

const ProdConfig: EnvConfig = {
  ENV: 'PROD',
  API: 'https://ambu-flow-api-test.azurewebsites.net'
};

export = ProdConfig;

