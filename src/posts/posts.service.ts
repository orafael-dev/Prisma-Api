import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsRepository } from './repositories/posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly repository: PostsRepository) {}

  async create(createPostDto: CreatePostDto) {
    return this.repository.create(createPostDto);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number) {
    return this.repository.findOne(id);
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    return this.repository.update(id, updatePostDto);
  }

  async remove(id: number) {
    return this.repository.remove(id);
  }
}
