import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SignInPayload {
  accessToken: string;
}
