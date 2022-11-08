import dotenv from "dotenv";
dotenv.config();

const dbHost = process.env.ORM_HOST as string;
const dbPort = process.env.ORM_PORT as unknown as number;
const dbUser = process.env.ORM_USER as string;
const dbPswd = process.env.ORM_PSWD as string;
const dbName = process.env.ORM_NAME as string;

export default {
    host: dbHost,
    port: dbPort,
    dbName: dbUser,
    user: dbPswd,
    password: dbName,
};
