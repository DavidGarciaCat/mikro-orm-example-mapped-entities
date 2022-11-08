import { Cascade, Entity, OneToOne, Property } from "@mikro-orm/core";
import Aggregate from "./aggregate";
import ReferralCode from "./referral-code";

@Entity({ tableName: 'users' })
export default class User extends Aggregate {
    @Property({ name: 'username', type: 'string', length: 256, unique: true, nullable: false })
    public username: string;

    @Property({ name: 'password', type: 'string', length: 256, nullable: false })
    public password: string;

    @OneToOne({ entity: () => ReferralCode, mappedBy: 'user', cascade: [ Cascade.ALL ] })
    public readonly referralCode: ReferralCode = new ReferralCode(this);

    constructor(username: string, password: string) {
        super();
        this.username = username;
        this.password = password;
    }
}
