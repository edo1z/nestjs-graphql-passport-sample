import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content?: string;
  published: boolean;
  authorId: string;
}
