import { MigrationInterface, QueryRunner } from 'typeorm';
import { Role, Gender, Status, Category } from '../entity';

export class SeedingTables1554292651284 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        // Default roles
        const roleAdmin = new Role();
        roleAdmin.name = 'admin';

        const roleUser = new Role();
        roleUser.name = 'user';

        await Role.save(roleAdmin);
        await Role.save(roleUser);

        // Default genders
        const genderFem = new Gender();
        genderFem.gender = 'F'

        const genderMasc = new Gender();
        genderMasc.gender = 'M'

        await Gender.save(genderFem);
        await Gender.save(genderMasc);

        // Default status
        const pending = new Status();
        pending.status = 'pending';

        const accepted = new Status();
        accepted.status = 'accepted';

        const cancelled = new Status();
        cancelled.status = 'cancelled';

        await Status.save(pending);
        await Status.save(accepted);
        await Status.save(cancelled);

        // Default categories
        const dresses = new Category();
        dresses.category = 'rochii';

        const pants = new Category();
        pants.category = 'pantaloni';

        await Category.save(dresses);
        await Category.save(pants);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
