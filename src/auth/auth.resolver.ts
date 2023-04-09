import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { UseGuards } from '@nestjs/common';
import { Context } from '@nestjs/graphql';
import { SignInInput } from './dto/sign-in.input';
import { SignInPayload } from './dto/sign-in.payload';
import { Profile } from './dto/profile.dto';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => SignInPayload, { name: 'signIn' })
  async signIn(@Args('input') signInInput: SignInInput) {
    return this.authService.signIn(signInInput.email, signInInput.password);
  }

  @UseGuards(AuthGuard)
  @Query(() => Profile, { name: 'profile' })
  async getProfile(@Context() ctx: any) {
    console.log(ctx.req.user);
    return ctx.req.user;
  }
}
