import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "user1",
    password: "password1",
    database: "tonyking",
    synchronize: true,
    logging: true,
    entities: [
        "src/entity/**/*.ts"
    ],
    migrations: [],
    subscribers: [],
})
