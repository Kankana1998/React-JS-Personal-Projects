import { Client, Databases } from 'appwrite';

export const PROJECT_ID ='6593f5b755954007d69d'
export const DATABASE_ID = '6593f6f092965ce27c0d'
export const COLLECTION_ID_MESSAGES = '6593f7017b35b3da5494'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6593f5b755954007d69d');

export const databases = new Databases(client);

export default client;