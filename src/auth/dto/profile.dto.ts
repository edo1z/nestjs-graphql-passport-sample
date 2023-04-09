import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Profile {
  id: string;
  email: string;
  name?: string;
}
