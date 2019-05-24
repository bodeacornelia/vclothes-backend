import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTables1554292547841 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "role",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "name",
                    type: "varchar",
                }
            ]
        }), true)

        await queryRunner.createTable(new Table({
            name: "user",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "first_name",
                    type: "varchar",
                },
                {
                    name: "last_name",
                    type: "varchar",
                },
                {
                    name: "email",
                    type: "varchar",
                },
                {
                    name: "phone",
                    type: "varchar",
                },
                {
                    name: "password",
                    type: "varchar",
                },
                {
                    name: "roleId",
                    type: "int",
                }
            ]
        }), true)

        await queryRunner.createForeignKey("user", new TableForeignKey({
            columnNames: ["roleId"],
            referencedColumnNames: ["id"],
            referencedTableName: "role",
            onDelete: "CASCADE"
        }));

        await queryRunner.createTable(new Table({
            name: "category",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "category",
                    type: "varchar",
                }
            ]
        }), true)

        await queryRunner.createTable(new Table({
            name: "gender",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "gender",
                    type: "varchar",
                }
            ]
        }), true)

        await queryRunner.createTable(new Table({
            name: "photo",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "title",
                    type: "varchar",
                },
                {
                    name: "description",
                    type: "varchar",
                },
                {
                    name: "createdAt",
                    type: "date",
                },
                {
                    name: "photo_path",
                    type: "varchar",
                },
                {
                    name: "categoryId",
                    type: "int",
                },
                {
                    name: "genderId",
                    type: "int",
                }
            ]
        }), true)

        await queryRunner.createForeignKey("photo", new TableForeignKey({
            columnNames: ["categoryId"],
            referencedColumnNames: ["id"],
            referencedTableName: "category",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("photo", new TableForeignKey({
            columnNames: ["genderId"],
            referencedColumnNames: ["id"],
            referencedTableName: "gender",
            onDelete: "CASCADE"
        }));

        await queryRunner.createTable(new Table({
            name: "status",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "status",
                    type: "varchar",
                }
            ]
        }), true)

        await queryRunner.createTable(new Table({
            name: "appointment",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "appointment",
                    type: "date",
                },
                {
                    name: "hour",
                    type: "varchar",
                },
                {
                    name: "details",
                    type: "varchar",
                },
                {
                    name: "categoryId",
                    type: "int",
                },
                {
                    name: "userId",
                    type: "int",
                },
                {
                    name: "statusId",
                    type: "int",
                }
            ]
        }), true)

        await queryRunner.createForeignKey("appointment", new TableForeignKey({
            columnNames: ["categoryId"],
            referencedColumnNames: ["id"],
            referencedTableName: "category",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("appointment", new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("appointment", new TableForeignKey({
            columnNames: ["statusId"],
            referencedColumnNames: ["id"],
            referencedTableName: "status",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        const userTable = await queryRunner.getTable("user");
        const roleForeignKey = userTable.foreignKeys.find(fk => fk.columnNames.indexOf("roleId") !== -1);
        await queryRunner.dropForeignKey("user", roleForeignKey);
        await queryRunner.dropColumn("user", "roleId");
        await queryRunner.dropTable("role");

        const photoTable = await queryRunner.getTable("photo");
        const categoryForeignKey = photoTable.foreignKeys.find(fk => fk.columnNames.indexOf("categoryId") !== -1);
        await queryRunner.dropForeignKey("photo", categoryForeignKey);

        const genderForeignKey = photoTable.foreignKeys.find(fk => fk.columnNames.indexOf("genderId") !== -1);
        await queryRunner.dropForeignKey("photo", genderForeignKey);
        await queryRunner.dropTable("gender");
        await queryRunner.dropTable("photo");

        const appointmentTable = await queryRunner.getTable("appointment");
        const userForeignKey = appointmentTable.foreignKeys.find(fk => fk.columnNames.indexOf("userId") !== -1);
        await queryRunner.dropForeignKey("appointment", userForeignKey);

        const statusForeignKey = appointmentTable.foreignKeys.find(fk => fk.columnNames.indexOf("statusId") !== -1);
        await queryRunner.dropForeignKey("appointment", statusForeignKey);

        const appointmentCategoryForeignKey = appointmentTable.foreignKeys.find(fk => fk.columnNames.indexOf("categoryId") !== -1);
        await queryRunner.dropForeignKey("appointment", appointmentCategoryForeignKey);

        await queryRunner.dropTable("user");
        await queryRunner.dropTable("status");
        await queryRunner.dropTable("category");
        await queryRunner.dropTable("appointment");
    }

}
