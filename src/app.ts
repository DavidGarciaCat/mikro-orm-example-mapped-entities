// .env
import dotenv from 'dotenv';
dotenv.config();

// dependencies
import { v4 } from 'uuid';
import ormInit from './infrastructure/mikro-orm';
import User from "./entity/user";
import ReferralCode from "./entity/referral-code";
import Aggregate from "./entity/aggregate";
import {EntityName} from "@mikro-orm/core";

// create test data
const createTestData = async (): Promise<void> => {
    // example data with random username/password set as UUID strings
    // referral codes must be set automatically, based on the current settings
    const user1 = new User(v4().toString(), v4().toString());
    const user2 = new User(v4().toString(), v4().toString());
    const user3 = new User(v4().toString(), v4().toString());

    // persist example data
    const orm = await ormInit();
    orm.em.persist(user1);
    orm.em.persist(user2);
    orm.em.persist(user3);
    await orm.em.flush();
    console.log('Data has been created');
};

// read test data
const retrieveData = async (entity: EntityName<any>): Promise<Aggregate[]> => {
    const orm = await ormInit();
    const data = await orm.em.find(entity, {});
    console.log('==== LOADED DATA ====', data);
    return data;
}

// remove test data
const deleteTestData = async (): Promise<void> => {
    const orm = await ormInit();
    const referralCodes = await retrieveData(ReferralCode);
    const users = await retrieveData(User);
    referralCodes.forEach(referralCode => { orm.em.remove(referralCode); })
    users.forEach(user => { orm.em.remove(user); })
    await orm.em.flush();
    console.log('Data has been deleted');
}

createTestData().then(async () => {
    await retrieveData(User);
    await deleteTestData();
});
