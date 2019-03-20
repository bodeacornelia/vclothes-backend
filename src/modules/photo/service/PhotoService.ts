import { getRepository } from "typeorm";
import Photo from "../../../entity/Photo";
import Category from "../../../entity/Category";
import Gender from "../../../entity/Gender";

class PhotoService {
  async createPhoto(newPhoto) {
    let categoryRepository = getRepository(Category);
    let category = await categoryRepository.findOne({ category: newPhoto.category });

    let genderRepository = getRepository(Gender);
    let gender = await genderRepository.findOne({ gender: newPhoto.gender });

    const photo = new Photo();
    photo.title = newPhoto.title;
    photo.description = newPhoto.description;
    photo.createdAt = newPhoto.createdAt;
    photo.photo_path = newPhoto.photo_path;
    photo.category = category;
    photo.gender = gender

    let photoRepository = getRepository(Photo);
    await photoRepository.save(photo);
  }

  async getAllPhotos() {
    let photoRepository = getRepository(Photo);
    const photos = await photoRepository.find();
    return photos;
  }
}

export default new PhotoService();