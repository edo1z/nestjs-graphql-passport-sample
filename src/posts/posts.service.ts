import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPostInput: CreatePostInput) {
    return this.prisma.post.create({
      data: createPostInput,
    });
  }

  findAll() {
    return this.prisma.post.findMany();
  }

  findOne(id: string) {
    return this.prisma.post.findUnique({
      where: { id },
    });
  }

  update(id: string, updatePostInput: UpdatePostInput) {
    return this.prisma.post.update({
      where: { id },
      data: updatePostInput,
    });
  }

  remove(id: string) {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}
