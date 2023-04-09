import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  id: string;
  title: string;
  content?: string;
  published: boolean;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}
