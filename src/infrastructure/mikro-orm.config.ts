import { Options } from "@mikro-orm/core";
import { MariaDbDriver } from "@mikro-orm/mariadb";
import mikroOrmCredentials from "./mikro-orm.credentials";
import mikroOrmEntities from "./mikro-orm.entities";

const mikroOrmConfig: Options<MariaDbDriver> = {
    ...mikroOrmCredentials,
    debug: true,
    allowGlobalContext: true,
    entities: mikroOrmEntities,
    type: 'mariadb',
    charset: 'utf8mb4',
    forceUtcTimezone: true,
    forceUndefined: true,
}

export default mikroOrmConfig;
