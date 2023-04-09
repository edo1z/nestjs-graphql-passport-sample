import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SignInPayload {
  @Field()
  accessToken: string;
}
