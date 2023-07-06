import { removeFileFromFolder, saveFileToFolder } from 'src/helpers';
import { Repository } from 'typeorm';

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateImageDto } from './dto/create-image.dto';
import { ImageDto } from './dto/image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Image } from './entities/image.entity';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>,
  ) {}

  async create(body: CreateImageDto, image: ImageDto): Promise<Image> {
    const newImageFilename = saveFileToFolder(image);

    const newImage = this.imageRepository.create({
      filename: newImageFilename,
      description: body.description,
      created_at: new Date(),
      updated_at: new Date(),
    });

    return await this.imageRepository.save(newImage);
  }

  async findAll(): Promise<Image[]> {
    return await this.imageRepository.find();
  }

  async byId(id: number): Promise<Image> {
    const findImage = await this.imageRepository.findOne({ where: { id: id } });

    if (!findImage) {
      throw new NotFoundException('Image not found');
    }

    return findImage;
  }

  async update(
    id: number,
    body: UpdateImageDto,
    image: ImageDto,
  ): Promise<UpdateImageDto> {
    let newImageFilename: string | null = null;

    const foundImage = await this.byId(id);

    if (image) {
      removeFileFromFolder(foundImage.filename);

      delete foundImage.filename;
      newImageFilename = saveFileToFolder(image);
    }

    const updatedImage = {
      id,
      filename:
        newImageFilename !== null ? newImageFilename : foundImage.filename,
      ...body,
      updated_at: new Date(),
    };

    await this.imageRepository.update({ id }, updatedImage);

    return updatedImage;
  }

  async remove(id: number): Promise<number> {
    const foundImage = await this.byId(id);

    removeFileFromFolder(foundImage.filename);

    await this.imageRepository.delete(id);
    return foundImage.id;
  }
}
