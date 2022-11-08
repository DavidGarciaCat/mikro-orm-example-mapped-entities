import _ from 'lodash';
import { Entity, OneToOne, Property } from "@mikro-orm/core";
import Aggregate from "./aggregate";
import User from "./user";

@Entity({ tableName: 'referral_codes' })
export default class ReferralCode extends Aggregate {
    private static characters: string[]  = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '_',
    ];

    @OneToOne({ entity: () => User, inversedBy: 'referralCode', referenceColumnName: 'uuid', name: 'user_uuid', unique: true })
    public readonly user: User;

    @Property({ name: 'code', type: 'string', length: 8, unique: true })
    public readonly code: string = '';

    constructor(user: User) {
        super();

        this.user = user;

        do {
            const shuffled = _.shuffle(ReferralCode.characters);
            const char = shuffled[0];
            this.code = `${this.code}${char}`;
        } while (8 !== this.code.length);
    }
}
