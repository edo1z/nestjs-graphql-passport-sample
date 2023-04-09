import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Profile {
  sub: string;
  email: string;
  name?: string;
}
