// MikroORM dependencies
import { MikroORM } from "@mikro-orm/core";
import { MariaDbDriver } from "@mikro-orm/mariadb";
import mikroOrmConfig from "./mikro-orm.config";

export default async (
    shouldConnect: boolean = true,
    enableDebug: boolean = false
): Promise<MikroORM<MariaDbDriver>> => {
    mikroOrmConfig.debug = enableDebug;

    // ORM init
    return MikroORM.init<MariaDbDriver>(
        mikroOrmConfig,
        shouldConnect
    );
}
