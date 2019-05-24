import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAdminRole1557768484870 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("INSERT INTO `user` (`first_name`,`last_name`,`email`,`phone`,`password`,`roleId`) VALUES ('Nelly', 'Bodea', 'bodeanely94@gmail.com', '0762858700', 'VSecret2019*.', 1)");

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DELETE FROM `user` WHERE `roleId`=1");
          ;

    }

}
