import { createConnection, getRepository } from 'typeorm';
import { Role, Gender, Status, Category } from './src/entity';

export const connection = async () => {
    await createConnection()
        .catch(error => console.log(error));

    initializeDBIfNeeded();
};

const initializeRole = () => {
    const roleRepository = getRepository(Role);
    const roleAdmin = new Role();
    roleAdmin.name = 'admin';

    const roleUser = new Role();
    roleUser.name = 'user';

    roleRepository.save(roleAdmin);
    roleRepository.save(roleUser);

}

const initializeGender = () => {
    const genderRepository = getRepository(Gender);

    const genderFem = new Gender();
    genderFem.gender = 'F'

    const genderMasc = new Gender();
    genderMasc.gender = 'M'

    genderRepository.save(genderFem);
    genderRepository.save(genderMasc);

}

const initializeStatus = () => {
    const statusRepository = getRepository(Status);

    const pending = new Status();
    pending.status = 'pending';

    const accepted = new Status();
    accepted.status = 'accepted';

    const cancelled = new Status();
    cancelled.status = 'cancelled';

    statusRepository.save(pending);
    statusRepository.save(accepted);
    statusRepository.save(cancelled);
}

const initializeCategory = () => {
    const categoryRepository = getRepository(Category);

    const dresses = new Category();
    dresses.category = 'rochii';

    const pants = new Category();
    pants.category = 'pantaloni';

    categoryRepository.save(dresses);
    categoryRepository.save(pants);
}

export const initializeDBIfNeeded = async () => {
    const roleRepository = getRepository(Role);
    const roles = await roleRepository.find();

    const genderRepository = getRepository(Gender);
    const genders = await genderRepository.find();

    const statusRepository = getRepository(Status);
    const status = await statusRepository.find();

    const categoryRepository = getRepository(Category);
    const categories = await categoryRepository.find();

    if (!roles.length) {
        initializeRole();
    }

    if (!genders.length) {
        initializeGender();
    }

    if (!status.length) {
        initializeStatus();
    }

    if (!categories.length) {
        initializeCategory();
    }
}



