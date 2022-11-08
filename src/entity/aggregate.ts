import { v4 } from 'uuid';
import {PrimaryKey, PrimaryKeyProp, Property} from "@mikro-orm/core";

export default abstract class Aggregate {
    @PrimaryKey({ name: 'uuid', type: 'uuid' })
    public readonly uuid: string = v4().toString();

    @Property({ name: 'created_at', type: 'datetime' })
    public readonly createdAt: Date = new Date();
}
