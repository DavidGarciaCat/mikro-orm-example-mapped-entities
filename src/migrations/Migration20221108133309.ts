import { Migration } from '@mikro-orm/migrations';

export class Migration20221108133309 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `users` (`uuid` varchar(36) not null, `created_at` datetime not null, `username` varchar(256) not null, `password` varchar(256) not null, primary key (`uuid`)) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `users` add unique `users_username_unique`(`username`);');

    this.addSql('create table `referral_codes` (`uuid` varchar(36) not null, `created_at` datetime not null, `user_uuid` varchar(36) not null, `code` varchar(8) not null, primary key (`uuid`)) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `referral_codes` add unique `referral_codes_user_uuid_unique`(`user_uuid`);');
    this.addSql('alter table `referral_codes` add unique `referral_codes_code_unique`(`code`);');

    this.addSql('alter table `referral_codes` add constraint `referral_codes_user_uuid_foreign` foreign key (`user_uuid`) references `users` (`uuid`) on update cascade;');
  }

}
