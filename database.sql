create database 'test_mikro_orm';
create user 'test_mikro_orm'@'%' identified by 'test_mikro_orm';
grant all privileges on test_mikro_orm.* to 'test_mikro_orm'@'%';
flush privileges;
