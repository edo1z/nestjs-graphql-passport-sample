import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  id: string;
  email: string;
  password: string;
  name?: string;
  createdAt: Date;
  updatedAt: Date;
}
